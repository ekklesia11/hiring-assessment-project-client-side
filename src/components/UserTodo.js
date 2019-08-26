import React, { Component } from 'react'

class UserTodo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userTodos: [],
    }
  }

  componentDidMount() {
    this.bringUserTodos()
  }

  async bringUserTodos() {
    let userTodos = await fetch(`https://koreanjson.com/todos?userId=${this.props.user.params.id}`)
      .then(res => res.json())
      .then(todos => todos)
      .catch(err => console.error(err));
    this.setState({
      userTodos: userTodos,
    })
  }

  selectOption = (e) => {
    console.log(e.target.selectedOptions)
  }

  render() {
    return (
      <div>
        <select onChange={this.selectOption}>
          <option>모든 투두</option>
          <option>미완료된 투두</option>
          <option>완료된 투두</option>
        </select>
      </div>
    )
  }
}

export default UserTodo