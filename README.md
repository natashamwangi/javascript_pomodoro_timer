## 1. Title & Objective

**Title:**
**Building a Productivity Timer (Pomodoro) using JavaScript**

**Objective:**
This toolkit documents the process of learning how to build a simple productivity timer (Pomodoro-style) using JavaScript.

The goal is to provide a guide for interested aspiring/existing developers to:

*   Set up a simple web project using HTML, CSS, and JavaScript   
*   Understand how JavaScript interacts with the browser (DOM)
*  Learn how to use setInterval() for time-based functionality
*  Build an interactive timer with Start, Stop, and Reset controls
*  Use generative AI prompts to guide development and troubleshoot issues

**Why Javascript?:**
*   **Javascript** is the core language of the web. It allows developers to create interactive applications
and is beginner-friendly. The language requires no installation to start.

**End Goal:**
A working Productivity Timer Web App that:
1.  Counts down from 25 minutes
2. Displays time dynamically
3. Includes Start, Stop, and Reset buttons
4. Uses `setInterval()` and event listeners

---

## 2. Quick Summary of the Technology

**What is JavaScript?**

*   **JavaScript** is a programming language used to make web pages interactive by manipulating content dynamically in the browser.

**Key Concepts Used:**

* **DOM Manipulation** → Updating content on the page
* **Event Listeners** → Responding to user actions (clicks)
* **setInterval()** → Running code repeatedly at intervals

**Where is it used?**

* Websites (forms, animations, buttons)
* Web applications (dashboards, tools, platforms)

**Real-world example:**

* Pomodoro timers for productivity
* Countdown timers for exams or events

---

## 3. System Requirements

**Operating System:**

**Windows / macOS / Linux**

**Tools:**

* Web Browser (Chrome recommended)
* Code Editor (VS Code recommended)

**Packages:**

* None required 

---

## 4. Installation & Setup Instructions

###  Step 1: Create Project Folder
   ```bash
    productivity-timer
   ```

### Step 2: Create Files

Inside the folder:
   ```
    index.html
    style.css
    script.js
   ```

### Step 3: Open in Browser

Double-click `index.html` to run the project.

---

## 5. Minimal Working Example (MVP)
### Project Structure
   ```
    productivity-timer/
    │
    ├── index.html
    ├── style.css
    └── script.js
   ```

### index.html
   ```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Productivity Timer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Productivity Timer</h1>
    <h2 id="timer">25:00</h2>

    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <button id="reset">Reset</button>

    <script src="script.js"></script>
</body>
</html>
   ```

###  style.css
   ```CSS
    body {
        text-align: center;
        font-family: Arial;
    }

    button {
        padding: 10px;
        margin: 5px;
    }
   ```
###  script.js
   ```JavaScript
    let time = 1500; // 25 minutes
    let interval = null;

    const display = document.getElementById("timer");

    function updateDisplay() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = `${minutes}:${seconds}`;
    }

    document.getElementById("start").addEventListener("click", () => {
        if (interval) return;

        interval = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay();
            }
        }, 1000);
    });

    document.getElementById("stop").addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
    });

    document.getElementById("reset").addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
        time = 1500;
        updateDisplay();
    });

    updateDisplay();
   ```

### Expected Output
* Timer starts at **25:00**
* Counts down every second
* Buttons control timer behavior

---

## 6. AI Agents Utilised
* ChatGPT
* (Optional) Claude / Gemini

---

## 7. AI Prompt Journal
###  Prompt 1:

###### **“Explain how setInterval works in JavaScript”**

**Helpfulness:**
* Helped understand timer logic.

###  Prompt 2:

###### **“Build a simple countdown timer with start and stop buttons”**

**Helpfulness:**
* Provided initial working structure.

###  Prompt 3:

###### **“Why does my timer run multiple times?”**

**Helpfulness:**
* Explained need to prevent duplicate intervals.


### Reflection:
**AI:**
* Accelerated learning
* Helped debug faster
* Provided structured guidance

---

## 8. Common Issues & Fixes

| Issue | Cause | Fix |
| --- | --- | --- |
| Timer runs too fast	| Multiple intervals	| Prevent duplicate start
| Timer not updating	| Function not called	| Call `updateDisplay()` 
| Buttons not working	| Wrong **ID**	| Match **HTML IDs**

---

## 9. References
*   **Window: setInterval() method:** Learn about the The setInterval() method of the Window interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. https://developer.mozilla.org/en-US/docs/Web/API/setInterval
*   **JavaScript Timing Events:** JavaScript can be executed in time-intervals. This is called timing events.Learn about the two key methods used with JavaScript https://www.w3schools.com/js/js_timing.asp
*   **A Modern JavaScript Tutorial:** Learn JavaScript from the basics to advanced topics with simple, but detailed explanations. https://javascript.info