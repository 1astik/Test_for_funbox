import React from 'react';
import './main.css'
import Item from "./item";

function Main(props) {
    return (
        <div className="container text-center">
            <h1 className="text-white pt-5">Ты сегодня покормил кота?</h1>

            <div className="row justify-content-center mt-4">
                {props.food.map(item => {
                    return <Item food={item} key={item.id} foodSelect={props.foodToggle} hoverItem={props.hover} unHoverItem={props.unHover}/>
                })}
            </div>
        </div>
    );
}

export default Main;
