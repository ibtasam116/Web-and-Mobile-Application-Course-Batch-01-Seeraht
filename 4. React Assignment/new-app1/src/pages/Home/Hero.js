import React from 'react'

export default function Hero() {

    const sayMyName = function(param) {
        return "My name is " + param;
    }
    
    const sayMyName1 = (param) => {
        return "My name is " + param;
    }
    
    const sayMyName2 = param => "My name is " + param;

    return (
        <div className='py-5 bg-light'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>This is our Hero Section</h1>
                        <p className='text-center fw-bold'>{sayMyName("IbTaSaM")}</p>
                        <p className='text-center fw-bold'>{sayMyName1("Umair")}</p>
                        <p className='text-center fw-bold'>{sayMyName2("JUTT")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
