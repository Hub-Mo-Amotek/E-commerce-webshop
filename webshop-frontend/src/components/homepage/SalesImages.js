import React from 'react'

const SalesImages = () => {
  return (
    <div className='SalesImages'>
      <section>
        <div className="max-w-screen-xl px-4 my-8 mx-auto grid grid-flow-col auto-cols-max justify-items-start gap-6">
          <div className='mx-3'><img
            loading="lazy"
            alt="Build Your Own Drone"
            className="object-contain w-full h-64"
            src="./assets/images/homepage/preorder.jpg" height="275px"
          /></div>
          <div className='mx-3'><img
            loading="lazy"
            alt="Build Your Own Drone"
            className="object-contain w-full h-64"
            src="./assets/images/homepage/preorder2.jpg"
          /></div>
          
        </div>
      </section>
    </div>
  )
}

export default SalesImages