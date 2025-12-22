# 📝 Todo List App

A simple Todo List web application built using HTML, CSS, and Vanilla JavaScript. This project allows users to add, edit, complete, and delete tasks while storing data in the browser’s localStorage so tasks remain available after refreshing the page. The app also displays the current day and date when it loads.

The main goal of this project is to practice JavaScript fundamentals such as DOM manipulation, event handling, and working with browser storage.

## Features

- Add new tasks  
- Edit existing tasks  
- Mark tasks as completed  
- Delete tasks  
- Persist tasks using localStorage  
- Automatically reload tasks on page refresh  
- Display the current day and date  

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Browser Local Storage API  

## Project Structure
├── index.html
├── style.css
└── script.js

## ⚙️ How the App Works

- Tasks are stored as objects in an array inside `localStorage`
- Each task contains:
  - `id`
  - `text`
  - `completed` status
- JavaScript dynamically creates and updates task elements in the DOM
- The current day and date are displayed using the `Date` object when the page loads


