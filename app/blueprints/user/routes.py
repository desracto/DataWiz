from ..user import user_bp
from flask import request, jsonify, session, url_for

from ..main.errors import bad_request, error_response
from ...extensions import bcrypt, db
from ...models import User

@user_bp.route("/me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({
            "error": "Unauthorized"
        }), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    })

@user_bp.route("/register", methods=['POST'])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({
            "error": "User already exists"
        }), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@user_bp.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    # User doesnt exist
    if user is None:
        return jsonify({
            "error": "Unauthorized"
        }), 401
    
    # Invalid password
    if not bcrypt.check_password_hash(user.password_hash, password):
        return jsonify({
            "error": "Unauthorized"
        }), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

@user_bp.route('/users/<id>', methods=['GET'])
def get_user(id):
    """
        Returns requested user as JSON object 
    """
    return jsonify(User.query.get_or_404(id).to_dict())

@user_bp.route('/users/', methods=['POST'])
def create_user():
    """
        create_user function recieves a JSON request following this format:
        {
            "email" : "email@test.com",
            "password": "password"
        }

        Error handling checks if the mandatory fields are present and if it already exists in the database. 
        If it passes through the error handling, new User object is created using the function User.from_dict().

        Returns URL to newly created user resource
    """
    # Retrieve JSON body from request or set empty json 
    data = request.get_json() or {}

    # Checking if mandatory fields are present -> return error if not
    if 'email' not in data or 'password' not in data:
        return bad_request('must include email and password')
    if User.query.filter_by(email=data['email']).first():
        return bad_request('please use a different email')
    
    # Create new user if above checks pass
    user = User()
    user.from_dict(data, new_user=True)
    db.session.add(user)
    db.session.commit()

    # Return valid response for successful object creation
    response = jsonify(user.to_dict())
    response.status_code = 201
    
    # Set location to URL for new resource
    response.headers['Location'] = url_for('user.get_user', id=user.id)
    
    return response

