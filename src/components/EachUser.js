import React, { Component } from 'react'
import HomeBtn from './HomeBtn'
import UserProfile from './UserProfile'
import UserTodo from './UserTodo'

class EachUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userProfileOn: true,
      userTodoOn: false,
    }
  }

  changeUserProfileOn = () => {
    if (!this.state.userProfileOn) {
      this.setState({
        userProfileOn: true,
        userTodoOn: false,
      })
    }
  }
  changeUserTodoOn = () => {
    if (!this.state.userTodoOn) {
      this.setState({
        userProfileOn: false,
        userTodoOn: true,
      })
    }
  }

  render() {
    return (
      <div>
        <HomeBtn />
        <div style={{display: this.state.userProfileOn ? 'block' : 'none'}}>
          <UserProfile user={this.props.match} />
        </div>
        <div style={{display: this.state.userTodoOn ? 'block' : 'none'}}>
          <UserTodo user={this.props.match}/>
        </div>
        <button onClick={this.changeUserProfileOn}>유저프로필</button>
        <button onClick={this.changeUserTodoOn}>투두</button>
      </div>
    )
  }
}

export default EachUser
