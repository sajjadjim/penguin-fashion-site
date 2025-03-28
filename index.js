document.getElementById('nav_bar').innerHTML=`
<nav class="lg:flex  lg:items-center justify-between lg:ml-37 lg:mr-44  m-3 items-center ml-13 ">
            <h1><img class="h-15 w-82 " src="icons/logo.png" alt=""></h1>
            <ul class="flex list-none gap-8 roboto font-bold lg:text-2xl mt-1.5 cursor-pointer">
                <li>Home</li>
                <li>Product</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </nav>
        <div class=" lg:ml-37 lg:mr-44 lg:flex lg:pb-40 mx-3 mt-10 pb-14">
            <div>
                <h1 class="text-8xl lg:mt-25 bebas-neue"><span class="text-[#FABE4C]">Be the Penguins</span>
                <br>
            <span class="text-[#363958]">of Winter</span></h1>
                <p class="text-[#3E3E3E] lg:mt-2 text-xl lg:mr-80 roboto">Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.</p>
                <button class="px-8 py-4 bg-linear-to-r from-[#A4BC46] to-[#85A019] rounded-lg flex gap-0.5 mt-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
<p class="text-[#FFFFFF] font-semibold">Buy NOW</p></button>
            </div>
            <div class="m-8 lg:mt-10"><img  src="images/model.png" alt=""></div>
        </div>
`

document.getElementById('woman_jacket').innerHTML=`
<h1 class="bebas-neue text-6xl lg:mb-5 mb-5 mt-10 pl-2">WOMan Jacket</h1>
        <!-- woman jacket card section -->
        <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-8">
            <!-- jacket card 1 -->
            <div class="p-4 shadow-xl space-y-3 rounded-3xl">
                <div class="p-4 bg-[#F1F1F1] rounded-xl"><img class="border_picture h-auto w-auto" src="images/jacket-1.png" alt=""></div>
                <h2 class="roboto text-2xl">Yellow Coat Jacket</h2>
                <p>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.</p>
                <div class="flex justify-between items-center px-4">
                    <p class="text-[#FABE4C] text-4xl font-black">$234</p>
                    <button class="px-8 py-4 bg-linear-to-r from-[#A4BC46] to-[#85A019] rounded-lg flex gap-0.5 mt-2 cursor-pointer"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <p class="text-[#FFFFFF] font-semibold">Buy NOW</p>
                    </button>
                </div>
            </div>
            <!-- jacket card 2 -->
            <div class=" p-4 shadow-xl space-y-3 rounded-3xl">
                <div class="p-4 bg-[#F1F1F1] rounded-xl"><img class="border_picture h-auto w-auto" src="images/jacket-2.png" alt="">
                </div>
                <h2 class="roboto text-2xl">Ladies Jacket</h2>
                <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
                <div class="flex justify-between items-center px-4">
                    <p class="text-[#FABE4C] text-4xl font-black">$234</p>
                    <button
                        class="px-8 py-4 bg-linear-to-r from-[#A4BC46] to-[#85A019] rounded-lg flex gap-0.5 mt-2 cursor-pointer"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <p class="text-[#FFFFFF] font-semibold">Buy NOW</p>
                    </button>
                </div>
            </div>
            <!-- jacket card 3 -->
            <div class="p-4 shadow-xl space-y-3 rounded-3xl">
                <div class="p-4 bg-[#F1F1F1] rounded-xl"><img class="border_picture h-auto w-auto" src="images/jacket-3.png" alt="">
                </div>
                <h2 class="roboto text-2xl">Woman Leather Jacket</h2>
                <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
                <div class="flex justify-between items-center px-4">
                    <p class="text-[#FABE4C] text-4xl font-black">$234</p>
                    <button
                        class="px-8 py-4 bg-linear-to-r from-[#A4BC46] to-[#85A019] rounded-lg flex gap-0.5 mt-2 cursor-pointer"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <p class="text-[#FFFFFF] font-semibold ">Buy NOW</p>
                    </button>
                </div>
            </div>
        </div>
`

