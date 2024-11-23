import "./App.css";
import Header from "./Header";
import FormData from "./FormData";
import ContactList from "./ContactList";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState([]);
  return (
    <>
      <main className="flex flex-col gap-12 h-screen justify-center items-center">
        <Header />
        <div className="flex w-[980px] max-w-[980px] mx-auto gap-8 items-start justify-center h-full">
          <FormData contact={contact} setContact={setContact} />
          <ContactList contact={contact} setContact={setContact} />
        </div>
      </main>
    </>
  );
}

export default App;
