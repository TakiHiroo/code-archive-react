import React from 'react'
import About from './components/About'
import Books from './components/Books'
import Counter from './components/Counter'
import Feeds from './components/Feeds'
import Footer from './components/Footer'
import Header from './components/Header'
import Navmain from './components/Navmain'

function Home() {
  return (
    <>
    <Navmain/>
    <Header/>
    <Counter/>
    <About/>
    <Books/>
    <Feeds/>
    <Footer/>
    </>
  )
}

export default Home
