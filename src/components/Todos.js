import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Todo.css'

import HomeBtn from './HomeBtn'


class Todos extends Component {
  constructor () {
    super();
    this.state = {
      users: [],
      selectedUser: '',
    };
  }

  componentDidMount() {
    this.bringUserList();
  }

  async bringUserList() {
    let usersArr = await fetch('https://koreanjson.com/users')
      .then(res => res.json())
      .then(users => users)
      .catch(err => console.error(err));
    
      this.setState({
      users: usersArr,
    })
  }

  selectUser = (e) => {
    this.setState({
      selectedUser: e.target.id
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <HomeBtn />
        </div>
        <div>
          <h2>유저리스트</h2>
          <div className='user-list'>
            {this.state.users.map(user => 
              <div className='each-user' id={user.id} key={user.id} onClick={this.selectUser}>{user.name}</div>
              )}
          </div>
        </div>
        <div className='select-user-btn'>
          <Link to={`/users/${this.state.selectedUser}`} className='select-user-btn-link'>선택</Link>
        </div>
      </div>
    )
  }
}

export default Todos
