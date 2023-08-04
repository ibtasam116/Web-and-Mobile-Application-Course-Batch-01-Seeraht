import React, { useState } from 'react'

export default function Login() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [count, setCount] = useState(0)


    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("UserName =>", userName)

        if (password.length < 6) {
            alert("Minimum lenght should be 6");
            return;
        }
        console.log("Password    =>", password)

        // console.log("Handler gohfhd")
    }


    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-2 p-md-3 p-lg-4">
                            <h2 className="text-center text-dark mb-4">Login Form</h2>
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="text" placeholder="Enter Your Username." className='form-control' onChange={(e) => { setUserName(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="password" placeholder="Enter Your Password." className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    {/* <h6 className='my-2 ms-1 cursor-pointer'>Forgot Password.</h6> */}
                                </div>
                            </form>
                            <div className="row mb-3">
                                <div className="col text-center">
                                    <button className='btn btn-success w-100' onClick={handleSubmit}>Login</button>
                                </div>
                                <div className="col text-center">
                                    <button className='btn btn-success w-100'>Forgot Password</button>
                                </div>
                            </div>
                            <h5>UserName: {userName}</h5>
                            <h5>Password: {password}</h5>
                            <h5>Count: {count}</h5>
                            <div className="row mb-3">
                                <div className="col text-center">
                                    <button className='btn btn-success w-100' onClick={handleIncrement}>Increment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
