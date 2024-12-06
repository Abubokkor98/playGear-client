import React from 'react'
import Slider from '../components/Slider'
import SportsCategories from '../components/SportsCategories'

export default function Home() {
  return (
    <div>
      <header>
        <Slider></Slider>
      </header>
      <main>
        <SportsCategories></SportsCategories>
        <section className='mt-10'>
        </section>
      </main>
    </div>
  )
}
