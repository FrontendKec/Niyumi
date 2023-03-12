const jikan_api = {
  "airing": "https://api.jikan.moe/v4/top/anime?filter=airing&type=tv&page=1&limit=14",
  "popular": "https://api.jikan.moe/v4/top/anime?filter=bypopularity&type=tv&page=1&limit=14",
  "upcoming": "https://api.jikan.moe/v4/top/anime?filter=upcoming&type=tv&page=1&limit=14"
}

async function getAiringAnime() {
	const response = await fetch(jikan_api.airing);
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
      document.querySelector(".container-airing-cards")?.appendChild(card);
    });
}
setTimeout(() => { getAiringAnime(); }, 1000);

async function getPopularAnime() {
	const response = await fetch(jikan_api.popular);
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
      document.querySelector(".container-popular-cards")?.appendChild(card);
    });
}
setTimeout(() => { getPopularAnime(); }, 2000);

async function getUpcomingAnime() {
	const response = await fetch(jikan_api.upcoming);
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
      document.querySelector(".container-upcoming-cards")?.appendChild(card);
    });
}
setTimeout(() => { getUpcomingAnime(); }, 3000);

function Index() {
  return (
    <div className="home">
      <div className="navigation">
        <div className="brand">
          <a href="./">Niyumi</a>
        </div>
        <div className="links">
          <a href="./">Home</a>
          <a href="./schedule">Schedule</a>
          <a href="./about">About</a>
        </div>
      </div>
      <div className="anime-container">
        <div className="container-title">
          <h2>Airing Anime</h2>
        </div>
        <div className="container-subtitle">
          <span>Airing Anime List (by MAL)</span>
        </div>
        <div className="container-airing-cards"></div>
        <div className="container-view-more">
          <a href="./">View More</a>
        </div>
        <div className="container-title">
          <h2>Popular Anime</h2>
        </div>
        <div className="container-subtitle">
          <span>Popular Anime List (by MAL)</span>
        </div>
        <div className="container-popular-cards"></div>
        <div className="container-view-more">
          <a href="./">View More</a>
        </div>
        <div className="container-title">
          <h2>Upcoming Anime</h2>
        </div>
        <div className="container-subtitle">
          <span>Upcoming Anime List (by MAL)</span>
        </div>
        <div className="container-upcoming-cards"></div>
        <div className="container-view-more">
          <a href="./">View More</a>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @2023. <a href="./">Niyumi</a>. All rights reserved</p>
      </div>
    </div>
  );
}

export default Index;
