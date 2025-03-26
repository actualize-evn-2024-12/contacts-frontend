import axios from "axios";
import { Header } from "./Header";
import { ContactsPage } from "./ContactsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://contacts-api-0t45.onrender.com";
axios.defaults.withCredentials = true;



function App() {
  return (
    <div>
      <Header />
      <ContactsPage />
      <Footer />
    </div>
  )
}

export default App;