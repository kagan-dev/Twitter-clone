Twitter (X) Clone - MERN Stack

This project is a Twitter (X) clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can post tweets, follow other users, like, and comment on posts.
Table of Contents

    -Features
    -Technologies Used
    -Installation
    -Usage
    -Contributing
    -License

Features

    User Registration and Login: New users can sign up, and existing users can log in.
    Tweet Posting: Users can post tweets, delete, or edit their tweets.
    Follow System: Users can follow other users and see tweets from those they follow.
    Like and Comment: Users can like tweets and add comments.
    Profile editing: Users can update their profile information, including username, bio, profile picture, and cover photo.
    Optimized design(web and mobile): The application features a responsive design, optimized for both web and mobile devices to ensure a seamless experience across platforms.
    cloud based images and database:User images and tweets are stored securely in the cloud using a cloudinary platform, and the database is hosted on a cloud platform like MongoDB Atlas for scalability and reliability.
    Real-Time Updates: Tweets and user interactions are updated in real-time.

Technologies Used

    MongoDB: Used as the database.
    Express.js: Used as the backend framework.
    React.js: Used for the frontend application.
    Node.js: Used for backend development.
    Tailwind CSS: Used for utility-first CSS styling to build custom designs quickly.
    DaisyUI: Provides a set of accessible and customizable UI components that work with Tailwind CSS.

Installation
Prerequisites

To install the project dependencies, follow the steps below.

Backend Installation:

    bash =>
        cd backend
        npm install
        

Frontend Installation:


    bash =>
        cd backend
        npm install
        npm run dev // npm start

Environment Variables

Create a .env file in the backend directory and add the following variables:

plaintext

MONGODB_URI=mongodb://your_mongodb_uri_here
PORT=8000
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
CLOUDINARY_API_KEY=your_cloudinary_api_key_here
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here



Running the Application

    Start the Backend:

    bash =>
      
        npm run dev //npm start

Start the Frontend:

    bash =>

       npm run dev //npm start

Accessing the Application

After running the application, open your web browser and go to:

http://localhost:3000

Usage

    Sign Up or Log In: On the homepage, you can create a new account or log in with an existing one.
    Post Tweets: You can post new tweets, like, and comment on posts from the main feed.
    Follow Users: Visit user profiles to follow or unfollow them.
    Real-Time Interaction: New tweets, likes, and comments are updated instantly.

Contributing

If you'd like to contribute, please open an issue or submit a pull request.
License

Some scrennshots from ui:

User profile page =>
![profile2linkedintt](https://github.com/user-attachments/assets/bea792f7-dc71-4461-97ab-8e7715986ccf)

Home Page =>
![lingedinttss](https://github.com/user-attachments/assets/36c1249b-f9c3-49fd-bc95-54d1a1a96986)

Notifications page =>
![linkedinnotificationtt](https://github.com/user-attachments/assets/93170383-3c98-4c44-b927-70031650a130)

User authentication page =>
![loginttlink](https://github.com/user-attachments/assets/1caaadf3-4f70-46bf-869c-381d6a5e96ed)


This project is licensed under the MIT License. For more information, see the LICENSE file.
