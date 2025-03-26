import { ContactsIndex } from "./ContactsIndex";
import {useState, useEffect} from 'react'
import axios from 'axios'

export function ContactsPage() {
  const [contacts, setContacts] = useState([])

  const handleIndex = () => {
    console.log('handling index')
    axios.get('/contacts.json').then(response => {
      console.log(response.data)
      setContacts(response.data)
    })
  }

  useEffect(handleIndex, [])
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <a href="https://github.com/login/oauth/authorize?client_id=Ov23liY1ErX08xyzdld6">Sign in with github</a>
      <ContactsIndex contacts={contacts}/>
    </main>
  )
}