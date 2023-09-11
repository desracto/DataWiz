from api.auth import auth_bp

from flask import request, jsonify, session

from ..extensions import bcrypt, db, server_session
from ..models import User

@auth_bp.route("/@me")
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

@auth_bp.route("/register", methods=['POST'])
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

@auth_bp.route("/login", methods=["POST"])
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

