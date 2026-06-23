const search = document.querySelector('.anime-search');
const button = document.querySelector('.search-anime');
const animeGrid = document.querySelector('.anime-grid');
const modal = document.querySelector(".modal");
const modalDiv = document.querySelector(".overlay-modal");
const exitButton = document.querySelector('.exit');

button.addEventListener('click', () => {
    const input = search.value;
    console.log(input);
    GenerateAnimeHTML(input);

})

async function GenerateAnimeHTML(animeName) {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);

  const animeData = await response.json();

  console.log(animeData);

  let animeHtml = ``;

  animeData.data.forEach((anime) => {
    animeHtml += `
    <div class="anime-card" data-id="${anime.mal_id}">
    <div class="rating-info">
    <p>⭐️</p>
    <p class="rating">${anime.score === null ? "No Rating" : anime.score}</p>
    </div>
    <img class="anime-img" src="${anime.images.jpg.image_url}">


  
    <div class="details">
    <p class="details-p">${anime.type}</p>
     <p class="details-p">${anime.year === null ? (anime.aired.from === null ? "Unknown" : anime.aired.from.substring(0,4)) : anime.year}</p>
     </div>


     <div class="title">
       <p class="anime-title">${anime.title_english}</p>
     </div>
    
    



    </div> `



  })

    animeGrid.innerHTML = animeHtml

    const animeCards = document.querySelectorAll('.anime-card');

    animeCards.forEach((animeCard) => {
      animeCard.addEventListener('click', (e) => {
        const anime = e.currentTarget;

        const foundAnime = animeData.data.find((anime1) => anime1.mal_id === Number(anime.dataset.id))

        console.log(foundAnime);

      
         modalDiv.style.display = "flex";

        modal.innerHTML = `
        <button class="exit" onclick="modalDiv.style.display='none'" >X</button>
        <p>${foundAnime.synopsis}</p>
        `;
      })
    })

    exitButton.addEventListener('click', () => {
      modalDiv.style.display = 'none';
    })
}