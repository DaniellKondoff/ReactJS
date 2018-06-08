import React, { Component } from 'react'
import Input from '../common/Input'


const PetsCommentForm = (props) => (
        <form>
          <label>
          Enter a comment:
          </label>
          <br />
          <Input
            name='message'
            placeholder='Comment'
            value={props.message.message}
            onChange={props.onChange} />
          <br />
          <input type='submit' onClick={props.onPost} />
        </form>
)

export default PetsCommentForm
