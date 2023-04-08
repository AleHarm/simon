import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <a className="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="play.html">Play</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="scores.html">Scores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <footer className="bg-dark text-dark text-muted">
      <div className="container-fluid">
        <span className="text-reset">Author Name(s)</span>
        <a
          className="text-reset"
          href="https://github.com/AleHarm/simon.git"
          >Source</a>
      </div>
    </footer>
    </div>
  );
}

export default App;


const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

// Asynchronously determine if the user is authenticated by calling the service
const [authState, setAuthState] = React.useState(AuthState.Unknown);
React.useEffect(() => {
  if (userName) {
    fetch(`/api/user/${userName}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((user) => {
        const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
        setAuthState(state);
      });
  } else {
    setAuthState(AuthState.Unauthenticated);
  }
}, [userName]);

{
  authState === AuthState.Authenticated && (
    <li className='nav-item'>
      <a className='nav-link' href='play.html'>
        Play
      </a>
    </li>
  );
}