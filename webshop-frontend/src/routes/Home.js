import React from 'react'
import Carousel from '../components/homepage/Carousel'
import NewProducts from '../components/homepage/NewProducts'
import SalesImages from '../components/homepage/SalesImages'
import TopSellingProduct from '../components/homepage/TopSellingProduct'

const Home = () => {
  return (
    <div className='Home'>
   
    {/* Carousel Thingy */}
        <section className='carousel'>
            <Carousel />
        </section>
        <section className='newProducts'>
            <NewProducts />
        </section>
        <section className=''>
            
        </section>
        <section className='salesImages'>
            <SalesImages />
        </section>
        <section className='topSellingProducts'>
            <TopSellingProduct />
        </section>
    
    {/*  Home page div */}
    </div>  
  
  )
}

export default Home