import Image from 'next/image'
import React from 'react'

export default function BottomProducts() {
  return (
    <div className='bottom-section'>
    <div className='bottom-product'>
      <div className='left-item'>
          <Image
            src='https://picsum.photos/200/300'
            alt='product'
            width="200"
            height="300"
          />
        <div>
          <p>Product price</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ad tempora magni quae id natus. Expedita, reiciendis dolorum! Nostrum, est corrupti eveniet praesentium molestiae nulla provident nemo a pariatur tempora.</p>
        </div>
      </div>
        <button>Buy</button>
    </div>
    <div className='middleLine'></div>
    <div className='bottom-product'>
      <div className='left-item'>
          <Image
            src='https://picsum.photos/200/300'
            alt='product'
            width="200"
            height="300"
          />
        <div>
          <p>Product price</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ad tempora magni quae id natus. Expedita, reiciendis dolorum! Nostrum, est corrupti eveniet praesentium molestiae nulla provident nemo a pariatur tempora.</p>
        </div>
      </div>
        <button>Buy</button>
    </div>
  </div>
  )
}
