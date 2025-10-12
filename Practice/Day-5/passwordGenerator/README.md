#  Password Generator

A simple and customizable **Password Generator** built using **React** and **Tailwind CSS**.  
It allows users to generate secure passwords based on their preferred length and character options.

---

##  Features

- Adjustable **password length** using a slider
- Option to include **numbers**
- Option to include **special characters**
- One-click **Copy to Clipboard** feature
- Auto-generates new password when settings change
- Clean, responsive UI built with **Tailwind CSS**

---

##  Tech Stack

-  **React.js**
-  **Tailwind CSS**
-  **JavaScript (ES6+)**

---

##  Hooks Used

Your Password Generator uses several **React Hooks** to manage state, side effects, and performance optimizations:

| Hook              | Purpose                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **`useState`**    | To store and manage dynamic values such as `length`, `numberAllowed`, `characterAllowed`, and `password`.                 |
| **`useEffect`**   | To automatically regenerate the password whenever dependencies (like length or checkboxes) change.                        |
| **`useCallback`** | To memoize functions (`generatePassword` and `copyPassword`) so they don’t get recreated unnecessarily on each re-render. |
| **`useRef`**      | To directly reference the password `<input>` field for selecting and copying its text to the clipboard.                   |

---

##  How It Works

1. Set the desired **length** of your password using the range slider.
2. Toggle **Number** or **Character** checkboxes as per your need.
3. Click **Copy** to copy the generated password to clipboard.
4. Each setting change automatically regenerates a new password.
