# Quiz Application 📝

This is a simple quiz application built using React, designed to allow users to take a quiz in fullscreen mode with a time limit.

## Features ✨

- Fullscreen mode requirement to start the quiz 🖥️
- Timer functionality with a 10-minute limit for completing the quiz ⏰
- Multiple-choice questions loaded from a JSON file 📄
- User's progress (current question) saved in localStorage to resume quiz on refresh 🔄

## Technologies Used 🚀

- React ⚛️
- HTML/CSS 🎨
- JavaScript 🔧

## Setup Instructions 🛠️

To run this application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/manidixit51/Quiz.git
   cd quiz-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open the application:**

   Open your browser and go to `http://localhost:3000` to view the application.

## Deployment 🌐

This application is deployed and accessible at: (https://quiz-lyart-delta.vercel.app/)

## Usage ℹ️

- On the start screen, click the "Start Quiz" button to enter fullscreen mode.
- Answer the quiz questions within the 10-minute time limit.
- Progress is saved automatically, allowing you to resume the quiz if you refresh the page.

## Folder Structure 📁

```
quiz-app/
│
├── public/
│   └── index.html
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Quiz.js
│   │   └── StartScreen.js
│   ├── Images/
│   │   └── background.jpg
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Additional Notes ℹ️

- Customize the quiz questions by editing the JSON file located in `src/data/questions.json`.
- Ensure your browser supports fullscreen mode (most modern browsers do).
- Adjust CSS and styling in `App.css` and `index.css` to match your design preferences.

