import './App.css';
import './api/jikan';

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
          <h2>Airing Anime</h2>
        </div>
        <div className='container-subtitle'>
          <span>Airing Anime List (by MAL)</span>
        </div>
        <div className='container-airing-cards'></div>
        <div className='container-view-more'>
          <a href="./">View More</a>
        </div>
        <div className='container-title'>
          <h2>Popular Anime</h2>
        </div>
        <div className='container-subtitle'>
          <span>Popular Anime List (by MAL)</span>
        </div>
        <div className='container-popular-cards'></div>
        <div className='container-view-more'>
          <a href="./">View More</a>
        </div>
        <div className='container-title'>
          <h2>Upcoming Anime</h2>
        </div>
        <div className='container-subtitle'>
          <span>Upcoming Anime List (by MAL)</span>
        </div>
        <div className='container-upcoming-cards'></div>
        <div className='container-view-more'>
          <a href="./">View More</a>
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright @2023. <a href='./'>Niyumi</a>. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
