import React from 'react'

function QrModal() {
  return (
    <div className='qr-container'>
      <img className='qr-image' src='/image-qr-code.png' alt='QR Code' />
      <div className="text-container">
        <h1>
          Improve your front-end skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default QrModal