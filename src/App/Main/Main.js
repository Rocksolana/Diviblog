import React from 'react'
import {Route} from 'react-router-dom' 
import DesignerImage from './DesignerImage'
import DesignerItem from './DesignerItem'
import BlogList from './Blog/BlogList'
import Form from './Form/Form'
import BlogNews from './BlogNews/BlogNews'

import './main.css'



const Main = ({
    addLikeToCart
}) => {
    return (
    
      <>
     <section className="designers">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-xs-12">
                    <div className="wrapper">
                        <div className="col-sm-5">
                            <DesignerImage/>
                        </div>
                        <div className="col-sm-7">
                            <DesignerItem/>
                        </div>
                        
                        <div className="col-xs-12">
                    <Route path="/" exact render={() => <BlogList/>}/>
                    
                    <Route path="/blogs/:id" component={BlogNews}/>
                    <Route path="/LikePage" exact render={() => <BlogList
                    addLikeToCart={addLikeToCart}
                    /> } />
                    </div>
                    </div>
                    <Route path="/" exact render={() => <Form/>}/>
                </div>
            </div>
        </div>
    </section>
       
 </>

    )
}

export default Main