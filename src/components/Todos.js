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
              style={{backgroundColor: this.state.users.length > 0 && 
                this.state.selectedUser === user.id ? 'red' : 'none'}}
              id={user.id} key={user.id} onClick={this.selectUser}>{user.name}</div>
              )}
          </div>
        </div>
          <Link to={`/users/${this.state.selectedUser}`} className='select-user-btn-link'>
            <button>선택</button>
          </Link>
        <div>
          <button onClick={this.goBack}>뒤로가기</button>
        </div>
      </div>
    )
  }
}

export default Todos
