import '../components/style/style.css';
import '../components/api/schedule-jikan-monday'
import '../components/api/schedule-jikan-tuesday'
import '../components/api/schedule-jikan-wednesday'
import '../components/api/schedule-jikan-thursday'
import '../components/api/schedule-jikan-friday'
import '../components/api/schedule-jikan-saturday'
import '../components/api/schedule-jikan-sunday'

function Schedule() {
  return (
    <div class="schedule">
      <div className='navigation'>
        <div className='brand'>
          <a href="./">Niyumi</a>
        </div>
        <div className='links'>
          <a href="./">Home</a>
          <a href="./schedule">Schedule</a>
          <a href="./about">About</a>
        </div>
      </div>
      <div className='anime-container'>
        <div className='container-title'>
          <h2>Monday</h2>
        </div>
        <div className='container-subtitle'>
          <span>Monday Anime List (by MAL)</span>
        </div>
        <div className='container-monday-anime-cards'></div>

        <div className='container-title'>
          <h2>Tuesday</h2>
        </div>
        <div className='container-subtitle'>
          <span>Tuesday Anime List (by MAL)</span>
        </div>
        <div className='container-tuesday-anime-cards'></div>

        <div className='container-title'>
          <h2>Wednesday</h2>
        </div>
        <div className='container-subtitle'>
          <span>Wednesday Anime List (by MAL)</span>
        </div>
        <div className='container-wednesday-anime-cards'></div>

        <div className='container-title'>
          <h2>Thursday</h2>
        </div>
        <div className='container-subtitle'>
          <span>Thursday Anime List (by MAL)</span>
        </div>
        <div className='container-thursday-anime-cards'></div>

        <div className='container-title'>
          <h2>Friday</h2>
        </div>
        <div className='container-subtitle'>
          <span>Friday Anime List (by MAL)</span>
        </div>
        <div className='container-friday-anime-cards'></div>

        <div className='container-title'>
          <h2>Saturday</h2>
        </div>
        <div className='container-subtitle'>
          <span>Saturday Anime List (by MAL)</span>
        </div>
        <div className='container-saturday-anime-cards'></div>

        <div className='container-title'>
          <h2>Sunday</h2>
        </div>
        <div className='container-subtitle'>
          <span>Sunday Anime List (by MAL)</span>
        </div>
        <div className='container-sunday-anime-cards'></div>
      </div>
      <div className='copyright'>
        <p>Copyright @2023. <a href='./'>Niyumi</a>. All rights reserved</p>
      </div>
    </div>
  );
}

export default Schedule;
