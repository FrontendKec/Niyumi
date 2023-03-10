import './App.css';
import './jikan-api';

function App() {
  return (
    <div class="home">
      <div className='navigation'>
        <div className='brand'>
          <a href="./">Niyumi</a>
        </div>
        <div className='links'>
          <a href="./">Home</a>
          <a href="./">Schedule</a>
          <a href="./">About</a>
        </div>
      </div>
      <div className='anime-container'>
        <div className='container-title'>
          <h2>Popular Anime</h2>
        </div>
        <div className='container-subtitle'>
          <span>Popular anime list</span>
        </div>
        <div className='container-cards'></div>
      </div>
    </div>
  );
}

export default App;
