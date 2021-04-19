import React from 'react'

import '../common/reset.css'
import '../style.css'
import Header from './Header/Header'
import Main from './Main/Main'
import BlogList from './Blog/BlogList'
import Form from './Form/Form'
import Footer from './Footer/Footer'
import ReactSlickDemo from './Slider/Slider'
import BlogNews from './BlogNews/BlogNews'
import { Route } from 'react-router-dom'




const App = () => {
    return (
       <>
        <Header/>
        <Main/>
        <Route path="/blogs/:id" component={BlogNews}/>
        <BlogList/>
        <ReactSlickDemo/>
        <Form/>
        <Footer/>
        
       </>
    )
}
export default App
