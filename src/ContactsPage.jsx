import { ContactsIndex } from "./ContactsIndex";
import { GitHubProfile } from "./GitHubProfile";
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

  const handleOAuth = () => {
    console.log('handling oauth');
    // check if code= exists    
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    if (code) {
      // if so make request to rails with code=
      axios.get(`http://localhost:3000/auth/github/callback?code=${code}`).then(response => {
        console.log(response.data)
        if (response.data.access_token) {
          localStorage.setItem("github_access_token", response.data.access_token)
        }
        window.location.href = '/'
      })
    }
  }

  useEffect(handleIndex, [])
  useEffect(handleOAuth, [])
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <GitHubProfile />
      <a href="https://github.com/login/oauth/authorize?client_id=Ov23liY1ErX08xyzdld6">Sign in with github</a>
      <ContactsIndex contacts={contacts}/>
    </main>
  )
}