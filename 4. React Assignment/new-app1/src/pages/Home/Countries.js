import React from 'react'
import index from '.';
import { ButtonSimple } from '../../components/Button/ButtonSimple';

import { countries } from '../../data/countries';

export default function Countries() {

    // console.log(countries)
    return (
        <div className='py-5 bg-secondary fruits'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>This is our Countries Section</h1>
                        <ul>
                            {countries.map((country, index) => {
                                return <li key={index}>{index + 1} {country}</li>
                            })}

                            {/* text not passed to the props */}
                            <ButtonSimple bgColor="success" icon="trash" /><br />

                            <div className="my-2">
                                <ButtonSimple bgColor="dark" icon="bell" text="New btn" />
                            </div>

                            <ButtonSimple bgColor="danger" icon="bell" text="New btn" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
