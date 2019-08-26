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

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <HomeBtn />
        <div className='go-back-btn'>
          <div onClick={this.goBack}>뒤로가기</div>
        </div>
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
