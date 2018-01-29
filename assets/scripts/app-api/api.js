'use strict'

const config = require('../config')
const store = require('../store')

const createEntertainment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/entertainments',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAll = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/entertainments',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getOneEntertainment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/entertainments/' + data.entertainment.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateEntertainment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/entertainments/' + data.entertainment.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteEntertainment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/entertainments/' + data.entertainment.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createEntertainment,
  getAll,
  getOneEntertainment,
  updateEntertainment,
  deleteEntertainment
}
