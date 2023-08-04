import React from 'react'

export default function Events() {

    const handleSubmit = () => {
        event.preventDefault();
        alert("Hello World")
    }


    return (
        <div className='py-5 bg-secondary fruits'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center'>This is our Events Section</h1>
                    </div>
                    <div className="col-4 offset-4 text-center">
                        <form>
                            <input type="text" placeholder='Enter Your Text.' className="form-control" />
                            <button className="button btn btn-success mt-2" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <p style={{ color: "white", textAlign: "center" }}>I'm a Paragraph.</p>
                </div>
            </div>
        </div>
    )
}
