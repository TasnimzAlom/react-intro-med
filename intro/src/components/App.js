import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {uuid} from "uuidv4";



function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts]= useState([]);

  const addContactHandler=(contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid, ...contact}]);
  };

  const removeContactHandler =(id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContactList)
  }


  useEffect(() => {
   const retrieveContacts = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // const contacts = [
  //   {
  //     id:"1",
  //     name:"Ms. Tuli",
  //     email:"ms.tuli@gmail.com",
  //     image:"https://i.ibb.co/vVZdzJL/pngwing-com-42.png",
  //   },
  //   {
  //     id:"2",
  //     name:"Mr. Capers",
  //     email:"mr.Capers@gmail.com",
  //     image:"//i.ibb.co/9sk0wBr/pngwing-com-43.png", 
  //   },
  // ];


  return (
    <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={ contacts } getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
