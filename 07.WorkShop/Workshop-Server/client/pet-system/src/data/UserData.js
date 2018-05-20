const baseURl = 'http://localhost:5000/auth'

const getOptions = () => ({
  method: 'POST',
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
const handleJsonRespons = res => res.json()

class UserData {
  static register (user) {
    const options = getOptions()
    options.body = JSON.stringify(user)
    return window.fetch(`${baseURl}/signup`, options)
      .then(handleJsonRespons)
  }
  static login (user) {
    const options = getOptions()
    options.body = JSON.stringify(user)
    return window.fetch(`${baseURl}/login`, options)
      .then(handleJsonRespons)
  }
}

export default UserData
