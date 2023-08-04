import React from 'react'

// let now = new Date();
// let year = now.getFullYear();
// document.getElementById('year').innerHTML = year + ".";

export default function Footer() {
  return (
    <footer className='bg-dark text-light py-2'>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p className="mb-0">&copy;<span id='year'>2022.</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
