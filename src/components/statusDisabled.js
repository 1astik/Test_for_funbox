import React from 'react';

function StatusDisabled( {food}) {
    return (


            <div className="text-white d-flex justify-content-center pt-3">
                <div className="pr-1">
                    <span>Печалька, c {food.item} </span>
                </div>
                <div>
                    <span>закончился</span>
                </div>
            </div>

    );
}

export default StatusDisabled;
