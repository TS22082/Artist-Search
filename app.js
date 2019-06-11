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
      const artistList = res.message.body.artist_list
      console.log(artistList)
      for (let i = 0; i < artistList.length; i++) {
        $('#artistQueryList').append(
          `<li class="list-group-item">${artistList[i].artist.artist_name}</li>`
        )
      }
    })
  })
})
