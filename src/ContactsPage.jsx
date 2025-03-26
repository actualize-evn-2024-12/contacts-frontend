import { ContactsIndex } from "./ContactsIndex";
import {useState, useEffect} from 'react'
import axios from 'axios'

export function ContactsPage() {
  const [contacts, setContacts] = useState([])

  const handleIndex = () => {
    console.log('handling index')
    axios.get('https://contacts-api-0t45.onrender.com/contacts.json').then(response => {
      console.log(response.data)
      setContacts(response.data)
    })
  }

  useEffect(handleIndex, [])
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <ContactsIndex contacts={contacts}/>
    </main>
  )
}