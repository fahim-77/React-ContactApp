import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./Contact";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex flex-col gap-8 h-screen justify-start">
        <Header />
        <Contact />
      </main>
    </>
  );
}

export default App;
