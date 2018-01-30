'use strict'

const store = require('../store')
const showEntertainmentsQueueTemplate = require('../templates/entertainments_queue.handlebars')

const createEntertainmentSuccess = function (data) {
  $('#messages').empty()
  $('#content').empty()
  $('#createModalLabel').text('Added to queue!')
  $('#createModalLabel').css('color', 'green')
}

const createEntertainmentFailure = function (error) {
  console.log(error)
  $('#messages').empty()
  $('#createModalLabel').text('Not able to add to queue!')
  $('#createModalLabel').css('color', 'red')
}

const getAllSuccess = function (data) {
  console.log(data)
  $('#content').empty()
  $('#messages').empty()
  const showQueueHTML = showEntertainmentsQueueTemplate({ entertainments: data.entertainments })
  if (data.entertainments.length === 0) {
    $('#messages').append('There is nothing on the queue! Please add to the queue by clicking on Add To Queue.')
  } else {
    $('#content').append(showQueueHTML)
  }
}

const getAllFailure = function (error) {
  console.log(error)
  $('#content').empty()
  $('#messages').empty()
  $('#messages').text('Not able to show queue!')
}

const getOneEntertainmentSuccess = function (data) {
  console.log(data)
  $('#content').empty()
  $('#messages').empty()
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
  $('#content').empty()
  $('#messages').empty()
  $('#messages').text('Not able to show entertainment! Please make sure to enter a valid Entertainment ID.')
}

const updateEntertainmentSuccess = function (data) {
  $('#content').empty()
  $('#messages').empty()
  $('#updateModalLabel').text('Updated entertainment')
  $('#updateModalLabel').css('color', 'green')
}

const updateEntertainmentFailure = function (error) {
  console.log(error)
  $('#content').empty()
  $('#messages').empty()
  $('#updateModalLabel').text('Not able to update entertainment! Please make sure to enter information in all of the fields.')
}

const deleteEntertainmentSuccess = function (data) {
  $('#content').empty()
  $('#messages').empty()
  $('#messages').text('Entertainment has been deleted')
}

const deleteEntertainmentFailure = function (error) {
  console.log(error)
  $('#content').empty()
  $('#messages').empty()
  $('#messages').text('Not able to delete entertainment! Please make sure to enter a valid Entertainment ID.')
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
