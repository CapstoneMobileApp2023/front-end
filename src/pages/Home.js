import React from 'react'
// import HomeCarousel from './components/HomeCarousel'
import { PrimeReactProvider } from 'primereact/api'

const Home = () => {
  return (
    <>
      <PrimeReactProvider>
        <div>Home</div>
          {/* <HomeCarousel/> */}
      </PrimeReactProvider> 
    </>
  )
}

export default Home