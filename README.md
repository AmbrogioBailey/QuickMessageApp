

# 💌 Message Display Animation App

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A lightweight JavaScript web app that plays a short animation before revealing a personalized message entered by the user.
Built with **vanilla JavaScript**, **HTML**, and **CSS**.

---

## 🎥 Demo

Live demo link( )

> 🖼️ **Preview the app in action:**














---

## ✨ Features

* 🎞️ Animated transition before showing the message
* 📝 Custom “From” and “Message” input fields
* ⏱️ Timed visual sequence using `setTimeout`
* 🔒 Secure DOM manipulation using `textContent`

---

## ⚙️ How It Works

1. The user enters their **name** and **message**.
2. Clicking **Submit** triggers a brief **GIF animation**.
3. After a short delay, a **“Display Message”** button appears.
4. Clicking the button reveals the **personalized message** with styling changes.

---

## 🧠 Technologies Used

* **HTML5** – page structure
* **CSS3** – layout, background styling, and transitions
* **JavaScript (ES6)** – logic, event handling, and DOM manipulation

---

## 🚀 Setup Instructions

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/message-display-app.git
   ```
2. Open the project folder.
3. Run the app by opening **`index.html`** in your web browser.
4. Enter your name and message, then click **Submit** to begin.

---

## 📁 Project Structure

```
message-display-app/
├── index.html      # Main HTML file
├── style.css       # CSS for layout and transitions
├── script.js       # JavaScript logic and events
└── README.md       # Project documentation
```

---

## 🔒 Security Notes

* User input is handled with `textContent` (not `innerHTML`) to prevent cross-site scripting (XSS).
* All inserted HTML elements are statically defined and trusted.

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).
You are free to use, modify, and distribute this project with attribution.

---


