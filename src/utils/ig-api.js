const rootURL = 'https://api.instagram.com/v1/'
const endpoints = {
  searchUsers: rootURL + 'users/search?',
  getProfile: rootURL + 'users/',
  getRecentMedia: (id) => (rootURL + 'users/' + id + '/media/recent/')
}
const accessToken = '4122045686.d360e6c.4af93ba14e614e1187cfd0e677fc98cf'

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
