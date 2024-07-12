import React from 'react'
import Nav from './Nav'
import './Home.css'
function Home() {
  return (
    <div>
    <Nav />
    <main className="home-container">
      <section className="hero">
        <h1 className="hero-title">Baby Essential Fashion & Nursery</h1>
        <p className="hero-description">
          Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi quis elit elementum tristique urna.
        </p>
        <a href="#" className="shop-now-btn">SHOP NOW</a>
      </section>
    </main>
  </div>
  )
}

export default Home
