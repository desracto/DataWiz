from . import quiz_bp

@quiz_bp.route("/", methods=['POST'])
def create_quiz():
    pass

@quiz_bp.route("/<quiz_id>", methods=['GET'])
def retrieve_quiz(quiz_id):
    pass

@quiz_bp.route("/<quiz_id>/add_question", methods=['PUT'])
def add_quiz_question(quiz_id):
    pass

@quiz_bp.route("/<quiz_id>/<quiz_qn_num>/delete_question", methods=['DELETE'])
def delete_quiz_question(quiz_id, quiz_qn_num):
    pass
