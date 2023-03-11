// @ts-check
const api_monday = 'https://api.jikan.moe/v4/schedules?filter=monday&kids=false&page=1&limit=14';

(function fetchAPI(api) {
    fetch(api).then(response=>response.json()).then(data=>{
        data.data.forEach((/** @type {{ images: { webp: { image_url: any; }; }; title: String; url: any; }} */ anime) => {
            const image = anime.images.webp.image_url;
            const title = anime.title;
            const url = anime.url;
            const card = document.createElement('div');
            card.classList.add('anime-card');
            card.innerHTML = `
            <div class="banner"><img src="${image}" text="${title}"></img></div>
            <div class="title"><a href="${url}" target="_blank">${title}</a></div>
            `;
            document.querySelector('.container-monday-anime-cards')?.appendChild(card);
        });
    }).catch(error=>console.error(error));
})(api_monday);