import React, { useContext } from 'react';
import Footer from './FooterBar';
import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'
import BookList from '../book/booklist';
const Home = (props) => {

  return (

    <main role="main">

      <HeaderBar/>
      <br/>
      <div className="container my-5">
      <BookList />
      </div>
      <FooterBar />
    </main>
  )
}

export default (Home)
