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

module.exports = {
  createEntertainment,
  getAll
}
