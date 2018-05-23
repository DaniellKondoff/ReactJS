import Auth from '../components/users/Auth'
const baseURl = 'http://localhost:5000'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonRespons = res => res.json()

const appyAuthorizationHeader = (options, authenticated) => {
  if (authenticated) {
    options.headers.Authorization = `bearer ${Auth.getToken()}`
  }
}

class Data {
  static post (url, data, authenticated) {
    let options = getOptions()
    options.method = 'POST'
    options.body = JSON.stringify(data)

    appyAuthorizationHeader(options, authenticated)
    return window.fetch(`${baseURl}${url}`, options)
      .then(handleJsonRespons)
  }

  static get (url, authenticated) {
    let options = getOptions()
    options.method = 'GET'

    appyAuthorizationHeader(options, authenticated)
    return window.fetch(`${baseURl}${url}`, options)
      .then(handleJsonRespons)
  }
}

export default Data
