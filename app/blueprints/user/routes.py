from ..user import user_bp
from flask import request, jsonify, url_for
from flask_jwt_extended import create_access_token, jwt_required, set_access_cookies, unset_jwt_cookies

from ..main.errors import bad_request, error_response
from ...extensions import db
from ...models import User

@user_bp.route('/login/', methods=['POST'])
def login():
    """
        Retrieves a JSON object in the form:
        {
            [REQUIRED] "username": value,
            [REQUIRED] "password": value
        }

        Error handling checks if the required fields are present and if the user exists.
        If the user exists and password is correct, create a JWT Access Token and bind it to
        the user's username.

        After that, it modifies the response object to set the access token & CSRF token as cookies
        and returns the response object to the user.

        If the credentials are invalid, return 401 code for invalid credentials.
    """
    data = request.get_json() or {}

    if 'username' not in data or 'password' not in data:
        return bad_request('must include username and password')

    try:
        user:User = User.query.filter_by(username=data['username']).first()
    except:
        return error_response(500, 'internal server error')

    if user and user.check_password(data['password']):
        response = jsonify({"message": "login successful"})
        access_token = create_access_token(identity=data['username'])
        
        set_access_cookies(response, access_token)
        response.set_cookie("id", data['username'])
        return response
    else:
        return error_response(401, 'invalid credentials')
    
@user_bp.route('/', methods=['POST'])
def register_user():
    """
        create_user function recieves a JSON request following this format:
        {
            [REQUIRED] [UNIQUE] "username": "username"
            [REQUIRED] [UNIQUE] "email": "email@test.com",
            [REQUIRED]          "password": "password"
        }

        Error handling checks if the mandatory fields are present and if it already exists in the database. 
        If it passes through the error handling, new User object is created using the function User.from_dict().

        Returns URL to newly created user resource
        Code: 201 (Created Sucess)
    """
    # Retrieve JSON body from request or set empty json 
    data = request.get_json() or {}

    # Checking if mandatory fields are present -> return error if not
    if 'username' not in data or 'email' not in data or 'password' not in data:
        return bad_request('must include username, email and password')
    if User.query.filter_by(username=data['username']).first():
        return bad_request('please use a different username')
    if User.query.filter_by(email=data['email']).first():
        return bad_request('please use a different email')
    
    # Create new user if above checks pass
    user:User = User().from_dict(data, new_user=True)
    db.session.add(user)
    db.session.commit()

    # Return valid response for successful object creation
    response = jsonify(user.to_dict())
    response.status_code = 201
    
    # Set location to URL for new resource
    response.headers['Location'] = url_for('user.get_user', username=user.username)
    return response

@user_bp.route('/logout/', methods=['POST'])
@jwt_required()
def logout():
    """
        logout function unsets the JWT tokens from the user's cookies, thus logging them out of the server

        Need to redirect back to homepage on frontend side
    """
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    response.set_cookie('id', '', expires=0)
    return response

@user_bp.route('/id/<username>/', methods=['GET'])
@jwt_required()
def get_user(username:str):
    """
        Returns requested user as JSON object if user found or
        returns 404 code if user doesn't exist. 
        
    """
    user:User = User.query.filter_by(username=username).first()
    if user:
        return jsonify(user.to_dict())
    else:
        return error_response(404, "user not found")

@user_bp.route('/id/<username>/', methods=['PUT'])
@jwt_required()
def update_user(username:str):
    """
        update_user function recieves a response object following this format:
        {
            [OPTIONAL] "username": "username",
            [OPTIONAL] "email": "email"
        }

        Error handling checks if the new username/email aren't the same as
        current and arent already in use.

        If passes error handling, the user's details are changed using User.from_dict().

        Returns updated resource representation
        Code: 200 (OK)
    """
    try:
        user:User = User.query.filter_by(username=username).first()
    except:
        return error_response(500, 'internal server error')
    data = request.get_json() or {}

    # Checking if the new data already exists in the database
    # but as each field is optional, first check if the fields 
    # exist in response object & not same 
    if 'username' in data and data['username'] != user.username and \
            User.query.filter_by(username=data['username']).first():
        return bad_request('please use a different username')
    if 'email' in data and data['email'] != user.email and \
            User.query.filter_by(email=data['email']).first():
        return bad_request('please use a different email')

    # change user data 
    user.from_dict(data, new_user=False)
    try:
        db.session.commit()
    except:
        db.session.rollback()
        return error_response(500, 'internal server error')

    # return new user resource represnetation
    return url_for('user.get_user', username=user.username)

@user_bp.route('/id/<username>/', methods=['DELETE'])
@jwt_required()
def delete_user(username:str):
    """
        delete_user fetches a user using their ID and 
        deletes the resource from the database
    """
    try:
        user:User = User.query.filter_by(username=username).first()
        db.session.delete(user)
        db.session.commit()
    except:
        return error_response(500, 'internal server error')

    response = {
        "message": "account has been successfully deleted" 
    }

    return response