import React from 'react'

export default function Footer() {

    const now = new Date();
    const year = now.getFullYear();


    return (
        <footer className="py-1 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="mb-0 text-white text-center">&copy; {year}. All rights reserved.</p>
                        {/* <p className="mb-0">&copy; {(new Date.getFullYear())}. All rights reserved.</p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
