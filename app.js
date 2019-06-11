$(document).ready(function() {
  const queryURL =
    'https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/artist.search?s_artist_rating=desc&q_artist=philthy rich&page=1&page_size=5'
  $.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'musixmatchcom-musixmatch.p.rapidapi.com',
      'X-RapidAPI-Key': 'b7436eb940msh7eda97d567495aap1562ccjsndf86c1bddee6'
    }
  }).then(function(response) {
    response = JSON.parse(response)
    console.log(response)
  })
})
