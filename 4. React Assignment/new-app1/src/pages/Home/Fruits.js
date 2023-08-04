import React from 'react'
import index from '.';
import { ButtonSimple } from '../../components/Button/ButtonSimple';

export default function Fruits() {

    const fruits = ["Apple", "Mango", "Orange", "Banana", "Stawberry", "Peach"]
    // console.log(fruits);

    const user = { firstName: "Muhammad", lastName: "Ibtasam", city: "Faisalabad", country: "Pakistan", age: 20 }

    // Destructuring the object
    const { firstName, lastName, age } = user

    // Spread Operator
    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red',
        owner: "Muhammad Umair"
    }

    const updateMyVehicle = {
        type: 'car',
        year: 2021,
        color: 'yellow'
    }

    const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle, owner: "Muhammad IbTaSaM" }

    // console.log(myUpdatedVehicle); 

    // Ternary Operator
    let cgpa = 2.99
    let cgp = 3

    return (
        <div className='py-5 bg-light fruits'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>This is our Fruits Section</h1>
                        <p>Ternary Operator: {cgpa >= 3 ? "Brilliant" : "Passsed"}</p>
                        {/* if Condition only One  */}
                        <p>Ternary Operator only one condition: {cgp >= 3 && "Brilliant"}</p>
                        <p>User Name is: {user.firstName + " " + user.lastName} {user.city}</p>
                        <p>User Name is: {firstName} {lastName} and age is {age}</p>
                        <div className="text-center">
                            <ul>
                                {
                                    fruits.map((fruit, index) => {
                                        return <li key={index} className='text-success'>{index + 1} {fruit}</li>
                                    })
                                }
                                {/* <li>Apple</li>
                                <li>Mango</li>
                                <li>Orange</li>
                                <li>Banana</li>
                                <li>Stawberry</li> */}
                                <ButtonSimple bgColor="secondary" icon="bell" text="Simple Button" />

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
