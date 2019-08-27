import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeBtn from './HomeBtn'
import UserProfile from './UserProfile'

class EachUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  // changeUserProfileOn = () => {
  //   if (!this.state.userProfileOn) {
  //     this.setState({
  //       userProfileOn: true,
  //       userTodoOn: false,
  //     })
  //   }
  // }
  // changeUserTodoOn = () => {
  //   if (!this.state.userTodoOn) {
  //     this.setState({
  //       userProfileOn: false,
  //       userTodoOn: true,
  //     })
  //   }
  // }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        <HomeBtn />
        <div className='go-back-btn'>
          <button onClick={this.goBack}>뒤로가기</button>
        </div>
        {/* <div style={{display: this.state.userProfileOn ? 'block' : 'none'}}> */}
          <UserProfile user={this.props.match} />
        {/* </div> */}
        {/* <div style={{display: this.state.userTodoOn ? 'block' : 'none'}}>
          <UserTodo user={this.props.match}/>
        </div> */}
        <Link to={`/users/${this.props.match.params.id}`} ><button>유저프로필</button></Link>
        <Link to={`/users/${this.props.match.params.id}/todos`} ><button>투두</button></Link>
      </div>
    )
  }
}

export default EachUser
