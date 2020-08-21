import React from 'react';
import './App.css';
import Main from "../src/components/main"




function App() {
    const [food, setFood] = React.useState([
        {
            id: 1,
            item: 'фуа-гра',
            title: '10 порций мышь',
            size: '0.5',
            status: 'active',
            selected: 'Печень утки разварная с артишоками.'
        },
        {
            id: 2,
            item: 'рыбой',
            title: '40 порций 2 мыши',
            size: '2',
            status: 'active',
            selected: 'Головы щучьи с чесноком да свежайшая семгушка.'
        },
        {
            id: 3,
            item: 'курой',
            title: '100 порций 5 мышей',
            size: '5',
            status: 'disabled',
            selected: 'Филе из циплят с трюфелями в бульоне.'
        },
    ]);

    const [hoverDefault, setHoverDefault] = React.useState(['main']);

    function activeToggle(id){
        setFood(
            food.map(item => {
            if ( item.id === id ) {
                if ( item.status === 'active' ) {
                    item.status = 'selected'
                } else if ( item.status === 'selected' ) {
                    item.status = 'active'
                }
            }
            return item
        })
        )
    }

    function hoverItem(status) {
        if ( status === 'active' ) {
            setHoverDefault('active-hover')
        } else{
            setHoverDefault('disabled-hover')
        }
    }

    function unHoverItem() {
        setHoverDefault('main')
    }

  return (
      <div className="wrapper">
            <div className={hoverDefault}>
                <Main food={food} foodToggle={activeToggle} hover={hoverItem} unHover={unHoverItem}/>
            </div>
      </div>
  );
}

export default App;
