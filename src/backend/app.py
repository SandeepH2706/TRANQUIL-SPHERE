# from flask import Flask, render_template, request, redirect, url_for, session, flash
# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
# from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user

# app = Flask(__name__)
# app.secret_key = 'your_secret_key'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
# bcrypt = Bcrypt(app)
# login_manager = LoginManager()
# login_manager.init_app(app)
# login_manager.login_view = 'login'

# # User Model
# class User(UserMixin, db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(150), unique=True, nullable=False)
#     email = db.Column(db.String(150), unique=True, nullable=False)
#     password = db.Column(db.String(256), nullable=False)

# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.get(int(user_id))

# # Home Page
# @app.route('/home')
# @login_required
# def home():
#     return "<h1>Welcome to the Home Page</h1>"

# # Signup Route
# @app.route('/signup', methods=['GET', 'POST'])
# def signup():
#     if request.method == 'POST':
#         username = request.form['username']
#         email = request.form['email']
#         password = request.form['password']
        
#         hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
#         new_user = User(username=username, email=email, password=hashed_password)
        
#         try:
#             db.session.add(new_user)
#             db.session.commit()
#             flash('Signup Successful! You can log in now.', 'success')
#             return redirect(url_for('login'))
#         except:
#             flash('User already exists!', 'danger')
    
#     return render_template('signup.html')

# # Login Route
# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         username = request.form['username']
#         password = request.form['password']
        
#         user = User.query.filter((User.username == username) | (User.email == username)).first()
        
#         if user and bcrypt.check_password_hash(user.password, password):
#             login_user(user)
#             return redirect(url_for('home'))
#         else:
#             flash('Invalid credentials, please try again.', 'danger')
    
#     return render_template('login.html')

# # Logout Route
# @app.route('/logout')
# @login_required
# def logout():
#     logout_user()
#     return redirect(url_for('login'))

# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)


from flask import Flask, request, jsonify

app = Flask(__name__)
USER_FILE = "users.txt"  # Stores usernames and passwords

# Register a new user
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password required"}), 400

    # Check if user exists
    with open(USER_FILE, "r") as file:
        users = file.readlines()
        for user in users:
            stored_user, _ = user.strip().split(":")
            if stored_user == username:
                return jsonify({"error": "User already exists"}), 400

    # Save new user
    with open(USER_FILE, "a") as file:
        file.write(f"{username}:{password}\n")

    return jsonify({"message": "User registered successfully"}), 201

# Login
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password required"}), 400

    with open(USER_FILE, "r") as file:
        users = file.readlines()
        for user in users:
            stored_user, stored_pass = user.strip().split(":")
            if stored_user == username and stored_pass == password:
                return jsonify({"message": "Login successful"}), 200

    return jsonify({"error": "Invalid credentials"}), 401

if __name__ == "__main__":
    # Create the file if it doesn't exist
    open(USER_FILE, "a").close()
    app.run(debug=True)