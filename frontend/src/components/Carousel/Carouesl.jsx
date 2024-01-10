import React, { useRef, useState } from 'react'
import './carousel.css'
import Mycard from '../Card/Card';
import image1 from '../../assets/5.png'
import image2 from '../../assets/6.png'
import image3 from '../../assets/7.png'
import image4 from '../../assets/8.png'
import image5 from '../../assets/9.png'
import image6 from '../../assets/10.png'

const datas = [
    {
        id: 1,
        img: image1,
        title: "Grilled  Tomatoes at Home",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut accusamus dicta architecto explicabo reiciendis rerum, sed officia adipisci et.'
    },
    {
        id: 2,
        img: image2,
        title: "Snacks for Travel",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut accusamus dicta architecto explicabo reiciendis rerum, sed officia adipisci et.'
    },
    {
        id: 3,
        img: image3,
        title: "Post-workout Recipes",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut accusamus dicta architecto explicabo reiciendis rerum, sed officia adipisci et.'
    },
    {
        id: 4,
        img:image4,
        title: "How To Grill Corn",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut accusamus dicta architecto explicabo reiciendis rerum, sed officia adipisci et.'
    },
    {
        id: 5,
        img: image5,
        title: "Crunchwrap Supreme",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut accusamus dicta architecto explicabo reiciendis rerum, sed officia adipisci et.'
    },
    {
        id: 6,
        img: image6,
        title: "Broccoli Cheese Soup",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut accusamus dicta architecto explicabo reiciendis rerum, sed officia adipisci et.'
    },
];

const Carouesl = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = screen.width;
        box.scrollLeft = box.scrollLeft - width;
    }

    const btnpressnext = () => {
        let width = screen.width;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className="product-carousel">
            <h1 className='product-title'>Latest Articles</h1>
            <div className="product-container">
                {datas.map((item) => {
                    return (
                        <Mycard key={item.id} title={item.title} img={item.img} desc={item.desc} />
                    )
                })}
            </div>

            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

        </div>
    )
}

export default Carouesl


