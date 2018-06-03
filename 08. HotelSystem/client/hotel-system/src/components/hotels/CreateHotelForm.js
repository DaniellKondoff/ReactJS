import React, { Component } from 'react'
import Input from '../common/Input'

class CreateHotelForm extends Component {
  render () {
    return (
      <form>
        <div>{this.props.error}</div>
        <Input
          name='name'
          placeholder='Name'
          value={this.props.hotel.name}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='location'
          placeholder='Location'
          value={this.props.hotel.location}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='description'
          placeholder='Description'
          value={this.props.hotel.description}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='numberOfRooms'
          type='number'
          placeholder='Number Of Rooms'
          value={this.props.hotel.numberOfRooms}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='image'
          type='url'
          placeholder='Image'
          value={this.props.hotel.image}
          onChange={this.props.onChange} />
        <br />
        <Input
          name='parkingSlots'
          type='number'
          placeholder='Parking Slots'
          value={this.props.hotel.parkingSlots}
          onChange={this.props.onChange} />
        <br />
        <input type='submit' onClick={this.props.onSave} />
      </form>
    )
  }
}

export default CreateHotelForm
