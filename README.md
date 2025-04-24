# LikeZap - WhatsApp Customer Service

## About

Web Application Being Developed with Nuxt.js and Laravel for Filipe Feitosa Covre's Graduation Project (TCC).

It consists of an interface where the system user can communicate with clients who are sending messages on WhatsApp, using the WhatsApp API.

## Installation

Follow these steps to set up the project:

1. **Clone the Repository**  
    Clone the project repository to your local machine:
    ```bash
    git clone https://github.com/flpcovre/LikeZap.git
    cd likezap
    ```

2. **Set Up Environment Variables**  
    Create a `.env` file in the root directory by copying the example file:
    ```bash
    cp .env.example .env
    ```

3. **Set Up API Environment Variables**  
    Navigate to the `api` directory and create a `.env` file for the API:
    ```bash
    cd api
    cp .env.example .env
    ```

4. **Build and Start the Containers**  
    Use Docker Compose to assemble and start the containers:
    ```bash
    docker compose up -d
    ```

5. **Access the API Container**  
    Open a terminal inside the API container:
    ```bash
    docker compose exec api bash
    ```

6. **Install Laravel Dependencies**  
    Inside the API container, install the required dependencies:
    ```bash
    composer install
    ```

7. **Set Up the Application**  
    Inside the API container, generate the application key and migrate the database tables:
    ```bash
    php artisan key:generate
    php artisan migrate
    ```

Your application should now be ready to use.