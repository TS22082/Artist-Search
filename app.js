$(document).ready(function() {
  const API_KEY = '7e1bb37d8a2bdfa407f496ca3c1c8133'
  const allowCors = 'https://cors-anywhere.herokuapp.com/'

  $('#submitBtn').on('click', e => {
    let artistQuery = $('#textInput').val()
    const queryURL = `${allowCors}http://api.musixmatch.com/ws/1.1/artist.search?q_artist=${artistQuery}&page_size=5&apikey=${API_KEY}`
    e.preventDefault()
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(res => {
      res = JSON.parse(res)
      console.log(res)
    })
  })
})
