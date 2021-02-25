import React from 'react';
import Fridge from '../components/Fridge/Fridge';

const ViewFridge = () => {
    const data = [
        {
            name: "Atlanta Fridge",

        }
    ]
    let colSize;
    if (12 % data.length == 0 && 12 > data.length) {
        console.log("fisrt statment");
        colSize = 12 / data.length;
        console.log(colSize)

    } else {
        console.log("second statment")
        colSize = 6;
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h3 className="center-align">Welcome to Community Fridges</h3>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h4 className="center-align">View Fridges</h4>
                    </div>
                    {data.map(({ name }) => (<Fridge name={name} colSize={colSize} />))}
                </div>

            </div>
        </div>
    )
}
export default ViewFridge;