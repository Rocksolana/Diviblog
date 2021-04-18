import React from 'react'
import './main.css'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop: '15px'
        }}
    />
)

const Designer_item = () => {
    return (
      
        <div className="designer_item">
         <ColoredLine color="rgb(209, 127, 127)"/>
        <div className="red_small_title">
            YOU DESERVE A BEAUTIFUL, QUALITY WEBSITE…
        </div>
        <div className="red_big_title">
            We Are Designers Of Beautiful, Stylish Websites Built For The Modern Creative.
        </div>
        <div className="text">
            We build stunning feminine Divi Themes & Divi Coaching Child themes for the
            modern entrepreneur who is looking for a Divi website with flair, individuality &
            style.
        </div>
        <ColoredLine color="rgb(209, 127, 127)"/>
        <div className="text_item">
            Are you looking for a feminine, premium WordPress Theme that will take your business
            to
            the next level? You are? Well, we meticulously and carefully craft modern Divi Child
            themes
            for WordPress, so all you have to do is upload your images and text after theme
            installation.
            Launch your website and brand on the internet within hours – custom Divi child
            themes & Divi
            templates designed by professional Divi web designers, for small business owners,
            photographers,
            coaches and bloggers.
        </div>
        <ColoredLine color="rgb(209, 127, 127)"/>
       
    </div>
    )
}
export default Designer_item