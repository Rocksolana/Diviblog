import React from 'react'
import '../common/reset.css'
import '../style.css'
import Header from './Header/Header'
import Main from './Main/Main'
import BlogList from './Blog/BlogList'
import Form from './Form/Form'
import Footer from './Footer/Footer'
import ReactSlickDemo from './Slider/Slider'





const App = () => {
    return (
       <>
        <Header/>
        <Main/>
        <BlogList/>
        <ReactSlickDemo/>
        <Form/>
        <Footer/>
        
       </>
    )
}
export default App
