$(document).ready(function() {
  const API_KEY = '7e1bb37d8a2bdfa407f496ca3c1c8133'
  const allowCors = 'https://cors-anywhere.herokuapp.com/'
  const queryURL = `${allowCors}http://api.musixmatch.com/ws/1.1/artist.search?q_artist=prodigy&page_size=5&apikey=${API_KEY}`

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    response = JSON.parse(response)
    console.log(response)
  })
})
