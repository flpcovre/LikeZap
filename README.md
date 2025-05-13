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

3. **Build and Start the Containers**  
    Use Docker Compose to assemble and start the containers:
    ```bash
    docker compose up -d --build
    ```

Your application should now be ready to use.