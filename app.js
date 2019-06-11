$(document).ready(function() {
  const API_KEY = '7e1bb37d8a2bdfa407f496ca3c1c8133'
  const allowCors =
    'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/'

  $('#submitBtn').on('click', e => {
    e.preventDefault()
    const artistQuery = $('#textInput').val()
    const queryURL = `${allowCors}artist.search?q_artist=${artistQuery}&page_size=5&apikey=${API_KEY}`
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(res => {
      res = JSON.parse(res)
      console.log(res.message.body.artist_list)
    })
  })
})
