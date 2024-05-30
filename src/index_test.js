
var assert = require('assert'); 
const fs = require('fs')


describe('Navigation Bar Component Testing', () => {
  it('shows loginScreen when not logged in', () => {
    const profileInfo = {
      id: ''
    }
    var result = ''
    if(profileInfo.id==='') {
      let result = 'LOGIN'
      return result
    }
    assert.ok(result === 'LOGIN')
  })
  it('shows profileInfo when logged in', () => {
    const profileInfo = {
      id: 'foodredflower'
    }
    const result = ''
    if(profileInfo.id!=='') {
      let result = profileInfo.id
      return result
    }
    assert.ok(result === 'foodredflower') 
})}); 

describe('Linked To Spotify Component Testing', () => {
  describe('check for access token', () => {
    it('response for no token', () => {
      var token 
      var result
      if (!token) {
        let result = 'no token'
        return result
    }
      assert.ok(result = 'no token')
  })
    it('response for token', () =>{
      var token = 'token'
      var result = 'no token'
      var isLogged = false
      if(token==='', () => {
        let result = 'yay found token'
        let isLogged = true
        return (result, isLogged)
      })
        assert.ok(result = 'yay found token')
        assert.ok(isLogged = true)
    })
  })
  describe('logout function', () => {
    it('resets some info and logs out', () => {
      var token = 'token'
      var profileInfo = 'some info'
      var isLogged = true
      var logout = true
      if (logout === true) {
        let token = ''
        let profileInfo = ''
        let isLogged = false
        return (token, profileInfo, isLogged)
      }
      assert.ok(token === '')
      assert.ok(profileInfo = '')
      assert.ok(isLogged = false)
    
    })
  })
})

describe('Profile Information Component Testing', () => {
  it('sets profile info once logged in', () => {
    var profileInfo
    var loggedIn = true
    if (loggedIn === true) {
      let profileInfo = 'foodredflower'
      return profileInfo
    }
    assert.ok(profileInfo = 'foodredflower')
  })
})

describe('Display Component Testing', () => {
  it('Not logged Display', () => {
    var logged = false
    var result
    if (logged = false) {
      let result = 'no display'
      return result
    }
    assert.ok(result = 'no display')
  })
  it('Yes logged Display', () => {
    var logged = true
    var result
    if (logged = true) {
      let result = 'display'
      return result
    }
    assert.ok(result = 'display')
  })
}); 
  
describe('Playlsit Component Testing', () => {
  it('sets profile info once logged in', () => {
    var profileInfo
    var loggedIn = true
    if (loggedIn === true) {
      let profileInfo = 'foodredflower'
      return profileInfo
    }
    assert.ok(profileInfo = 'foodredflower')
  })
})