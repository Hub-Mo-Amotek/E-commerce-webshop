import React from 'react'

const ProductsPage = () => {
    return (

        <div className="grid grid-cols-4 gap-4">

            {/*Product Card*/}
            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                    {/*Preview*/}
                    <div className="inline relative group h-48">
                        {/*Thumbnail*/}
                        <img className="absolute rounded-t object-cover h-full w-full"
                             src="./assets/images/luffy.jpg"
                             alt="Product Preview" />

                        {/*Hover Bar*/}
                        <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                            {/*Add to Bookmarks Button*/}
                            <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                                <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                                   title="Add to Bookmarks"></i>
                            </button>

                            {/*Add to Favorites Button */}
                            <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                                <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                                   title="Add to Favorites"></i>
                            </button>
                        </div>
                    </div>

                    {/*Body*/}
                    <div className="flex flex-col bg-white rounded-b p-3">
                        {/*Title*/}
                        <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                            Monkey D. Luffy
                        </div>

                        {/*Author - Category*/}
                        <div className="text-xxs text-gray-400 truncate mt-1">
                            by

                            {/*Author*/}
                            <a className="font-semibold hover:underline"> Username </a>

                            in
                            {/*Category*/}
                            <a className="font-semibold hover:underline"> Figurines </a>
                        </div>

                        {/*Price*/}
                        <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                            $23
                        </div>

                        {/*Body*/}
                        <div className="flex flex-row mt-2">
                            {/*Detail Column*/}
                            <div className="flex flex-col flex-auto">
                                {/*Rating*/}
                                <div className="flex flex-row group">
                                    <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                       title="Worst"></i>

                                    <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                       title="Bad"></i>

                                    <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                       title="Not Bad"></i>

                                    <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                       title="Good"></i>

                                    <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                       title="Awesome"></i>

                                    {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                    {/*    (45)*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            {/*Button Column*/}
                            <div className="flex flex-row flex-auto justify-end">
                                {/*Cart Button*/}
                                <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                    {/*Icon*/}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </a>

                                {/*Preview Link Button*/}
                                <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                    {/*Icon*/}
                                    <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                    {/*Text*/}
                                    <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                        Product details
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                {/*Preview*/}
                <div className="inline relative group h-48">
                    {/*Thumbnail*/}
                    <img className="absolute rounded-t object-cover h-full w-full"
                         src="./assets/images/luffy.jpg"
                         alt="Product Preview" />

                    {/*Hover Bar*/}
                    <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                        {/*Add to Bookmarks Button*/}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                               title="Add to Bookmarks"></i>
                        </button>

                        {/*Add to Favorites Button */}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                               title="Add to Favorites"></i>
                        </button>
                    </div>
                </div>

                {/*Body*/}
                <div className="flex flex-col bg-white rounded-b p-3">
                    {/*Title*/}
                    <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                        Monkey D. Luffy
                    </div>

                    {/*Author - Category*/}
                    <div className="text-xxs text-gray-400 truncate mt-1">
                        by

                        {/*Author*/}
                        <a className="font-semibold hover:underline"> Username </a>

                        in
                        {/*Category*/}
                        <a className="font-semibold hover:underline"> Figurines </a>
                    </div>

                    {/*Price*/}
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                        $23
                    </div>

                    {/*Body*/}
                    <div className="flex flex-row mt-2">
                        {/*Detail Column*/}
                        <div className="flex flex-col flex-auto">
                            {/*Rating*/}
                            <div className="flex flex-row group">
                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Worst"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Not Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Good"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Awesome"></i>

                                {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                {/*    (45)*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/*Button Column*/}
                        <div className="flex flex-row flex-auto justify-end">
                            {/*Cart Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>

                            {/*Preview Link Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                {/*Text*/}
                                <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                    Product details
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                {/*Preview*/}
                <div className="inline relative group h-48">
                    {/*Thumbnail*/}
                    <img className="absolute rounded-t object-cover h-full w-full"
                         src="./assets/images/luffy.jpg"
                         alt="Product Preview" />

                    {/*Hover Bar*/}
                    <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                        {/*Add to Bookmarks Button*/}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                               title="Add to Bookmarks"></i>
                        </button>

                        {/*Add to Favorites Button */}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                               title="Add to Favorites"></i>
                        </button>
                    </div>
                </div>

                {/*Body*/}
                <div className="flex flex-col bg-white rounded-b p-3">
                    {/*Title*/}
                    <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                        Monkey D. Luffy
                    </div>

                    {/*Author - Category*/}
                    <div className="text-xxs text-gray-400 truncate mt-1">
                        by

                        {/*Author*/}
                        <a className="font-semibold hover:underline"> Username </a>

                        in
                        {/*Category*/}
                        <a className="font-semibold hover:underline"> Figurines </a>
                    </div>

                    {/*Price*/}
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                        $23
                    </div>

                    {/*Body*/}
                    <div className="flex flex-row mt-2">
                        {/*Detail Column*/}
                        <div className="flex flex-col flex-auto">
                            {/*Rating*/}
                            <div className="flex flex-row group">
                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Worst"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Not Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Good"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Awesome"></i>

                                {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                {/*    (45)*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/*Button Column*/}
                        <div className="flex flex-row flex-auto justify-end">
                            {/*Cart Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>

                            {/*Preview Link Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                {/*Text*/}
                                <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                    Product details
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                {/*Preview*/}
                <div className="inline relative group h-48">
                    {/*Thumbnail*/}
                    <img className="absolute rounded-t object-cover h-full w-full"
                         src="./assets/images/luffy.jpg"
                         alt="Product Preview" />

                    {/*Hover Bar*/}
                    <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                        {/*Add to Bookmarks Button*/}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                               title="Add to Bookmarks"></i>
                        </button>

                        {/*Add to Favorites Button */}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                               title="Add to Favorites"></i>
                        </button>
                    </div>
                </div>

                {/*Body*/}
                <div className="flex flex-col bg-white rounded-b p-3">
                    {/*Title*/}
                    <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                        Monkey D. Luffy
                    </div>

                    {/*Author - Category*/}
                    <div className="text-xxs text-gray-400 truncate mt-1">
                        by

                        {/*Author*/}
                        <a className="font-semibold hover:underline"> Username </a>

                        in
                        {/*Category*/}
                        <a className="font-semibold hover:underline"> Figurines </a>
                    </div>

                    {/*Price*/}
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                        $23
                    </div>

                    {/*Body*/}
                    <div className="flex flex-row mt-2">
                        {/*Detail Column*/}
                        <div className="flex flex-col flex-auto">
                            {/*Rating*/}
                            <div className="flex flex-row group">
                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Worst"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Not Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Good"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Awesome"></i>

                                {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                {/*    (45)*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/*Button Column*/}
                        <div className="flex flex-row flex-auto justify-end">
                            {/*Cart Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>

                            {/*Preview Link Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                {/*Text*/}
                                <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                    Product details
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                {/*Preview*/}
                <div className="inline relative group h-48">
                    {/*Thumbnail*/}
                    <img className="absolute rounded-t object-cover h-full w-full"
                         src="./assets/images/luffy.jpg"
                         alt="Product Preview" />

                    {/*Hover Bar*/}
                    <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                        {/*Add to Bookmarks Button*/}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                               title="Add to Bookmarks"></i>
                        </button>

                        {/*Add to Favorites Button */}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                               title="Add to Favorites"></i>
                        </button>
                    </div>
                </div>

                {/*Body*/}
                <div className="flex flex-col bg-white rounded-b p-3">
                    {/*Title*/}
                    <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                        Monkey D. Luffy
                    </div>

                    {/*Author - Category*/}
                    <div className="text-xxs text-gray-400 truncate mt-1">
                        by

                        {/*Author*/}
                        <a className="font-semibold hover:underline"> Username </a>

                        in
                        {/*Category*/}
                        <a className="font-semibold hover:underline"> Figurines </a>
                    </div>

                    {/*Price*/}
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                        $23
                    </div>

                    {/*Body*/}
                    <div className="flex flex-row mt-2">
                        {/*Detail Column*/}
                        <div className="flex flex-col flex-auto">
                            {/*Rating*/}
                            <div className="flex flex-row group">
                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Worst"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Not Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Good"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Awesome"></i>

                                {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                {/*    (45)*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/*Button Column*/}
                        <div className="flex flex-row flex-auto justify-end">
                            {/*Cart Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>

                            {/*Preview Link Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                {/*Text*/}
                                <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                    Product details
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                {/*Preview*/}
                <div className="inline relative group h-48">
                    {/*Thumbnail*/}
                    <img className="absolute rounded-t object-cover h-full w-full"
                         src="./assets/images/luffy.jpg"
                         alt="Product Preview" />

                    {/*Hover Bar*/}
                    <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                        {/*Add to Bookmarks Button*/}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                               title="Add to Bookmarks"></i>
                        </button>

                        {/*Add to Favorites Button */}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                               title="Add to Favorites"></i>
                        </button>
                    </div>
                </div>

                {/*Body*/}
                <div className="flex flex-col bg-white rounded-b p-3">
                    {/*Title*/}
                    <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                        Monkey D. Luffy
                    </div>

                    {/*Author - Category*/}
                    <div className="text-xxs text-gray-400 truncate mt-1">
                        by

                        {/*Author*/}
                        <a className="font-semibold hover:underline"> Username </a>

                        in
                        {/*Category*/}
                        <a className="font-semibold hover:underline"> Figurines </a>
                    </div>

                    {/*Price*/}
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                        $23
                    </div>

                    {/*Body*/}
                    <div className="flex flex-row mt-2">
                        {/*Detail Column*/}
                        <div className="flex flex-col flex-auto">
                            {/*Rating*/}
                            <div className="flex flex-row group">
                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Worst"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Not Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Good"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Awesome"></i>

                                {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                {/*    (45)*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/*Button Column*/}
                        <div className="flex flex-row flex-auto justify-end">
                            {/*Cart Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>

                            {/*Preview Link Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                {/*Text*/}
                                <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                    Product details
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                {/*Preview*/}
                <div className="inline relative group h-48">
                    {/*Thumbnail*/}
                    <img className="absolute rounded-t object-cover h-full w-full"
                         src="./assets/images/luffy.jpg"
                         alt="Product Preview" />

                    {/*Hover Bar*/}
                    <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                        {/*Add to Bookmarks Button*/}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                               title="Add to Bookmarks"></i>
                        </button>

                        {/*Add to Favorites Button */}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                               title="Add to Favorites"></i>
                        </button>
                    </div>
                </div>

                {/*Body*/}
                <div className="flex flex-col bg-white rounded-b p-3">
                    {/*Title*/}
                    <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                        Monkey D. Luffy
                    </div>

                    {/*Author - Category*/}
                    <div className="text-xxs text-gray-400 truncate mt-1">
                        by

                        {/*Author*/}
                        <a className="font-semibold hover:underline"> Username </a>

                        in
                        {/*Category*/}
                        <a className="font-semibold hover:underline"> Figurines </a>
                    </div>

                    {/*Price*/}
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                        $23
                    </div>

                    {/*Body*/}
                    <div className="flex flex-row mt-2">
                        {/*Detail Column*/}
                        <div className="flex flex-col flex-auto">
                            {/*Rating*/}
                            <div className="flex flex-row group">
                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Worst"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Not Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Good"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Awesome"></i>

                                {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                {/*    (45)*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/*Button Column*/}
                        <div className="flex flex-row flex-auto justify-end">
                            {/*Cart Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>

                            {/*Preview Link Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                {/*Text*/}
                                <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                    Product details
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
                {/*Preview*/}
                <div className="inline relative group h-48">
                    {/*Thumbnail*/}
                    <img className="absolute rounded-t object-cover h-full w-full"
                         src="./assets/images/luffy.jpg"
                         alt="Product Preview" />

                    {/*Hover Bar*/}
                    <div className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent
                    transition-all ease-in-out duration-200 delay-100">

                        {/*Add to Bookmarks Button*/}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                               title="Add to Bookmarks"></i>
                        </button>

                        {/*Add to Favorites Button */}
                        <button className="bg-gray-50/10 rounded-full
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                            <i className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                               title="Add to Favorites"></i>
                        </button>
                    </div>
                </div>

                {/*Body*/}
                <div className="flex flex-col bg-white rounded-b p-3">
                    {/*Title*/}
                    <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                        Monkey D. Luffy
                    </div>

                    {/*Author - Category*/}
                    <div className="text-xxs text-gray-400 truncate mt-1">
                        by

                        {/*Author*/}
                        <a className="font-semibold hover:underline"> Username </a>

                        in
                        {/*Category*/}
                        <a className="font-semibold hover:underline"> Figurines </a>
                    </div>

                    {/*Price*/}
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                        $23
                    </div>

                    {/*Body*/}
                    <div className="flex flex-row mt-2">
                        {/*Detail Column*/}
                        <div className="flex flex-col flex-auto">
                            {/*Rating*/}
                            <div className="flex flex-row group">
                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Worst"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Not Bad"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Good"></i>

                                <i className="mdi mdi-star text-xs text-amber-400
                            hover:text-amber-500 transition-all duration-200"
                                   title="Awesome"></i>

                                {/*<div className="text-xxs text-gray-400 ml-1 hover:underline">*/}
                                {/*    (45)*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/*Button Column*/}
                        <div className="flex flex-row flex-auto justify-end">
                            {/*Cart Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>

                            {/*Preview Link Button*/}
                            <a className="flex text-xs border px-3 my-auto py-2
                        border-amber-500 group hover:bg-amber-500
                        rounded-xss
                        transition-all duration-200">

                                {/*Icon*/}
                                <i className="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                                {/*Text*/}
                                <div className="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                                    Product details
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ProductsPage