let holder = document.querySelector('.holder');



data.forEach(x => {
  
  let artistName = x.artist;
  
  if (!x.subArtist == '') {
    artistName = x.artist + '|' + x.subArtist;
  }
  
  holder.innerHTML += `
    <div class="box" style="background-image: url(${x.art})">
        <div class="dataBox">
          <h1 class="name">${x.name}</h1>
          <h2 class="artists">${artistName}</h2>
          <h3 class="genre">${x.genre}</h3>
          <h4 class="mood">${x.mood}</h4>
          <h4 class="pblsdt">${x.publishDate}</h4>
          <h3 class="channel">${x.channel}</h3>
          <h3 class="channel">Volume : ${x.bolume}</h3>
          <p class="links"><a href="${x.artwork}">Artwork</a> <a href="${x.art}">Art</a> <a href="${x.arLnk}">Source</a> <a href="${x.pbLnk}">Link</a></p>
        </div>
        <p class="titles">${x.artist} - ${x.name}</p>
        <p class="pblsdt">Publish : ${x.publishDate}</p>

        <p class="links"><a href="${x.artwork}">Artwork</a> <a href="${x.art}">Art</a> <a href="${x.arLnk}">Source</a> <a href="${x.pbLnk}">Link</a></p>
      </div>
  `;
  
  
  
})