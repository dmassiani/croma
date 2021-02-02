<template>
  <div>

    <draggable @start="drag=true" @end="drag=false">
      <div class="p-4 bg-white fixed z-10 right-10 top-40 w-28 rounded-2xl shadow-lg">

        <draggable @change="changeColors" v-model="currentColors" group="people" @start="drag=true" @end="drag=false">
          <div class="color relative" v-for="(element,i) in currentColors" :key="i">
            <div class="absolute w-20 h-2O z-10 p-4" v-if="locked[i]">
              <div v-html="unlockedSVG" />
            </div>
            <verte :showHistory="false" v-model="currentColors[i]" model="hex" picker="square" :style="getColorsBG(i)" class="bg rounded-lg w-full h-20 mb-2"/>
            <div class="options bg-white h-8 absolute top-0 rounded-lg p-2">
              <div class="grid grid-cols-2 text-center">
                <button class="w-4 h-4 ml-auto mr-auto" type="button" name="button" @click.prevent="lock(i)">
                  <div v-html="unlockedSVG" v-if="locked[i]" />
                  <div v-html="lockedSVG" v-else />
                </button>
                <button class="w-4 h-4 text-center" type="button" name="button" @click.prevent="copy(i)">
                  <svg class="ml-auto mr-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <defs>
                      <style>.a{fill:none;stroke:#999;stroke-linecap:round;stroke-linejoin:round;}</style>
                    </defs>
                    <line class="a" x1="0.5" y1="7.5" x2="0.5" y2="8.5"></line>
                    <line class="a" x1="4.5" y1="23.5" x2="3.5" y2="23.5"></line>
                    <line class="a" x1="7.5" y1="23.5" x2="6.5" y2="23.5"></line>
                    <line class="a" x1="10.5" y1="23.5" x2="9.5" y2="23.5"></line>
                    <line class="a" x1="13.5" y1="23.5" x2="12.5" y2="23.5"></line>
                    <line class="a" x1="16.5" y1="23.5" x2="15.5" y2="23.5"></line>
                    <path class="a" d="M1.5,23.5a1,1,0,0,1-1-1"></path>
                    <line class="a" x1="0.5" y1="20.5" x2="0.5" y2="19.5"></line>
                    <line class="a" x1="0.5" y1="17.5" x2="0.5" y2="16.5"></line>
                    <line class="a" x1="0.5" y1="14.5" x2="0.5" y2="13.5"></line>
                    <line class="a" x1="0.5" y1="11.5" x2="0.5" y2="10.5"></line>
                    <rect class="a" x="4.5" y="0.5" width="19" height="19" rx="1" ry="1"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </draggable>

        <div class="grid grid-cols-2 gap-2">
          <verte :showHistory="false" v-model="textColor" picker="square" :style="getTextColor()" class="bg rounded-lg w-full h-10"/>
          <verte :showHistory="false" v-model="backgroundColor" picker="square" :style="getBackgroundColor()" class="bg rounded-lg w-full h-10"/>
          <button type="button" name="button" @click.prevent="back" class="text-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 ml-auto mr-auto">
                <defs>
                    <style>.a{fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style>
                </defs>
                <path class="a" d="M17.248,18.747v-4.5a1.5,1.5,0,0,1,1.5-1.5h4.5"></path>
                <path class="a" d="M23.248,12.747a6,6,0,0,1-6,6h-6V22.5a.75.75,0,0,1-1.3.512l-8.8-9.988a1.5,1.5,0,0,1,0-2.047L9.95.987a.75.75,0,0,1,1.3.512V5.247h10.5a1.5,1.5,0,0,1,1.5,1.5Z"></path>
            </svg>
          </button>
          <button type="button" name="button" @click.prevent="next" class="text-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 ml-auto mr-auto">
                <defs>
                    <style>.a{fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style>
                </defs>
                <path class="a" d="M6.748,5.249v4.5a1.5,1.5,0,0,1-1.5,1.5H.748"></path>
                <path class="a" d="M.748,11.249a6,6,0,0,1,6-6h6V1.5a.75.75,0,0,1,1.3-.512l8.8,9.988a1.5,1.5,0,0,1,0,2.047l-8.8,9.987a.75.75,0,0,1-1.3-.512V18.749H2.248a1.5,1.5,0,0,1-1.5-1.5Z"></path>
            </svg>
          </button>
          <button @click.prevent="invertBackground" class="inverter absolute bg-white rounded-full w-6 h-6 p-1 shadow" type="button" name="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <defs>
                    <style>.a{fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style>
                </defs>
                <path class="a" d="M10.1,9A5.617,5.617,0,0,0,6,6.748H.75"></path>
                <path class="a" d="M23.25,6.748H18c-3.75,0-6,5.25-6,5.25s-2.25,5.25-6,5.25H.75"></path>
                <path class="a" d="M13.9,15A5.61,5.61,0,0,0,18,17.248h5.25"></path>
                <polyline class="a" points="20.25 3.748 23.25 6.748 20.25 9.748"></polyline>
                <polyline class="a" points="20.25 14.248 23.25 17.248 20.25 20.248"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </draggable>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg relative bg-gray-50 z-0" :style="getGlobalColors()">

      <!-- HEAD -->
      <div class="relative bg-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <a href="#" class="font-bold text-2xl">
              <span>Croma</span>
              <!-- <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg" alt=""> -->
            </a>
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <nav class="hidden md:flex space-x-10">
              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                <button type="button" class="group rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span>Solutions</span>
                  <!--
                    Heroicon name: chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                  -->
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

              </div>

              <a href="#" class="text-base font-medium">
                Pricing
              </a>
              <a href="#" class="text-base font-medium">
                Docs
              </a>

              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                <button type="button" class="group rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span>More</span>
                  <!--
                    Heroicon name: chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                  -->
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

              </div>
            </nav>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <button type="button" class=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: menu -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" class="whitespace-nowrap text-base font-medium">
                Sign in
              </a>
              <a :style="primaryColorsBG" href="#" class="bg ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium">
                Sign up
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- HERO -->
      <main class="lg:relative">
        <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span class="block xl:inline">Easily generate your</span>
              <span class="block xl:inline">color scheme</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
              Use <strong class="font-bold">spacebar</strong> for generate a new scheme. You can order colors. First color is primary and used by text color (dark), second color is secondary and used for background color (very light).
            </p>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md">
                <a :style="primaryColorsBG" href="#" class="bg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">

          <img :src="`/${illustration}.svg`" alt="" class="mt-12">
          <div class="absolute -right-20 top-10">
            <!-- <div class="circle bg-black rounded-full w-96 h-96" :style="getVariantBG(1)"></div> -->
          </div>
        </div>
      </main>

      <!-- IPHONE -->
      <div class="container py-20">
        <section class="relative">
          <div :style="secondaryColorsBG" class="ml-auto mr-auto bg rounded-full text-white w-96 h-96">
            <img src="/iphone.png" alt="" class="w-60 ml-auto mr-auto relative -top-12">
          </div>
        </section>
      </div>

      <!-- A better way -->
      <div class="mt-12">
        <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center py-12">
            <h2 class="text-base font-semibold tracking-wide uppercase">Transactions</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              A better way to send money
            </p>
            <p class="mt-4 max-w-2xl text-xl lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div :style="getColorsBG(0)" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <!-- Heroicon name: globe-alt -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium">
                    Competitive exchange rates
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div :style="getColorsBG(1)" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <!-- Heroicon name: scale -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium">
                    No hidden fees
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div :style="getColorsBG(2)" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <!-- Heroicon name: lightning-bolt -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium">
                    Transfers are instant
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div :style="getColorsBG(3)" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <!-- Heroicon name: annotation -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium">
                    Mobile notifications
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <!-- Human after all -->
      <div class="pt-16 lg:py-24">
        <div :style="primaryColorsBG" class="bg pb-16 bg-indigo-600 lg:pb-0 lg:z-10 lg:relative">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="relative lg:-my-8">
              <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
              <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img class="object-cover lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">
                </div>
              </div>
            </div>
            <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg :style="secondaryColorsText" class="text h-12 w-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="mt-6 text-2xl font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                    </p>
                  </div>
                  <footer class="mt-6">
                    <p class="text-base font-medium">Judith Black</p>
                    <p class="text-base font-medium opacity-25">CEO at PureInsights</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="relative py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 class="text-base font-semibold tracking-wider uppercase">Deploy faster</h2>
          <p class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p class="mt-5 max-w-prose mx-auto text-xl">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
          </p>
          <div class="mt-12">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div class="pt-6">
                <div :style="getVariantBG(1, 1)" class="bg flow-root rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <!-- Heroicon name: cloud-upload -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium tracking-tight">Push to Deploy</h3>
                    <p class="mt-5 text-base">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div :style="getVariantBG(1, 1)" class="bg flow-root rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <!-- Heroicon name: lock-closed -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium tracking-tight">SSL Certificates</h3>
                    <p class="mt-5 text-base">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div :style="getVariantBG(1, 1)" class="bg flow-root rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <!-- Heroicon name: refresh -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium tracking-tight">Simple Queues</h3>
                    <p class="mt-5 text-base">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div :style="getVariantBG(1, 1)" class="bg flow-root rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <!-- Heroicon name: shield-check -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium tracking-tight">Advanced Security</h3>
                    <p class="mt-5 text-base">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div :style="getVariantBG(1, 1)" class="bg flow-root rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <!-- Heroicon name: cog -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium tracking-tight">Powerful API</h3>
                    <p class="mt-5 text-base">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div :style="getVariantBG(1, 1)" class="bg flow-root rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <!-- Heroicon name: server -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium tracking-tight">Database Backups</h3>
                    <p class="mt-5 text-base">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :style="primaryColorsBG" class="bg">
        <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold sm:text-4xl">
            <span class="block">Boost your productivity.</span>
            <span class="block">Start using Workflow today.</span>
          </h2>
          <p class="mt-4 text-lg leading-6 opacity-50">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
          <a :style="secondaryColorsBG" href="#" class="bg mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md sm:w-auto">
            Sign up for free
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
const { contrastColor } = require('contrast-color');
import colorContrast from 'color-contrast'
import draggable from 'vuedraggable'
import cyanea from 'cyanea'
import Verte from 'verte';
import 'verte/dist/verte.css';
// register component globally
// Vue.component('verte', Verte);

// SVGS
import unlockedSVG from "~/assets/svgs/unlocked.svg?raw";
import lockedSVG from "~/assets/svgs/locked.svg?raw";

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SVGS = [
  'discovery',
  'Error',
  'Idea',
  'marketing',
  'Newsletter',
  'Plan',
  'product',
  'SEO',
  'Settings',
  'success',
  'Support',
  'Welcome'
]

export default {
  data() {
    return {
      currentColors: [],
      backgroundColor: '#fff',
      textColor: '#000',
      historique: [{colors:['','','','','']}],
      locked: [false, false, false, false, false],
      hasLockedColor: false,
      current: 0,
      apiColors: [],
      index: 0,
      offset: 0,
      illustration: SVGS[0],
      maxRandom: 100,
      unlockedSVG,
      lockedSVG,
    }
  },
  components: {
    draggable,
    Verte
  },
  created() {
    if (process.browser){
    	window.addEventListener('keypress', this.doCommand);
    }
  },
  destroyed() {
    if (process.browser){
    	window.removeEventListener('keypress', this.doCommand);
    }
  },
  mounted() {
    console.log('mounted choose colors');
  },
  async fetch() {
    await this.chooseColors()
  },
  computed: {
    primaryColorsBG() {
      return {
        '--bg-color': this.currentColors[0],
        '--text-color': this.getBestContrast(this.currentColors[0])
      }
    },
    primaryColorsBGInvert() {
      return {
        '--bg-color': this.getBestContrast(this.currentColors[0]),
        '--text-color': this.currentColors[0]
      }
    },
    primaryColorsText() {
      return {
        '--text-color': this.currentColors[0]
      }
    },
    secondaryColorsBG() {
      return {
        '--bg-color': this.currentColors[1],
        '--text-color': this.getBestContrast(this.currentColors[1])
      }
    },
    secondaryColorsText() {
      return {
        '--text-color': this.currentColors[1]
      }
    },
  },
  methods: {
    back() {

    },
    next() {

    },
    lock(i) {
      if( this.locked[i] == true ){
        this.$set(this.locked, i, false)
        // this.locked[i] = false
      }else{
        this.$set(this.locked, i, true)
        // this.locked[i] = true
      }
      if(this.locked[0] == true || this.locked[1] == true || this.locked[2] == true || this.locked[3] == true || this.locked[4] == true){
        this.hasLockedColor = true
      }else{
        this.hasLockedColor = false
        this.current = 0
      }

    },
    copy(i) {
      console.log('copy', i, this.currentColors[i]);
    },
    invertBackground() {
      let textColor = this.textColor, backgroundColor = this.backgroundColor
      this.backgroundColor = textColor
      this.textColor = backgroundColor
    },
    getColorsBG(index) {
      return {
        '--bg-color': this.currentColors[index],
        '--text-color': this.getBestContrast(this.currentColors[index])
      }
    },
    getVariantBG(index, level) {
      if(cyanea(this.currentColors[index]).saturated == undefined){
        return {
          '--bg-color': this.currentColors[index],
          '--text-color': this.getBestContrast(this.currentColors[index])
        }
      }
      return {
        '--bg-color': cyanea(this.currentColors[index]).saturated.variants[level].hex,
        '--text-color': this.getBestContrast(cyanea(this.currentColors[index]).saturated.variants[level].hex)
      }
    },
    getVariantFill(index, level) {
      if(cyanea(this.currentColors[index]).saturated == undefined){
        return {
          '--fill-color': this.currentColors[index],
        }
      }
      return {
        '--fill-color': cyanea(this.currentColors[index]).saturated.variants[level].hex,
      }
    },
    getVariantText(index, level) {
      return {
        '--text-color': this.currentColors[index]
      }
    },
    getGlobalColors() {
      return {
        '--bg-color': this.backgroundColor,
        '--text-color': this.textColor
      }
    },
    getTextColor() {
      return {
        '--bg-color': this.textColor
      }
    },
    getBackgroundColor() {
      return {
        '--bg-color': this.backgroundColor,
      }
    },
    getBestContrast(color) {
      if(colorContrast(color, '#000') >= colorContrast(color, '#fff')){
        return '#000'
      }else{
        return '#fff'
      }
    },
    async getPalettes(offset = 0) {

      let colors = []
      let request = `/api/palettes/new?orderCol=score&sortBy=desc&numResults=100&resultOffset=${offset}&format=json`
      this.maxRandom = 100
      try {
        colors = await this.$axios.$get(request)
      } catch (e) {
        console.log(e);
        return colors
      } finally {
        return colors
      }
    },
    async getPalettesWithHex() {
      let request, colors
      // get hsl from every hex locked (currentColors)

      let hexs = ''
      for (var i = 0; i < this.locked.length; i++) {
        if(this.locked[i] == true){
          hexs = hexs + this.currentColors[i].substring(1) + ','
        }
      }
      hexs = hexs.slice(0,-1)
      request = `/api/palettes?orderCol=score&hex=${hexs}&sortBy=desc&numResults=100&format=json`

      try {
        colors = await this.$axios.$get(request)
      } catch (e) {
        console.log(e);
        return colors
      } finally {
        this.maxRandom = colors.length - 1
        return colors
      }
    },
    async chooseColors() {
      let colors

      if(this.hasLockedColor == true){
        try {
          colors = await this.getPalettesWithHex()
        } catch (e) {
          console.log(e)
        } finally {
          if(colors.length == 0){
            this.$toast('No result for your locked colors');
            return false
          }
          this.current = 0
          this.offset = 0
        }
      }else{
        if(this.current == 0 ) {
          try {
            colors = await this.getPalettes()
          } catch (e) {
            console.log(e)
          }
        }else if(this.current == this.maxRandom) {
          console.log('on est à la fin des palettes en stock');
          try {
            this.offset = this.offset + 100
            colors = await this.getPalettes(this.offset)
          } catch (e) {

          } finally {
            this.current = 0
          }
        }else{
          colors = this.apiColors
        }
      }

      let random = randomIntFromInterval(0, this.maxRandom)
      this.apiColors = colors

      let newColors = colors[random].colors

      // s'il y a des couleurs locked, on les garde
      if(this.hasLockedColor == true){
        for (var i = 0; i < this.locked.length; i++) {
          if(this.locked[i] == true){
            newColors.splice(newColors.indexOf(this.currentColors[i].substring(1).toUpperCase().toString()), 1)
          }
        }
        for (var i = 0; i < this.locked.length; i++) {
          if(this.locked[i] == false){
            // if(newColors[0].length == 6){
            // voir si du hsl apparait
            if(newColors.length != 0){
              this.currentColors[i] = '#' + newColors[0]
              newColors.shift()
            }else{
              this.currentColors[i] = '#FFFFFF'
            }
          }
        }
      }else{
        this.currentColors = colors[random].colors
      }

      console.log(this.currentColors, colors, random);

      if(this.currentColors[0].length == 6){
        this.currentColors[0] = '#' + this.currentColors[0]
        this.currentColors[1] = '#' + this.currentColors[1]
        this.currentColors[2] = '#' + this.currentColors[2]
        this.currentColors[3] = '#' + this.currentColors[3]
        this.currentColors[4] = '#' + this.currentColors[4]

      }else if(this.currentColors[0].substring(0, 3) == 'hsl'){
        this.currentColors[0] = this.hslToHex(this.currentColors[0])
        this.currentColors[1] = this.hslToHex(this.currentColors[1])
        this.currentColors[2] = this.hslToHex(this.currentColors[2])
        this.currentColors[3] = this.hslToHex(this.currentColors[3])
        this.currentColors[4] = this.hslToHex(this.currentColors[4])
      }

      this.historique.push(this.currentColors)
      this.current++
      this.defineFontColor()
      this.defineBackgroundColor()

    },
    changeColors() {
      // this.defineFontColor()
      // this.defineBackgroundColor()
    },
    newSVG() {
      this.illustration = SVGS[randomIntFromInterval(0, SVGS.length - 1)]
    },
    defineFontColor() {
      let variants = cyanea(this.currentColors[0]);
      if(variants.desaturated == undefined){
        return this.currentColors[0];
      }

      let totalVariants = variants.desaturated.variants.length
      this.textColor = variants.desaturated.variants[totalVariants - 7].hex
      return this.textColor
    },
    defineBackgroundColor() {
      let variants = cyanea(this.currentColors[2])
      if(variants.desaturated == undefined){
        return this.currentColors[2]
      }
      this.backgroundColor = variants.desaturated.variants[0].hex
      return this.backgroundColor
    },
  	doCommand(e) {
  		let cmd = String.fromCharCode(e.keyCode).toLowerCase();
      if(cmd == ' '){
        e.preventDefault();
        this.chooseColors()
        this.newSVG()
      }
  	},
    hslToHex(hsl) {
      let nuHsl = hsl.slice( 4 ).slice(0, -1).split(',')
      let h = parseInt(nuHsl[0].replace(/^\%/, '')), s = parseInt(nuHsl[1].replace(/^\%/, '')), l = parseInt(nuHsl[2].replace(/^\%/, ''))

      h /= 360;
      s /= 100;
      l /= 100;

      let r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    },
    hexToHSL(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        r = parseInt(result[1], 16);
        g = parseInt(result[2], 16);
        b = parseInt(result[3], 16);
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if(max == min){
          h = s = 0; // achromatic
        }else{
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
        }
      var HSL = new Object();
      HSL['h']=h;
      HSL['s']=s;
      HSL['l']=l;
      return HSL;
    }
  }
}
</script>

<style>
.inverter {
  left: 44px;
}
.verte__guide{
  width: 100% !important;
  height: 5rem !important;
  border-radius: 0.5rem !important;
}
.verte__icon{
  display: none;
}
.filler {
  fill: var(--fill-color);
}
.bg {
  color: var(--text-color);
  background-color: var(--bg-color);
}
.circle {
  width: 600px;
  height: 600px;
  color: var(--text-color);
  background-color: var(--bg-color);
}
.bg {
  color: var(--text-color);
  background-color: var(--bg-color);
}
.text {
  color: var(--text-color);
}
.options {
  width: 100%;
  opacity: 0;
  transition: all .3s ease-in-out;
}
.color:hover .options{
  display: block;
  height: 2rem;
  opacity: 1;
  top: -20px;
}
</style>
