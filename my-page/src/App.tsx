import React from 'react';
import './App.css';

const aboutMe = {
  firstName: "Iryna",
  lastName: "Bond",
  biography: `I'm from Vinnytsia. I gradueted from VNTU`,
  contact: "email: 3456@gmail.com, phone: +38 099 111-22-22"
}


function App() {
  return (
    <div className="App">
      <h2>First Name: {aboutMe.firstName}</h2>
      <h2>Last name: {aboutMe.lastName}</h2>
       <div><h3>Biography: {aboutMe.biography}</h3></div>
       <div><h3>Contacts: {aboutMe.contact}</h3></div>
    </div>
  );
}

export default App;
