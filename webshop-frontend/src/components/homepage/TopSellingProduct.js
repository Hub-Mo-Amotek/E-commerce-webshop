import React, {useState} from 'react'

const TopSellingProduct = () => {
  //TODO: remove addToCart-function + import the functionality.

  const productsList = [
    {
      id: 111,
      imageAlt: 'Pikachu',
      imageSrc: './assets/images/gokupng.png',
      name: 'pikachu',
      price: 1,
      quantity: 1,
    },
    {
      id: 211,
      imageAlt: 'Lala',
      imageSrc: './assets/images/gokupng.png',
      name: 'lala',
      price: 2,
      quantity: 1,
    },
    {
      id: 311,
      imageAlt: 'Po',
      imageSrc: './assets/images/gokupng.png',
      name: 'Po',
      price: 3,
      quantity: 1,
    },
    {
      id: 411,
      imageAlt: 'Dipsy',
      imageSrc: './assets/images/gokupng.png',
      name: 'Dipsy',
      price: 4,
      quantity: 1,
    }
  ];

  let [products, setProducts] = useState(productsList);

  function addToCart(id) {
    //TODO: remove this function.
  }

  return (
    <div className='TopSellingProduct'>
         {/* start of related products section */}
  <section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto">
     <h2 className="relative inline-block text-2xl font-bold text-left bg-white">
        Top Selling Products
      </h2>

    <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
      {products.map(product => (
          <li key={product.id} style={{listStyleType: 'none'}}>
            {/*LINK TO DETAIL-PAGE: PRODUCT IMAGE + NAME + PRICE*/}
            <a href="/product-detail" className="relative block border border-gray-100">
              {/*WISH-LIST*/}
              {/*<button type="button" name="wishlist" className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>*/}
              {/*END WISH-LIST*/}
              <img
                  loading="lazy" alt={product.imageAlt}
                  className="object-contain w-full h-60 pt-3" src={product.imageSrc}/>
              {/*NAME + PRICE + ADD TO CART*/}
              <div className="p-4">
                {/*NAME + PRICE*/}
                <div className='h-24'>
                  {/*NAME*/}
                  <h5 className="mt-1 text-lg font-bold">
                    {product.name}
                  </h5>
                  {/*PRICE*/}
                  <h5 className="mt-1 text-lg font-bold">
                    €{product.price.toFixed(2)}
                  </h5>
                </div>
              </div>
            </a>
            {/*END LINK TO DETAIL-PAGE: END PRODUCT IMAGE + NAME + PRICE*/}

            {/*BUTTON ADD TO CART*/}
            <button type="submit" className="add-to-cart flex items-center justify-center
                                            w-full px-8 py-4 mt-4 rounded-sm bg-yellow-500" onClick={() => addToCart(product.id)}>
              <span className="text-sm font-medium">
                                    Add to Cart
                                    </span>
              <svg
                  className="w-5 h-5 ml-1.5"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </button>
            {/*END BUTTON ADD TO CART*/}
          </li>
      ))}
    </div>
  </div>
</section>
{/* end of related products section */}
    </div>
  )
}

export default TopSellingProduct