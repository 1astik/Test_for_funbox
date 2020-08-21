import React from 'react';

function StatusActive( {food, buy}) {
    return (


            <div className="text-white d-flex justify-content-center pt-3">
                <div className="pr-1">
                    <span>Чего сидишь? Порадуй котэ, </span>
                </div>
                <div>
                    <span className="buy-link" onClick={() => {buy(food.id)}}>купи</span>
                </div>
            </div>

    );
}

export default StatusActive;