document.getElementById('man_jacket').innerHTML=`
<h1 class="bebas-neue text-6xl lg:mt-45 lg:mb-10 mb-5 mt-10 pl-2">Man Jacket</h1>
            <!-- Man jacket card section -->
            <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-8">
                <!-- jacket card 1 -->
                <div class="p-4 shadow-xl space-y-3 rounded-3xl">
                    <div class="p-4 bg-[#F1F1F1] rounded-xl"><img class="border_picture h-auto w-auto" src="images/jacket-4.png"
                            alt=""></div>
                    <h2 class="roboto text-2xl">Snowboard Jacket Mens</h2>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.</p>
                    <div class="flex justify-between items-center px-4">
                        <p class="text-[#FABE4C] text-4xl font-black">$234</p>
                        <button
                            class="px-8 py-4 bg-linear-to-r from-[#A4BC46] to-[#85A019] rounded-lg flex gap-0.5 mt-2 cursor-pointer"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <p class="text-[#FFFFFF] font-semibold">Buy NOW</p>
                        </button>
                    </div>
                </div>
                <!-- jacket card 2 -->
                <div class=" p-4 shadow-xl space-y-3 rounded-3xl">
                    <div class="p-4 bg-[#F1F1F1] rounded-xl"><img class="border_picture h-auto w-auto" src="images/jacket-5.png"
                            alt="">
                    </div>
                    <h2 class="roboto text-2xl">Man Leather Jackets</h2>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.</p>
                    <div class="flex justify-between items-center px-4">
                        <p class="text-[#FABE4C] text-4xl font-black">$234</p>
                        <button
                            class="px-8 py-4 bg-linear-to-r from-[#A4BC46] to-[#85A019] rounded-lg flex gap-0.5 mt-2 cursor-pointer"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <p class="text-[#FFFFFF] font-semibold">Buy NOW</p>
                        </button>
                    </div>
                </div>
                <!-- jacket card 3 -->
                <div class="p-4 shadow-xl space-y-3 rounded-3xl">
                    <div class="p-4 bg-[#F1F1F1] rounded-xl"><img class="border_picture h-auto w-auto" src="images/jacket-6.png"
                            alt="">
                    </div>
                    <h2 class="roboto text-2xl">Man Casual Jackets</h2>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.</p>
                    <div class="flex justify-between items-center px-4">
                        <p class="text-[#FABE4C] text-4xl font-black">$234</p>
                        <button
                            class="px-8 py-4 bg-linear-to-r from-[#A4BC46] to-[#85A019] rounded-lg flex gap-0.5 mt-2 cursor-pointer"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <p class="text-[#FFFFFF] font-semibold">Buy NOW</p>
                        </button>
                    </div>
                </div>
            </div>
`

document.getElementById('footer').innerHTML=`
<section class="lg:flex  lg:gap-10">
            <div class="p-3">
                <div class="flex rounded-b-xl shadow-lg lg:gap-9 lg:p-5 items-center my-5 p-5 gap-3">
                    <img class="h-17 p-1  rounded icon_rounded" src="icons/house.png" alt="">
                    <div>
                        <h2 class="text-[#363958] .roboto font-bold text-2xl">Find the Perfect Fit</h2>
                        <p class="lg:pr-20 lg:mt-3 .roboto text-[#3E3E3E]">Everybody is different, which is why we
                            offer styles for every body.</p>
                    </div>
                </div>
                <div class="flex rounded-b-xl shadow-lg lg:gap-9 lg:p-5 items-center my-5 p-5 gap-3">
                    <img class="h-17 p-1  rounded icon_rounded" src="icons/box.png" alt="">
                    <div>
                        <h2 class="text-[#363958] .roboto font-bold text-2xl">Find the Perfect Fit</h2>
                        <p class="lg:pr-20 lg:mt-3 .roboto text-[#3E3E3E]">Everybody is different, which is why we
                            offer styles for every body.</p>
                    </div>
                </div>
                <div class="flex rounded-b-xl shadow-lg lg:gap-9 lg:p-5 items-center my-5 p-5 gap-3">
                    <img class="h-17 p-1  rounded icon_rounded" src="icons/question.png" alt="">
                    <div>
                        <h2 class="text-[#363958] .roboto font-bold text-2xl">Find the Perfect Fit</h2>
                        <p class="lg:pr-20 lg:mt-3 .roboto text-[#3E3E3E]">Everybody is different, which is why we
                            offer styles for every body.</p>
                    </div>
                </div>
            </div>            
            <div><img class="w-150 p-10 mt-12" src="images/shopping.png" alt=""></div>
        </section>
`