import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'

class RegisterPage extends Component {
    constructor (props){
        super(props)

        this.state ={
            user: {
                email:'',
                password:'',
                confirmPassword:'',
                name: ''
            },
            error:''
        }

        this.handleUserRegistration = this.handleUserRegistration.bind(this)
        userStore.on(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
    }

    componentWillUnmount () {
        userStore.removeListener(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
    }
    handleUserChange (event){
        const target = event.target
        const field = target.name
        const value = target.value

        const user = this.state.user
        user[field] = value

        this.setState({user})
    }
    handleUserForm (event) {
        event.preventDefault()
        if(!this.validateUser()){
            return
        }

        userActions.register(this.state.user)
    }
    handleUserRegistration (data){
        console.log(data)
    }
    validateUser (){
        const user = this.state.user
        let formIsValid = true
        let error = ''
        if(user.password !== user.confirmPassword){
            error = 'Invalid Password'
            formIsValid = false
        }

        if(error){
            this.setState({error})
        }

        return formIsValid
    }
    render () {
        return (
            <div>
                <h1>Register User</h1>
                <RegisterForm 
                user={this.state.user}
                error={this.state.error}
                onChange={this.handleUserChange.bind(this)}
                onSave={this.handleUserForm.bind(this)}/>
            </div>
        )
    }
}

export default RegisterPage