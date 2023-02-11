import React, { Component } from 'react'

export default class AddContact extends Component {
  render() {
    return (
      <div>
        <h1> Add Contacts here</h1>
        <form className='ui form'>
            <div className='field'>
                <label>Name </label>
                <input type={Text} name="UserName" placeholder='Name'></input>
            </div>

            <div className='field'>
                <label>Email </label>
                <input type={Text} name="UserMail" placeholder='Mail'></input>
            </div>

            <button className='ui button blue'>Add</button>
        </form>
      </div>
    )
  }
}
