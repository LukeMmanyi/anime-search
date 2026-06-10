const search = document.querySelector('.anime-search');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const input = search.value;
    GenerateAnimeHTML(input);

})

async function GenerateAnimeHTML(animeName) {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);

  const animeData = await response.json();

  let animeHtml = ``;

  animeData.data.forEach((anime) => {
    animeHtml += `
    <div class="anime-card">


    <div>
    
    
    
    
    `
  })

}