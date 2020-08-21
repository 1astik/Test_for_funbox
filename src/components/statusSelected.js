import React from 'react';

function StatusSelected( {food}) {
    return (
            <div className="text-white d-flex justify-content-center pt-3">
                <span>{food.selected}</span>
            </div>
    );
}

export default StatusSelected;
