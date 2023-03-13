import Navbar from "../components/navbar";
import Copyright from "../components/copyright";

function Schedule() {
  const jikan_api = {
    "monday": "https://api.jikan.moe/v4/schedules?filter=monday&kids=false&page=1&limit=14",
    "tuesday": "https://api.jikan.moe/v4/schedules?filter=tuesday&kids=false&page=1&limit=14",
    "wednesday": "https://api.jikan.moe/v4/schedules?filter=wednesday&kids=false&page=1&limit=14",
    "thursday": "https://api.jikan.moe/v4/schedules?filter=thursday&kids=false&page=1&limit=14",
    "friday": "https://api.jikan.moe/v4/schedules?filter=friday&kids=false&page=1&limit=14",
    "saturday": "https://api.jikan.moe/v4/schedules?filter=saturday&kids=false&page=1&limit=14",
    "sunday": "https://api.jikan.moe/v4/schedules?filter=sunday&kids=false&page=1&limit=14"
  }
  
  async function getMondaySchedule() {
    const response = await fetch(jikan_api.monday);
      const data = await response.json();
      data.data.forEach(anime => {
        const anime_image = anime.images.webp.image_url;
        const anime_title = anime.title;
        const anime_url = anime.url;
        const card = document.createElement("div");
        card.classList.add("anime-card");
        card.innerHTML = `
        <div class="banner"><img src="${anime_image}" text="${anime_title}"></img></div>
        <div class="title"><a href="${anime_url}" target="_blank">${anime_title}</a></div>
        `;
        document.querySelector(".container-monday-anime-cards")?.appendChild(card);
      });
  }
  setTimeout(() => { getMondaySchedule(); }, 1000);
  
  async function getTuesdaySchedule() {
    const response = await fetch(jikan_api.tuesday);
      const data = await response.json();
      data.data.forEach(anime => {
        const anime_image = anime.images.webp.image_url;
        const anime_title = anime.title;
        const anime_url = anime.url;
        const card = document.createElement("div");
        card.classList.add("anime-card");
        card.innerHTML = `
        <div class="banner"><img src="${anime_image}" text="${anime_title}"></img></div>
        <div class="title"><a href="${anime_url}" target="_blank">${anime_title}</a></div>
        `;
        document.querySelector(".container-tuesday-anime-cards")?.appendChild(card);
      });
  }
  setTimeout(() => { getTuesdaySchedule(); }, 2000);
  
  async function getWednesdaySchedule() {
    const response = await fetch(jikan_api.wednesday);
      const data = await response.json();
      data.data.forEach(anime => {
        const anime_image = anime.images.webp.image_url;
        const anime_title = anime.title;
        const anime_url = anime.url;
        const card = document.createElement("div");
        card.classList.add("anime-card");
        card.innerHTML = `
        <div class="banner"><img src="${anime_image}" text="${anime_title}"></img></div>
        <div class="title"><a href="${anime_url}" target="_blank">${anime_title}</a></div>
        `;
        document.querySelector(".container-wednesday-anime-cards")?.appendChild(card);
      });
  }
  setTimeout(() => { getWednesdaySchedule(); }, 3000);
  
  async function getThursdaySchedule() {
    const response = await fetch(jikan_api.thursday);
      const data = await response.json();
      data.data.forEach(anime => {
        const anime_image = anime.images.webp.image_url;
        const anime_title = anime.title;
        const anime_url = anime.url;
        const card = document.createElement("div");
        card.classList.add("anime-card");
        card.innerHTML = `
        <div class="banner"><img src="${anime_image}" text="${anime_title}"></img></div>
        <div class="title"><a href="${anime_url}" target="_blank">${anime_title}</a></div>
        `;
        document.querySelector(".container-thursday-anime-cards")?.appendChild(card);
      });
  }
  setTimeout(() => { getThursdaySchedule(); }, 4000);
  
  async function getFridaySchedule() {
    const response = await fetch(jikan_api.friday);
      const data = await response.json();
      data.data.forEach(anime => {
        const anime_image = anime.images.webp.image_url;
        const anime_title = anime.title;
        const anime_url = anime.url;
        const card = document.createElement("div");
        card.classList.add("anime-card");
        card.innerHTML = `
        <div class="banner"><img src="${anime_image}" text="${anime_title}"></img></div>
        <div class="title"><a href="${anime_url}" target="_blank">${anime_title}</a></div>
        `;
        document.querySelector(".container-friday-anime-cards")?.appendChild(card);
      });
  }
  setTimeout(() => { getFridaySchedule(); }, 5000);
  
  async function getSaturdaySchedule() {
    const response = await fetch(jikan_api.saturday);
      const data = await response.json();
      data.data.forEach(anime => {
        const anime_image = anime.images.webp.image_url;
        const anime_title = anime.title;
        const anime_url = anime.url;
        const card = document.createElement("div");
        card.classList.add("anime-card");
        card.innerHTML = `
        <div class="banner"><img src="${anime_image}" text="${anime_title}"></img></div>
        <div class="title"><a href="${anime_url}" target="_blank">${anime_title}</a></div>
        `;
        document.querySelector(".container-saturday-anime-cards")?.appendChild(card);
      });
  }
  setTimeout(() => { getSaturdaySchedule(); }, 6000);
  
  async function getSundaySchedule() {
    const response = await fetch(jikan_api.sunday);
      const data = await response.json();
      data.data.forEach(anime => {
        const anime_image = anime.images.webp.image_url;
        const anime_title = anime.title;
        const anime_url = anime.url;
        const card = document.createElement("div");
        card.classList.add("anime-card");
        card.innerHTML = `
        <div class="banner"><img src="${anime_image}" text="${anime_title}"></img></div>
        <div class="title"><a href="${anime_url}" target="_blank">${anime_title}</a></div>
        `;
        document.querySelector(".container-sunday-anime-cards")?.appendChild(card);
      });
  }
  setTimeout(() => { getSundaySchedule(); }, 7000);
  
  return (
    <div className="schedule">
      <Navbar />
      <div className="anime-container">
        <div className="container-title">
          <h2>Monday</h2>
        </div>
        <div className="container-subtitle">
          <span>Monday Anime List (by MAL)</span>
        </div>
        <div className="container-monday-anime-cards"></div>

        <div className="container-title">
          <h2>Tuesday</h2>
        </div>
        <div className="container-subtitle">
          <span>Tuesday Anime List (by MAL)</span>
        </div>
        <div className="container-tuesday-anime-cards"></div>

        <div className="container-title">
          <h2>Wednesday</h2>
        </div>
        <div className="container-subtitle">
          <span>Wednesday Anime List (by MAL)</span>
        </div>
        <div className="container-wednesday-anime-cards"></div>

        <div className="container-title">
          <h2>Thursday</h2>
        </div>
        <div className="container-subtitle">
          <span>Thursday Anime List (by MAL)</span>
        </div>
        <div className="container-thursday-anime-cards"></div>

        <div className="container-title">
          <h2>Friday</h2>
        </div>
        <div className="container-subtitle">
          <span>Friday Anime List (by MAL)</span>
        </div>
        <div className="container-friday-anime-cards"></div>

        <div className="container-title">
          <h2>Saturday</h2>
        </div>
        <div className="container-subtitle">
          <span>Saturday Anime List (by MAL)</span>
        </div>
        <div className="container-saturday-anime-cards"></div>

        <div className="container-title">
          <h2>Sunday</h2>
        </div>
        <div className="container-subtitle">
          <span>Sunday Anime List (by MAL)</span>
        </div>
        <div className="container-sunday-anime-cards"></div>
      </div>
      <Copyright />
    </div>
  );
}

export default Schedule;
