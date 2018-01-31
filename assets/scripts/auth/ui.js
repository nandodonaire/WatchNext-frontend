'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#modalLabel').text('Successfully signed up! Please sign in to continue.')
  $('#modalLabel').css('color', 'green')
}

const signUpFailure = function (data) {
  // console.error(error)
  $('#modalLabel').text('Sign up failed!')
  $('#modalLabel').css('color', 'red')
}

const signInSuccess = function (data) {
  // console.log(data)
  $('#modalLabel').text('Successfully signed in!')
  $('#modalLabel').css('color', 'green')
  $('#messages').empty()
  const welcomeMessageHTML = (
    `<p>Welcome ${data.user.email}! You can add entertainments to your queue by clicking on the Add To Queue button. You can then see all of the entertainments in your queue by clicking on Show Queue.</p>`
  )
  $('#messages').append(welcomeMessageHTML)
  $('#content').removeClass('hide')
  $('.logged-out').addClass('hide')
  $('.logged-in').removeClass('hide')
  $('.app-api-functionality').removeClass('hide')
  store.user = data.user
  // console.log('the stored data', store)
}

const signInFailure = function (data) {
  // console.error(error)
  $('#modalLabel').text('Sign in failed!')
  $('#modalLabel').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  // console.log('Changed password!')
  $('#modalLabel').text('Changed password!')
  $('#modalLabel').css('color', 'green')
}

const changePasswordFailure = function (data) {
  // console.error(error)
  $('#modalLabel').text('Error changing password!')
  $('#modalLabel').css('color', 'red')
}

const signOutSuccess = function () {
  // console.log('Signed out!')
  $('#modalLabel').text('Signed out!')
  $('modalLabel').css('color', 'green')
  $('.logged-out').removeClass('hide')
  $('.logged-in').addClass('hide')
  $('.app-api-functionality').addClass('hide')
  $('#content').empty()
  $('#content').addClass('hide')
  $('#messages').empty()
  $('#messages').append(" Having trouble remembering all of the movies and shows you'd like to watch and where you can watch them? You can keep track of all of them here! Please sign in to view and add to your queue.")
  store.user = null
}

const signOutFailure = function () {
  $('#modalLabel').text('Failed signing out!')
  $('#modalLabel').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
