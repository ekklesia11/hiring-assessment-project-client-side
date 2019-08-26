import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Todos.css'

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
    let usersArr = await fetch('http://localhost:5000/')
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

  goBack = () => {
    this.props.history.goBack();
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
              <div className='each-user'  
              style={{backgroundColor: this.state.selectedUser === user.id ? '#c2c2c2' : 'none'}}
              id={user.id} key={user.id} onClick={this.selectUser}>{user.name}</div>
              )}
          </div>
        </div>
        <div className='select-user-btn'>
          <Link to={`/users/${this.state.selectedUser}`} className='select-user-btn-link'>선택</Link>
        </div>
        <div className='go-back-btn'>
          <div onClick={this.goBack}>뒤로가기</div>
        </div>
      </div>
    )
  }
}

export default Todos
