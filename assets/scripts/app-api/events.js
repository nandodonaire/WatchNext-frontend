'use strict'

const appApi = require('./api.js')
const appUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  appApi.createEntertainment(data)
    .then(appUi.createEntertainmentSuccess)
    .catch(appUi.createEntertainmentFailure)
}

const onGetAll = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  appApi.GetAll(data)
    .then(appApi.getAllSuccess)
    .catch(appApi.getAllFailure)
}

const addHandlers = function () {
  $('#addToQueue').on('submit', onCreate)
  $('#get-all').on('click', onGetAll)
}

module.exports = {
  addHandlers
}
