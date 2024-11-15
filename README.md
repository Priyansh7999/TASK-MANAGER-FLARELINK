# 📝 Task Manager Project

## 📋 Overview

The **Task Manager** is a web-based application built using **React** and **JavaScript**. It allows users to manage their tasks efficiently by adding, searching, sorting, and organizing tasks. The project utilizes **local storage** to persist data, ensuring that tasks are not lost even if the page is refreshed or the browser is closed.

## ✨ Features

### Basic Features:

1. **Task Input**:

   - Users can add tasks with the following details:
     - Title
     - Description
     - Start Date
     - End Date
     - Priority (High/Low)
2. **Task Deletion**:

   - Users can delete tasks easily using a delete button.
3. **Task Persistence**:

   - All tasks are saved in **local storage**, so they remain even after a page reload.

### Stretch Goals:

1. **Task Search**:
   - Users can search for tasks by title using a search bar.
2. **Task Completion**:
   - Users can mark tasks as completed, which will draw a line through the task title.
3. **Priority Setting**:
   - Users can set priority levels (High/Low) while adding tasks.
   - High-priority tasks are highlighted.
4. **Task Sorting**:
   - Tasks can be sorted by:
     - **Name**: Alphabetical sorting by title.
     - **ID**: Sorting by task creation order.
     - **Start Date**: Earliest tasks first.
     - **End Date**: Closest deadlines first.
     - **Priority**: High-priority tasks first.
5. **UI Animations**:
   - Smooth animations like `fade-left`, `fade-right`, `fade-up`, and `fade-down` are used for a better user experience.

## 🛠️ Technologies Used

- **Framework**: React
- **Language**: JavaScript
- **Storage**: Local Storage
- **Animations**: CSS Animations

## 📦 Setup and Launch Process

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Priyansh7999/TASK-MANAGER-FLARELINK.git
   cd Task-manager
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Run the project**:

   ```bash
   npm start
   ```
4. **Open the application**:

   - The app will run on `http://localhost:3000`.

## 📝 Usage Guide

1. **Adding a Task**:

   - Fill in the input fields (title, description, start date, end date, priority).
   - Click the **Add Task** button to add the task to the list.
2. **Searching for Tasks**:

   - Use the search bar to **filter tasks by title.**
3. **Marking a Task as Completed**:

   - Click the checkbox to mark a task as completed. A line will be drawn through the task title.
4. **Sorting Tasks**:

   - Use the dropdown menu to sort tasks by **name, ID, start date, end date, or priority.**
5. **Deleting a Task**:

   - Click the delete button to remove a task from the list.
6. **Task Description:**

   Click on the task it will open a box contain title, description, starting date, ending date

## 📂 Folder Structure

```
task-manager/
├── public/
├── assets/Images...
├── src/
│   ├── components/
│   │   ├── TaskItem.jsx
|   |   ├── Header.jsx
|   |   ├── TaskInput.jsx
|   |   ├── TaskModal.jsx
│   │   ├── TaskList.jsx
│   │   ├── SearchBar.jsx
│   └── App.jsx
├── index.css
├── App.css
└── README.md
```

## 🛠️ Assumptions Made

- **Unique Task ID**: Each task is assigned a unique ID using an incremental counter.
- **Local Storage**: The application uses local storage to persist tasks across sessions.
- **Priority Levels**: Priority can be either `High` or `Low`.
- **Animation Durations**: Animations have a fixed duration of `0.3s` for smooth transitions.

## 🎨 UI Screenshots

### 1. Task Input Form With And Without Priority

![Task List](./src/assets/3.png)
![Task List](./src/assets/4.png)
![Task List](./src/assets/6.png)

### 2. Task List with Sorting and Search

## **
    SEARCH**

![SEARCH](./src/assets/7.png)

## **
    SORT BY NAME**![Sort by name](./src/assets/8.png)

## 
    SORT BY STARTING DATE

![Sort by Starting Date](./src/assets/11.png)

## **
    PRIORITY ONLY**

![Priority Only](./src/assets/12.png)

### 3. Completed Task with Strike-through

![Task List](./src/assets/13.png)

### 4.  On Clicking A Task

![Task List](./src/assets/15.png)

## 💬 Feedback and Support

For any questions or feedback, please open an issue or contact me
