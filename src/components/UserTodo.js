import React, { Component } from 'react'
import './UserTodo.css'

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
    let userTodos = await fetch(`http://localhost:5000/todos?userId=${this.props.user.params.id}`)
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
      </div>
    )
  }
}

export default UserTodo