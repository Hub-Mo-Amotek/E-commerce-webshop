import React from 'react'

const TopSellingProduct = () => {
  return (
    <div className='TopSellingProduct'>
         {/* start of related products section */}
  <section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto">
     <h2 className="relative inline-block text-2xl font-bold text-left bg-white">
        Top Selling Products
      </h2>

    <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
      <a
        href="/product-detail"
        className="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          className="object-contain w-full h-60 pt-3"
          src="./assets/images/homepage/Pokemon-Pikachu-Electric-Charge-Plush.jpg"
        />
        <div className="p-4">
          <div className='h-24'>
        <h5 className="mt-1 text-lg font-bold">
            Pokemon Pikachu Electric Charge Plush
        </h5>
        <h5 className="mt-1 text-lg font-bold">
          €39.00
          </h5>
          </div>
          <button
            name="add"
            type="button" 
            className="add-to-cart flex items-center justify-center w-full px-8 py-4 mt-4 rounded-sm bg-yellow-500">
            <span className="text-sm font-medium">
              Add to Cart
            </span>
            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
        
      </a>

      <a
        href="/product-detail"
        className="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          className="object-contain w-full h-60 pt-3"
          src="./assets/images/homepage/Pokemon-T-Shirt.jpg"
        />
      <div className="p-4">
          <div className='h-24'>
        <h5 className="mt-1 text-lg font-bold">
            Pokemon T-Shirt
        </h5>
        <h5 className="mt-1 text-lg font-bold">
          €15.00
          </h5>
          </div>
          <button
            name="add"
            type="button" 
            className="add-to-cart flex items-center justify-center w-full px-8 py-4 mt-4 rounded-sm bg-yellow-500">
            <span className="text-sm font-medium">
              Add to Cart
            </span>
            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </a>

      <a
        href="/product-detail"
        className="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4 "
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          className="object-contain w-full h-60 pt-3"
          src="./assets/images/homepage/Pokemon-Tag-Team-Tin-TCG2.jpg"
        />

        <div className="p-4">
          <div className='h-24'>
        <h5 className="mt-1 text-lg font-bold">
            Pokemon Tag Team Tin
        </h5>
        <h5 className="mt-1 text-lg font-bold">
          €39.00
          </h5>
          </div>
          <button
            name="add"
            type="button" 
            className="add-to-cart flex items-center justify-center w-full px-8 py-4 mt-4 rounded-sm bg-yellow-500">
            <span className="text-sm font-medium">
              Add to Cart
            </span>

            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </a>

      <a
        href="/product-detail"
        className="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          className="object-contain w-full h-60 pt-3"
          src="./assets/images/homepage/Pokemon-Pikachu-Backpack-Set.jpg"
        />

        <div className="p-4">
          <div className='h-24'>
        <h5 className="mt-1 text-lg font-bold">
            Pokemon Pikachu Backpack Set
        </h5>
        <h5 className="mt-1 text-lg font-bold">
          €35.00
          </h5>
          </div>
          <button
            name="add"
            type="button" 
            className="add-to-cart flex items-center justify-center w-full px-8 py-4 mt-4 rounded-sm bg-yellow-500">
            <span className="text-sm font-medium">
              Add to Cart
            </span>

            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </a>
    </div>
  </div>
</section>
{/* end of related products section */}

    </div>
  )
}

export default TopSellingProduct