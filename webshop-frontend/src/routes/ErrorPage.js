import React from 'react'

const ErrorPage = () => {
  return (
    <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="404" src="./assets/images/gokupng-1.png"/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">OOOPS!</h1>
      <p className="mb-8 leading-relaxed">the page you are looking for doesnt exist.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default ErrorPage