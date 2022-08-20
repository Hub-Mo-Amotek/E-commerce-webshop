import React from 'react'

const ProductDetail = () => {
  return (
    <div>
      {/* start of product detail section */}

    <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="Goku" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="./assets/images/il_fullxfull.2873124721_or6d.webp"/>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">Goku</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Son Goku Kakaroth</h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span class="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              <a class="text-gray-500" href="https://facebook.com">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500" href="https://twitter">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              {/* <a class="ml-2 text-gray-500" href="http//:google.com">
              </a> */}
            </span>
          </div>
          <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">€58.00</span>
            <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
{/* end of product detail section */}


{/* start of related products section */}
  <section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto">
    <div class="relative max-w-3xl mx-auto text-center">
      <span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

      <h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-white">
        Related products
      </h2>
    </div>

    <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
      <a
        href="/product-detail"
        class="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          class="object-contain w-full h-56"
          src="./assets/images/gokupng.png"
        />

        <div class="p-6">
          <p class="text-sm font-medium text-gray-600">
          €58.00
          </p>

          <h5 class="mt-1 text-lg font-bold">
          Son Goku
          </h5>

          <button
            name="add"
            type="button"
            class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span class="text-sm font-medium">
              Add to Cart
            </span>

            <svg
              class="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </a>

      <a
        href="/product-detail"
        class="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          class="object-contain w-full h-56"
          src="./assets/images/gokupng.png"
        />

        <div class="p-6">
          <p class="text-sm font-medium text-gray-600">
          €58.00
          </p>

          <h5 class="mt-1 text-lg font-bold">
          Son Goku
          </h5>

          <button
            name="add"
            type="button"
            class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span class="text-sm font-medium">
              Add to Cart
            </span>

            <svg
              class="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </a>

      <a
        href="/product-detail"
        class="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          class="object-contain w-full h-56"
          src="./assets/images/gokupng.png"
        />

        <div class="p-6">
          <p class="text-sm font-medium text-gray-600">
          €58.00
          </p>

          <h5 class="mt-1 text-lg font-bold">
          Son Goku
          </h5>

          <button
            name="add"
            type="button"
            class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span class="text-sm font-medium">
              Add to Cart
            </span>

            <svg
              class="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </a>

      <a
        href="/product-detail"
        class="relative block border border-gray-100"
      >
        <button
          type="button"
          name="wishlist"
          class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          class="object-contain w-full h-56"
          src="./assets/images/gokupng.png"
        />

        <div class="p-6">
          <p class="text-sm font-medium text-gray-600">
            €58.00
          </p>

          <h5 class="mt-1 text-lg font-bold">
            Son Goku
          </h5>

          <button
            name="add"
            type="button"
            class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span class="text-sm font-medium">
              Add to Cart
            </span>

            <svg
              class="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </a>
    </div>

    <div class="mt-4 text-center">
      <button type="button" class="text-xs text-gray-500 underline">a button</button>
    </div>
  </div>
</section>
{/* end of related products section */}
  </div>
  )
}

export default ProductDetail