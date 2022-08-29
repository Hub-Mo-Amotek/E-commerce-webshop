import React, {useEffect}from 'react'
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
    let navigate = useNavigate();


    useEffect(()=>{
        let auth = localStorage.getItem('id');

        if(auth === null){
          navigate('/Login');
        }
}, [navigate]);

  return (
    <div>
        
        <section>
  <div class="grid grid-cols-1 gap-12 lg:gap-24 lg:grid-cols-2">

    <div class="sm:flex lg:items-start group">
      <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img class="w-full rounded-md sm:h-32 sm:w-32 object-cover" src="/assets/images/placeholders/neon-1.jpg" alt="text"/>
      </div>
      <div>
        <span class="text-sm text-gray-500">August 20.20.21</span>
        <p class="mt-3 text-lg font-medium leading-6">
          <a href="./blog-post.html" class="text-xl text-gray-800 hover:text-gray-500">B2B Branding: 5 tips to go from boring to extraordinary </a>
        </p>
        <p class="mt-2 text leading-normal text-gray-500">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </div>
    </div>

    <div class="sm:flex lg:items-start group">
      <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img class="w-full rounded-md sm:h-32 sm:w-32 object-cover" src="/assets/images/placeholders/neon-2.jpg" alt="text"/>
      </div>
      <div>
        <span class="text-sm text-gray-500">August 20.20.21</span>
        <p class="mt-3 text-lg font-medium leading-6">
          <a href="./blog-post.html" class="text-xl text-gray-800 hover:text-gray-500">Building a Career in Character Design: A chat with Sarah Beth Morgan </a>
        </p>
        <p class="mt-2 text leading-normal text-gray-500">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </div>
    </div>

    <div class="sm:flex lg:items-start group">
      <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img class="w-full rounded-md sm:h-32 sm:w-32 object-cover" src="/assets/images/placeholders/neon-3.jpg" alt="text"/>
      </div>
      <div>
        <span class="text-sm text-gray-500">August 20.20.21</span>
        <p class="mt-3 text-lg font-medium leading-6">
          <a href="./blog-post.html" class="text-xl text-gray-800 hover:text-gray-500">12 Graphic Design Skills You Need To Get Hired (&amp; How to Develop Them) </a>
        </p>
        <p class="mt-2 text leading-normal text-gray-500">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </div>
    </div>

    <div class="sm:flex lg:items-start group">
      <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img class="w-full rounded-md sm:h-32 sm:w-32 object-cover" src="/assets/images/placeholders/neon-4.jpg" alt="text"/>
      </div>
      <div>
        <span class="text-sm text-gray-500">August 20.20.21</span>
        <p class="mt-3 text-lg font-medium leading-6">
          <a href="./blog-post.html" class="text-xl text-gray-800 hover:text-gray-500">Meet Now What? The essential new podcast for evolving designers </a>
        </p>
        <p class="mt-2 text leading-normal text-gray-500">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </div>
    </div>

  </div>
</section>

    </div>
  )
}

export default MyAccount