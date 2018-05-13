import React, { Component } from 'react'
import AuthorForm from './AuthorForms'
import toastr from 'toastr'

class AuthorPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: {
        firstName: '',
        lastName: ''
      },
      errors: {
        firstName: '',
        lastName: ''
      }
    }
  }

  handleInputChanged (event) {
    const target = event.target
    const name = target.name
    const value = target.value
    let author = this.state.author
    author[name] = value

    this.setState({author})
  }
  saveAuthor (event) {
    event.preventDefault()
    if (!this.validateAuthor()) {
      return
    }
    console.log(this.state.author)
    toastr.success('Thank You! Author Added!')
  }

  validateAuthor () {
    let author = this.state.author
    let errors = {}
    let isFormValid = true

    if (!author.firstName || author.firstName.length < 3) {
      errors.firstName = 'Minimym 3 symbols'
      isFormValid = false
    }
    if (!author.lastName || author.lastName.length < 3) {
      errors.lastName = 'Minimym 3 symbols'
      isFormValid = false
    }

    this.setState({errors})

    return isFormValid
  }

  render () {
    return (
      <div>
        <h1>Create Author</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.handleInputChanged.bind(this)}
          errors={this.state.errors}
          onSave={this.saveAuthor.bind(this)} />
      </div>
    )
  }
}

export default AuthorPage
