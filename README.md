# CHAT WITH AI

A ChatGPT clone website built with TypeScript, React, Material-UI, and MongoDB.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Chat Interface**: Engage in conversations with a ChatGPT-like AI.
- **Persistent Chat History**: Messages are saved in a MongoDB database for future reference.
- **Responsive Design**: The website is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **Frontend**: TypeScript, React, Material-UI
- **Backend**: TypeScript, Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database set up

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ChatGPT-clone.git
   ```

2. Install dependencies for the frontend:

   ```bash
   cd ChatGPT-clone/frontend
   npm install
   ```

3. Install dependencies for the backend:

   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following environment variables:

     ```
     PORT=3001
     MONGODB_URI=mongodb://localhost:27017/chatgpt
     ```

   Adjust the `PORT` and `MONGODB_URI` values as needed for your setup.

5. Start the frontend and backend servers:

   - Frontend:

     ```bash
     cd ../frontend
     npm start
     ```

   - Backend:

     ```bash
     cd ../backend
     npm start
     ```

6. Access the website at `http://localhost:3000`.

## Usage

1. Sign up for an account or log in if you already have one.
2. Start a conversation with the ChatGPT-like AI.
3. View and manage your chat history.
4. Log out when you're done.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License 