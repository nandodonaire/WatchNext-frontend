'use strict'

const store = require('../store')

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

}

module.exports = {
  createEntertainmentSuccess,
  createEntertainmentFailure
}
