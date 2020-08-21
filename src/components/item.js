import React from 'react';
import PropTypes from 'prop-types'
import StatusActive from './statusActive'
import StatusDisabled from './statusDisabled'
import StatusSelected from './statusSelected'
import cat from '../images/Photo.png'




 function statusItem(food, foodSelect) {
    if ( food.status === 'active' ) {
        return <StatusActive food={food} buy={foodSelect}/>
    } else if ( food.status === 'disabled' ) {
        return <StatusDisabled food={food}/>
    } else if ( food.status === 'selected' ) {
        return <StatusSelected food={food}/>
    }
}


 function Item( { food, foodSelect, hoverItem, unHoverItem } ) {
    const [title, setTitle] =  React.useState('Сказачное заморское яство');
    const classes = [];
    const padding = [];
    const classesCard = [];
    const [cardTitle, setcardTitle] = React.useState(['']);




     function enterMouseStatus(food) {
        if ( food.status === 'active' || food.status === 'disabled') {
             hoverItem(food.status)
        } else if ( food.status === 'selected' ) {
             setTitle( 'Котэ не одобряет?');
             setcardTitle('red-cat');
        }
    }

     function leaveMouseStatus(food) {
             unHoverItem();
             setTitle( 'Сказачное заморское яство')
             setcardTitle('');
    }
    
    if ( food.status === 'selected' ) {
         classes.push('selected');
    } else if ( food.status === 'disabled' ) {
         classes.push('disabled');
         classesCard.push('disabled-card');
    }

    if ( food.id === 3 ) {
        padding.push('pr-lg-0')
    }
    
    return (
        <div className={`col-sm-8 col-lg-4 mb-3 all-card ${padding}`} >
            <div className={`my-border ${classes}`}>
            <div className={`my-card pt-3 ${classesCard}`} onClick={() =>foodSelect(food.id)} onMouseEnter={() => enterMouseStatus(food)} onMouseLeave={() => {leaveMouseStatus(food)}}>
                <div className="text-left pl-4">
                <h6 className={`${cardTitle}`}>{title}</h6>
                <h1 className="mb-0">Нямушка</h1>
                <h4 className="mt-0 mb-3">с { food.item }</h4>
                <h6>{ food.title } в подарок</h6>
                </div>
                <div className="d-flex align-content-end mt-5">

                <img src={cat} alt="cat" className="cat" />

                <div className={`circle ${classes}`}>
                    <h2 className="m-0 mt-2">{food.size} </h2>
                    <h3 className="m-0">кг</h3>
                </div>

                </div>
            </div>
            </div>

            { statusItem(food, foodSelect) }

        </div>
    );
}

Item.propTypes = {
    foodSelect: PropTypes.func,
};

export default Item;
