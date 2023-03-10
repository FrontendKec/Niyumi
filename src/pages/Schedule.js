import '../components/style/style.css';

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
      <div className='copyright'>
        <p>Copyright @2023. <a href='./'>Niyumi</a>. All rights reserved</p>
      </div>
    </div>
  );
}

export default Schedule;
