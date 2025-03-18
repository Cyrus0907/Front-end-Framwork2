import React from 'react'
import Footer from '../components/Footer'

import Header from '../components/Header'
import ProductList from '../components/ProductList'
//import ProductList from '../components/ProductList'

function Home() {
    return (
        <div className='container'>
            <Header />
            
            <ProductList />
            <Footer />
        </div>
    )
}

export default Home