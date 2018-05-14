import Auth from './Auth'

const LogoutPage = (props) => {
  Auth.deauthenticateUser()
  props.history.push('/register')
  return null
}

export default LogoutPage
