import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import UserProfileCard from "./components/UserProfileCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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

      {}
      <UserProfileCard
        name="John Doe"
        age={28}
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit metus nec felis tempus, a auctor purus sagittis."
        location="New York, USA"
        profilePicture="https://via.placeholder.com/150"
      />
    </>
  );
}

export default App;
