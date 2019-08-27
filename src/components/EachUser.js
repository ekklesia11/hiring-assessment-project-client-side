import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeBtn from './HomeBtn'
import UserProfile from './UserProfile'

class EachUser extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <HomeBtn />
        <div className='go-back-btn'>
          <button onClick={this.goBack}>뒤로가기</button>
        </div>
        <UserProfile user={this.props.match} />
        <Link to={`/users/${this.props.match.params.id}`} ><button>유저프로필</button></Link>
        <Link to={`/users/${this.props.match.params.id}/todos`} ><button>투두</button></Link>
      </div>
    )
  }
}

export default EachUser
