const api = 'https://api.jikan.moe/v4/schedules?filter=saturday&kids=false&page=1&limit=14';

(function fetchAPI(api) {
    fetch(api).then(response=>response.json()).then(data=>{
        data.data.forEach(anime => {
            let container = document.querySelector('.container-saturday-anime-cards');
            const image = anime.images.webp.image_url;
            const title = anime.title;
            const url = anime.url;
            const card = document.createElement('div');
            card.classList.add('anime-card');
            card.innerHTML = `
            <div class="banner"><img src="${image}" text="${title}"></img></div>
            <div class="title"><a href="${url}" target="_blank">${title}</a></div>
            `;
            container.appendChild(card);
        });
    }).catch(error=>console.error(error));
})(api);