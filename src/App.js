import "./App.css";
import { useState, useRef } from 'react'
import React from "react";

function App() {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();



  return (
    <div class="App">
    <header class="Header">
      <h1> Enter Info Below:</h1>
      <label htmlFor="email">Email Address</label>
      <br />
      <input type="text" name="email" ref={emailRef} />
      <br />

      <label htmlFor="first-name">First Name : </label>
      <br />
      <input type="text" name="first-name" ref={firstNameRef} />
      <br />

      <label htmlFor="last-name"> Last Name : </label>
      <br />
      <input type="text" name="last-name" ref={lastNameRef} />

      <br />
      <br />

      <button class="btn"
        onClick={function () {
          setEmail(emailRef.current.value);
          setFirstName(firstNameRef.current.value);
          setLastName(lastNameRef.current.value);
        }}
      >
        Submit 
      </button>
    </header>
      <br />
      <br />

      <div class="items">
        Email Adress: {email}
        <br />
        First Name : {firstName}
        <br />
        Last Name : {lastName}
      </div>
  
    </div>
  );
}

export default App;
