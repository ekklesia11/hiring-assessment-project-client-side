import React, { Component } from 'react'

class UserProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      userImg: '',
    };
  }

  componentDidMount() {
    this.bringUserProfile();
    this.bringUserImage();
  }

  async bringUserProfile() {
    let user = await fetch(`http://localhost:5000/${this.props.user.params.id}`)
      .then(res => res.json())
      .then(user => user)
      .catch(err => console.error(err));
      this.setState({
      user: user,
    })
  }

  async bringUserImage() {
    let userImg = await fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(user => user.results[0].picture.large)
      .catch(err => console.error(err));
      this.setState({
      userImg: userImg,
    })
  }

  render() {
    return (
      <div>
        <div className='user-image'>
          <img src={this.state.userImg} alt='' />
        </div>
        <div className='user-details'>
          <div>
            NAME : {this.state.user.name}
          </div>
          <div>
            EMAIL : {this.state.user.email}
          </div>
          <div>
            MOBILE : {this.state.user.phone}
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile