import React from 'react';
import './App.css';
import userData from './userInfo.json';

// const aboutMe = {
//   firstName: "Iryna",
//   lastName: "Bond",
//   biography: `I'm from Vinnytsia. I graduated from VNTU`,
//   contact: "email: 3456@gmail.com, phone: +38 099 111-22-22"
// }

function List(props: any) {
  
  return (
    <ul>
      <li>FirstName: {props.firstName}</li>
      <li>LastName: {props.lastName}</li>
      <li>Info: {props.biography}</li>
      <li>Contacts: {props.contact}</li>
    </ul>

  );
}


function App() {
  return (
    <div className="App">
      {/* <h2>First Name: {aboutMe.firstName}</h2>
      <h2>Last name: {aboutMe.lastName}</h2>
       <div><h3>Biography: {aboutMe.biography}</h3></div>
       <div><h3>Contacts: {aboutMe.contact}</h3></div> */}
       <List {...userData}/>
    </div>
  );
}

export default App;
