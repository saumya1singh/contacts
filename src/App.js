import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


const contacts= [
  {
    id: "1",
    name: "Saumya Singh",
    mail: "saumya@gmail.com"
  },
  {
    id: "2",
    name: "Rekha",
    mail: "rekha@gmail.com"
  },
  {
    id: "3",
    name: "Aman",
    mail: "aman@gmail.com"
  },
  {
    id: "4",
    name: "Vinod",
    mail: "vonod@gmail.com"
  },
]

function App() {
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
