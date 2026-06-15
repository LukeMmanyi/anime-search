const search = document.querySelector('.anime-search');
const button = document.querySelector('button');
const animeGrid = document.querySelector('.anime-grid');

button.addEventListener('click', () => {
    const input = search.value;
    GenerateAnimeHTML(input);

})

async function GenerateAnimeHTML(animeName) {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);

  const animeData = await response.json();

  console.log(animeData);

  let animeHtml = ``;

  animeData.data.forEach((anime) => {
    animeHtml += `
    <div class="anime-card">
    <div class=rating-info>
    <p>⭐️</p>
    <p class="rating">${anime.score}</p>
    </div>
    <img class="anime-img" src="${anime.images.jpg.image_url}">


  
    <div class="details">
    <p class="details-p">${anime.type}</p>
     <p class="details-p">${anime.year}</p>
     </div>


     <div class="title">
       <p class="anime-title">${anime.title}</p>
     </div>
    
    



    </div> `



  })

    animeGrid.innerHTML = animeHtml
}