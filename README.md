# After downloading this repository usr `pnpm install` to install dependency. Then `pnpm dev` to run this project.

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code directly in JavaScript.

Example:


const element = <h1>Hello, World!</h1>;


Although it looks like HTML, it is actually JavaScript that React converts into function calls.


## 2. What is the difference between State and Props?

**Props:** Props are data passed from a parent component to a child component. It cannot be changed by the child.

**State:** State is data managed inside a component. It can be changed using setState / useState


## 3. What is the useState hook, and how does it work?

The useState hook is a built-in hook in React that allows functional components to store and manage state (data that can change over time).

Example: 
const [state, setState] = useState(initialValue);

## 4. How can you share state between components in React?

Lifting State Up: When two or more components need the same data, move the state to their closest common parent and pass it down as props.
Context API: When many components need the same state, passing props through many layers becomes difficult. In that case, React provides React Context API.




