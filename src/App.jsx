import { useState } from "react";
import "./App.css";
import AuthorList from "./components/AuthorList";

function App() {
  const [count, setCount] = useState(0);
  const [authors, setAuthors] = useState([
    { id: 1, name: "Chad" },
    { id: 2, name: "Flea" },
    { id: 3, name: "John" },
    { id: 4, name: "Anthony" },
  ]);

  function FirstFunctionComponent() {
    return (
      <>
        <div className="component">
          <h1>First Functional Component</h1>
          <ul>
            <li>First</li>
          </ul>
        </div>
      </>
    );
  }

  const FirstArrowComponent = () => {
    return (
      <>
        <div className="component">
          <h1>First Arrow Component</h1>
          <ul>
            <li>First</li>
          </ul>
        </div>
      </>
    );
  };

  function SecondComponent() {
    const name = "Nigel";
    return (
      <>
        <div className="component">
          <h1>Second Component</h1>
          <ul>
            <li>{name}</li>
          </ul>
        </div>
      </>
    );
  }

  function ThirdComponent(props) {
    return (
      <>
        <div className="component">
          <h1>Third Component</h1>
          <ul>
            <li>{props.name}</li>
          </ul>
        </div>
      </>
    );
  }

  function FourthComponent({ name, age, count }) {
    return (
      <>
        <div className="component">
          <h1>Fourth Component</h1>
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{count}</li>
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <FirstFunctionComponent />
      <FirstArrowComponent />
      <SecondComponent />
      <ThirdComponent name="Bob" />
      <FourthComponent name="Alice" age={25} count={count} />

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        count is {count}
      </button>
      <AuthorList authors={authors} />
    </>
  );
}

export default App;
