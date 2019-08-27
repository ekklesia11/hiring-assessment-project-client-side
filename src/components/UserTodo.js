import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UserTodo.css'
import HomeBtn from './HomeBtn'

class UserTodo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userTodos: [],
      viewOption: '모든 투두',
    }
  }

  componentDidMount() {
    this.bringUserTodos()
  }

  async bringUserTodos() {
    let userTodos = await fetch(`http://localhost:5000/todos?userId=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(todos => todos)
      .catch(err => console.error(err));
    this.setState({
      userTodos: userTodos,
    })
  }

  selectOption = (e) => {
    this.setState({
      viewOption: e.target.selectedOptions[0].value,
    })
  }

  render() {
    return (
      <div>
        <HomeBtn />
        <div className='go-back-btn'>
          <button onClick={this.goBack}>뒤로가기</button>
        </div>

        <select onChange={this.selectOption}>
          <option>모든 투두</option>
          <option>미완료된 투두</option>
          <option>완료된 투두</option>
        </select>
        <span>
          {
            this.state.viewOption === '미완료된 투두' ? 
            this.state.userTodos.filter(todo => !todo.completed).length :
            this.state.viewOption === '완료된 투두' ?
            this.state.userTodos.filter(todo => todo.completed).length :
            this.state.userTodos.length
          }
        </span>
        <div className='todo-list'>
          {
            this.state.viewOption === '미완료된 투두' ? 
            this.state.userTodos.filter(todo => !todo.completed).map((todo, i) => <div key={i} className='each-todo'>{todo.title}</div>) :
            this.state.viewOption === '완료된 투두' ?
            this.state.userTodos.filter(todo => todo.completed).map((todo, i) => <div key={i} className='each-todo'>{todo.title}</div>) :
            this.state.userTodos.map((todo, i) => <div key={i} className='each-todo'>{todo.title}</div>)
          }
        </div>
        <Link to={`/users/${this.props.match.params.id}`} ><button>유저프로필</button></Link>
        <Link to={`/users/${this.props.match.params.id}/todos`} ><button>투두</button></Link>
      </div>
    )
  }
}

export default UserTodo