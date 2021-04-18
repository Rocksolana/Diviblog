import React from 'react'
import DesignerImage from './DesignerImage'
import DesignerItem from './DesignerItem'
import './main.css'
import BlogNews from '../Blog/BlogNews/BlogNews'



const Main = () => {
    return (
        <>
     <section className="designers">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="wrapper">
                        <div className="col-sm-4">
                            <DesignerImage/>
                        </div>
                        <div className="col-sm-8">
                            <DesignerItem/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="our_mission">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="designer_item">
                        <div className="take_title">
                            THE BEST SELLERS
                        </div>
                        <div className="red_big_title">
                            Our Latest Feminine Divi Themes & Divi Coaching Themes
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Main