import React, { Component } from 'react'
import Input from '../common/Input'

class CreatePetForm extends Component {
  render () {
    return (
      <form>
        <div>
          {this.props.error}
        </div>
        <Input
          name='name'
          placeholder='Name'
          value={this.props.pet.name}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='image'
          type='url'
          placeholder='Image'
          value={this.props.pet.image}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='breed'
          placeholder='Breed'
          value={this.props.pet.breed}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='age'
          type='number'
          placeholder='Age'
          value={this.props.pet.age}
          onChange={this.props.onChange} />
        <br />
        <div>
          <label htmlFor='type'>
          Type
          </label>
          <select
            type='name'
            value={this.props.pet.type}
            onChange={this.props.onChange} >
            <option value='Cat'>Cat</option>
            <option value='Dog'>Dog</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <input type='submit' onClick={this.props.onSave} />
      </form>
    )
  }
}

export default CreatePetForm
