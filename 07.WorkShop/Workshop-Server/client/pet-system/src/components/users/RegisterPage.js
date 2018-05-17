import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

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
    }
    handleUserChange (event){
        const target = event.target
        const field = target.name
        const value = target.value

        const user = this.state.user
        user[field] = value

        this.setState({user})
    }
    handleUserRegistration (event) {
        event.preventDefault()
        
    }
    render () {
        return (
            <div>
                <h1>Register User</h1>
                <RegisterForm 
                user={this.state.user}
                error={this.state.error}
                onChange={this.handleUserChange.bind(this)}
                onSave={this.handleUserRegistration.bind(this)}/>
            </div>
        )
    }
}

export default RegisterPage