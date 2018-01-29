'use strict'

const store = require('../store')
const showEntertainmentsQueueTemplate = require('../templates/entertainments_queue.handlebars')

const createEntertainmentSuccess = function (data) {
  $('#createModalLabel').text('Added to queue!')
  $('#createModalLabel').css('color', 'green')
}

const createEntertainmentFailure = function (error) {
  console.log(error)
  $('#createModalLabel').text('Not able to add to queue!')
  $('#createModalLabel').css('color', 'red')
}

const getAllSuccess = function (data) {
  console.log(data)
  $('#content').empty()
  const showQueueHTML = showEntertainmentsQueueTemplate({ entertainments: data.entertainments })
  $('#content').append(showQueueHTML)
}

const getAllFailure = function (error) {
  console.log(error)
}

const getOneEntertainmentSuccess = function (data) {
  console.log(data)
  $('#content').empty()
  const oneEntertainmentHTML = (
    `<ul>
    <li><h2>Title: ${data.entertainment.title}</h2></li>
    <li>ID: ${data.entertainment.id} </li>
    <li>Type: ${data.entertainment.ent_type}</li>
    <li>Genre: ${data.entertainment.genre}</li>
    <li>Synopsis: ${data.entertainment.synopsis}</li>
    <li>Where to Watch: ${data.entertainment.where_to_watch}</li>
    </ul>`
  )
  $('#content').append(oneEntertainmentHTML)
}

const getOneEntertainmentFailure = function (error) {
  console.log(error)
}

const updateEntertainmentSuccess = function (data) {
  $('#updateModalLabel').text('Updated entertainment ID', data.entertainment.id)
  $('#updateModalLabel').css('color', 'green')
}

const updateEntertainmentFailure = function (error) {
  console.log(error)
}

const deleteEntertainmentSuccess = function (data) {
  $('#content').empty()
  $('#content').text('Entertainment has been deleted')
}

const deleteEntertainmentFailure = function (error) {
  console.log(error)
}

module.exports = {
  createEntertainmentSuccess,
  createEntertainmentFailure,
  getAllSuccess,
  getAllFailure,
  getOneEntertainmentSuccess,
  getOneEntertainmentFailure,
  updateEntertainmentSuccess,
  updateEntertainmentFailure,
  deleteEntertainmentSuccess,
  deleteEntertainmentFailure
}
