import React from 'react'

import { Footer, Blog, Possibility, GabyBday, Header, Features } from './containers' 
import { CTA, Brand, Navbar } from './components' 



const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />  
      </div>
      <Brand />
      <GabyBday />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
     
    </div>
  )
}

export default App