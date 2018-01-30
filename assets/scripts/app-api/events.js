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
  $('#addToQueue').find('input:text, select, textarea').val('')
}

const onGetAll = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  appApi.getAll(data)
    .then(appUi.getAllSuccess)
    .catch(appUi.getAllFailure)
}

const onGetEntertainment = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  appApi.getOneEntertainment(data)
    .then(appUi.getOneEntertainmentSuccess)
    .catch(appUi.getOneEntertainmentFailure)
  $('#entertainment-search').find('input:text, select, textarea').val('')
}

const onUpdateEntertainment = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  appApi.updateEntertainment(data)
    .then(appUi.updateEntertainmentSuccess)
    .catch(appUi.updateEntertainmentFailure)
  $('#updateEntertainment').find('input:text, select, textarea').val('')
}

const onEntertainmentDelete = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  appApi.deleteEntertainment(data)
    .then(appUi.deleteEntertainmentSuccess)
    .catch(appUi.deleteEntertainmentFailure)
  $('#entertainment-delete').find('input:text, select, textarea').val('')
}

const addHandlers = function () {
  $('#addToQueue').on('submit', onCreate)
  $('#get-all').on('click', onGetAll)
  $('#entertainment-search').on('submit', onGetEntertainment)
  $('#updateEntertainment').on('submit', onUpdateEntertainment)
  $('#entertainment-delete').on('submit', onEntertainmentDelete)
}

module.exports = {
  addHandlers
}
