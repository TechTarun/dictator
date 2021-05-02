import ListenButton from './listen_button.js';
import './style.css';

function App() {
  return (
    <div>
    <div className="about">
      <span> Click mic icon <br></br> Speak <br></br> Get your text </span>
    </div>
    <ListenButton />
    </div>
  );
}

export default App;
