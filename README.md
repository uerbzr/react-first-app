# React First App

Simple React app to demonstrate State and Components

## Setup

- clone repository
- cd into first-app
- npm install
- code .
- start a webserver:
  - inside code open a terminal
  - run: npm run dev

## Key Takeaways

- examine the state
- examine the components

  - in the App.jsx
  - ones in the components folder

- React is an **Opinionated JavaScript Framwork**, meaning the framework dictates where your code goes and how it should be structured.
- Code is written in a very particular way
- React breaks down an app into components

## Component Introduction

**a component is a bit like a function:**

we can use arrow syntax

```js
const Title = () => {
  return <h1 className="title">Welcome to React!</h1>;
};
```

or like this:

```js
function Title() {
  return <h1 className="title">Welcome to React!</h1>;
}
```

What looks diferent about the function?

- the blend of javascript and html
- the className is different to class which is what we normally use

- What we have create is called a "Functional Component"
- it is written in what we call JSX - JavasScript XML (Exensible Markup Language)\*\*
- we write the code in a .jsx file extension... e.g. App.jsx

- We have the power to essentially write our own html elements with custom names:
  The one above would be ` <Title /> or <Title></Title>`

## So in summary, What is React?

- a framework?
- a library?
- a library to build apps!
- what is JSX? uses a templating language that blends JavaScript and HTML
- Virtual DOM - React doesn't interact with the Real DOM it uses the Virtual Dom!

## First-App Project Layout

- node_modules: folder is where all the dependencies exist. Rarely need to do anthing here. Just be aware that
  these can get BIG in size
- public folder: images / videos etc
- src our source goes here
- index.html - note the div with id='root' this is the container div for our project
- package.json dependencies are listed in here
- vite.config.js - config for vite... this remains unchanged (usually!)

Checkout [Vite Guide](https://vitejs.dev/guide/)

## Creating a project

Select one:

```
-npm create vite@latest my-vue-app -- --template vanilla
-npm create vite@latest my-vue-app -- --template react
-npm create vite@latest my-vue-app -- --template vue
```

Then:

```
cd my-vue-app
npm install
npm run dev
```

Dependencies:

```
-npx execute package
-npm install package
```

Legacy:

```
-npx create-react-app first-app
-npx create-react-app .
```

**_this will create first-app directory with all the files it needs. Lots of dependencies. The size is pretty big!_**

## Project details

- index.html contains a div with an id of 'root' and React will attach all components to this element
- Echmascript 6 syntax
- roughly describe imports

## React Intro

Example below..
-don't forget to create a FirstComponent jsx

```JSX

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'

function SecondComponent(props)
{
  return (
    <>
      <h1>SecondComponent</h1>
    </>
  )
}
function HelloComponent()
{
  const personName='Nigel'

  return (
    <h1>Hello, {personName}</h1>
  )
}
function BetterHelloComponent(props)
{

  return (
    <h1>Hello, {props.name}</h1>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent />
      <SecondComponent />
      <HelloComponent />
      <BetterHelloComponent name={'Stitch'} />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Nigel</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

```

## This is how components works in React

- Data drives the UI
- To change the UI, we must first update the data
- No two-way binding. Only one-way binding

**Thinking in a React Way..**  
Break down a webpage and decompose the UI into components. Look at a web page and think how it could be broken up..
![](TodoListComponents.png)

Each component will render itself, based on external and internal data
Build trees of the components to create app

![](HowReactUpdatesComponents.png)

### React UserState

- Modifiable data in React is called "state".
- State is defined by the useState function.
- Initial values are used the first time we run the compponent (Mount)
- useState returns an array composed of two items
  - First item is the data value (state)
  - Second is a function to change that data (setState).
- NEVER change the state directly
  - Intead, use the setState function
  - This will schedule a rerender of the component (and child components)

```jsx
import { useState } from "react";
//named export ⮭⮭
function Counter({ name }) {
  const [counter, setCounter] = useState(5);
  //set to 5 the first time it's called ⮭⮭
  //use counter to read the data
  //use setCounter to write the data
  //here is function inside a function
  //called by the click event ⮯⮯
  function increment(evt) {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>
        Hello {name}, the count is: {counter}
      </h1>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
// events are wired this way in React: onClick={fn} ⮭⮭
// It is a synthetic event, different than
// a real DOM event: onclick="increment".
// (Notice the difference in casing)
// Use synthetic events whenever possible.
```

Change the state to rerender

- When state (or props) change, or the parent re-renders, your component
  updates AUTOMATICALLY.
- You never have to modify the DOM yourself
- If you ever do, then you're not using the proper React way
- [how react works behind the scene](https://medium.com/@chiomachristopher91/how-react-works-behind-the-scene-react-render-phase-ba00158ae81a)

### Looping over items

- Loop over an array of data with .map()
- It returns an element for each iteration
- For performance reasons, remember to provide an unique key for each
  element
  import { useState } f
  A User Can:
  -See a counter
  -Increase and Decrese a counter

lets build this in vanilla javascript then move it to React.

### React Props

- Loop over an array of data with .map()
- It returns an element for each iteration
- For performance reasons, remember to provide an unique key for each element

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const authors = [
  { id: 1, name: "Chad" },
  { id: 2, name: "Anthony" },
  { id: 3, name: "Flea" },
  { id: 4, name: "John" },
];
function App() {
  return <AuthorList authors={authors} />;
}

function AuthorList({ authors }) {
  return (
    <ul>
      {
        authors.map((author) => {
          return <li key={author.id}>{author.name}</li>;
        })
        //keys get used by React for performance in reconciliation phase
      }
    </ul>
  );
}

export default App;
```
