const rootURL = 'https://api.instagram.com/v1/'
const endpoints = {
  searchUsers: rootURL + 'users/search?',
  getProfile: rootURL + 'users/',
  getRecentMedia: (id) => (rootURL + 'users/' + id + '/media/recent/')
}
const accessToken = '4122045686.cb3328b.ce630b2fea6240e1920cfc956a1582d3'

const methods = {
  searchUsers: (query, cb) => {
    $.ajax({
      url: endpoints.searchUsers + 'q=' + query + '&access_token=' + accessToken,
      success: data => cb(null, data),
      error: data => cb(true),
      crossDomain: true,
      type: 'GET',
      dataType: 'jsonp'
    })
  },
  getProfile: (id, cb) => {
    $.ajax({
      url: endpoints.getProfile + id + '/?access_token=' + accessToken,
      success: data => cb(null, data),
      error: data => cb(true),
      crossDomain: true,
      type: 'GET',
      dataType: 'jsonp'
    })
  },
  getRecentMedia: (id, cb) => {
    $.ajax({
      url: endpoints.getRecentMedia(id) + '?access_token=' + accessToken,
      success: data => cb(null, data),
      error: data => cb(true),
      crossDomain: true,
      type: 'GET',
      dataType: 'jsonp'
    })
  }
}

export default methods
