import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';
import Dashboard from './componets/DashBoard';
import Login from './componets/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <NavBar/>
      {!LoggedIn
      ?<Login setLoggedIn={setLoggedIn}/>
      :<Dashboard/>
      }
    </div>
  );
}

export default App;
