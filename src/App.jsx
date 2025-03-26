import axios from "axios";
import { Header } from "./Header";
import { ContactsPage } from "./ContactsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
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