import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl">
          This is a sample home page. You can add more content, sections, and components here.
        </p>
      </main>
    </div>
  )
}

export default Home

