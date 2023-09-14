from ..user import user_bp
from flask import request, jsonify, url_for

from ..main.errors import bad_request
from ...extensions import db
from ...models import User

@user_bp.route('/users/<id>', methods=['GET'])
def get_user(id):
    """
        Returns requested user as JSON object if user found or
        returns 404 code if user doesn't exist. 
        
    """
    return jsonify(User.query.get_or_404(id).to_dict())

@user_bp.route('/users/', methods=['POST'])
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
    response.headers['Location'] = url_for('user.get_user', id=user.id)
    return response

@user_bp.route('/users/<id>', methods=['PUT'])
def update_user(id):
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
    user:User = User.query.get_or_404(id)
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
    db.session.commit()

    # return new user resource represnetation
    return jsonify(user.to_dict())

@user_bp.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    """
        delete_user fetches a user using their ID and 
        deletes the resource from the database
    """
    user:User = User.query.get_or_404(id)
    try:
        db.session.delete(user)
    except:
        db.session.delete(user)
    db.session.commit()

    response = {
        "message": "account has been successfully deleted" 
    }

    return response