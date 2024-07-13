
# Paw-Chef

Where you can find the pawfect dishes for your next cooking adventure!
Paw-Chef is a cooking platform to share and view dishes.

## Installation

### Frontend

1. Clone the repository
    ```bash
    git clone https://github.com/Mehul-Aneja/paw-chef.git
    cd paw-chef/frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

2. Set up a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate 
    ```

3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Apply the database migrations:
    ```bash
    python manage.py migrate
    ```

5. Start the backend development server:
    ```bash
    python manage.py runserver
    ```

## License

This project is licensed under the MIT License
