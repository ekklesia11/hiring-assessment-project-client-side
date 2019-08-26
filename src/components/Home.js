import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='application-menu'>
        <div className='main-wording'>
          어플리케이션을 골라주세요
        </div>
        <Link to='/users' className='application-btn'>투두</Link>
        <Link to='/posts' className='application-btn'>게시판</Link>
      </div>
    </div>
  )
}

export default Home
