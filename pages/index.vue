<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg relative bg-gray-50" :style="getColorsBG(4)">

    <div class="container py-4">
      <draggable class="grid grid-cols-5 gap-4" v-model="currentColors" group="people" @start="drag=true" @end="drag=false">
        <div v-for="(element,i) in currentColors" :key="i">
          <verte v-model="currentColors[i]" picker="square" :style="getColorsBG(i)" class="bg rounded-lg w-full h-20"></verte>
        </div>
      </draggable>
    </div>

    <div class="relative bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg" alt="">
            </a>
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
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" class="whitespace-nowrap text-base font-medium">
              Sign in
            </a>
            <a :style="primaryColorsBG" href="#" class="bg ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium">
              Sign up
            </a>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
              </div>
              <div class="-mr-2">
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: chart-bar -->
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Analytics
                  </span>
                </a>

                <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: cursor-click -->
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Engagement
                  </span>
                </a>

                <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: shield-check -->
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Security
                  </span>
                </a>

                <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: view-grid -->
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Integrations
                  </span>
                </a>

                <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: refresh -->
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Automations
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Pricing
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Docs
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Enterprise
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Blog
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Help Center
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Guides
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Security
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Events
              </a>
            </div>
            <div>
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 :style="secondaryColorsText" class="text text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Data to enrich your</span>
            <span class="block xl:inline">online business</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a :style="primaryColorsBG" href="#" class="bg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a :style="secondaryColorsBG" href="#" class="bg text w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full overflow-hidden">
        <!-- <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""> -->
        <div class="absolute -right-20 top-10">
          <div class="circle bg-black rounded-full w-96 h-96" :style="primaryColorsBG"></div>
        </div>
      </div>
    </main>

    <div class="container py-12">
      <section class="">
        <div class="bg rounded-lg p-24 bg-black text-white" :style="primaryColorsBG">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 :style="secondaryColorsText" class="text text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
          <p :style="primaryColorsText" class="text mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="flex">
              <div class="flex-shrink-0">
                <div :style="primaryColorsBG" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: globe-alt -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Competitive exchange rates
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <div :style="primaryColorsBG" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: scale -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  No hidden fees
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <div :style="primaryColorsBG" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: lightning-bolt -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Transfers are instant
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <div :style="primaryColorsBG" class="bg flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: annotation -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
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
                  <svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
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
        <h2 :style="secondaryColorsText" class="text text-base font-semibold tracking-wider text-indigo-600 uppercase">Deploy faster</h2>
        <p :style="primaryColorsText" class="text mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <!-- Heroicon name: cloud-upload -->
                      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Push to Deploy</h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <!-- Heroicon name: lock-closed -->
                      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">SSL Certificates</h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <!-- Heroicon name: refresh -->
                      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Simple Queues</h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <!-- Heroicon name: shield-check -->
                      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Advanced Security</h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
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
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Powerful API</h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span :style="primaryColorsBG" class="bg inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <!-- Heroicon name: server -->
                      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Database Backups</h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div :style="primaryColorsBG" class="bg">
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold sm:text-4xl">
          <span class="block">Boost your productivity.</span>
          <span class="block">Start using Workflow today.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 opacity-25">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
        <a :style="secondaryColorsBG" href="#" class="bg mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white sm:w-auto">
          Sign up for free
        </a>
      </div>
    </div>

  </div>
</template>

<script>
const { contrastColor } = require('contrast-color');
import draggable from 'vuedraggable'

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  data() {
    return {
      currentColors: [],
      primaryColors: {
        color: '',
        text: ''
      },
      secondaryColors: {
        color: '',
        text: ''
      },
      alphaColors: {
        color: '',
        text: ''
      },
      betaColors: {
        color: '',
        text: ''
      },
      gammaColors: {
        color: '',
        text: ''
      },
      historique: [{colors:['','','','','']}],
      current: 0,
      apiColors: [],
      index: 0,
      offset: 0
    }
  },
  components: {
    draggable,
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
    this.chooseColors()
  },
  computed: {
    primaryColorsBG() {
      return {
        '--bg-color': this.currentColors[0],
        '--text-color': contrastColor({ bgColor: this.currentColors[0] })
      }
    },
    primaryColorsBGInvert() {
      return {
        '--bg-color': contrastColor({ bgColor: this.currentColors[0] }),
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
        '--text-color': contrastColor({ bgColor: this.currentColors[1] })
      }
    },
    secondaryColorsText() {
      return {
        '--text-color': this.currentColors[1]
      }
    },
  },
  methods: {
    getColorsBG(index) {
      return {
        '--bg-color': `${this.currentColors[index]}`,
        '--text-color': contrastColor({ bgColor: this.currentColors[index] })
      }
    },
    async getPalettes(offset = 0) {
      let colors = []
      try {
        colors = await this.$axios.$get(`/api/palettes/new?orderCol=score&sortBy=desc&numResults=100&resultOffset=${offset}&format=json`)
      } catch (e) {
        console.log(e);
        return colors
      } finally {
        return colors
      }
    },
    async defineColors() {

    },
    async chooseColors() {
      let colors
      if(this.current == 0 ) {
        colors = await this.getPalettes()
      }else if(this.current == 100) {
        this.offset = this.offset + 100;
        colors = await this.getPalettes(this.offset)
        this.current = 0
      }else{
        colors = this.apiColors
      }
      console.log(this.current);

      let random = randomIntFromInterval(0, 100)
      this.apiColors = colors
      this.currentColors = colors[random].colors
      if(this.currentColors[0].length == 6){
        this.currentColors[0] = '#' + this.currentColors[0]
        this.currentColors[1] = '#' + this.currentColors[1]
        this.currentColors[2] = '#' + this.currentColors[2]
        this.currentColors[3] = '#' + this.currentColors[3]
        this.currentColors[4] = '#' + this.currentColors[4]
      }
      this.historique.push(this.currentColors)
      this.current++

    },
  	doCommand(e) {
  		let cmd = String.fromCharCode(e.keyCode).toLowerCase();
      if(cmd == ' '){
        e.preventDefault();
        this.chooseColors()
      }
  	}
  }
}
</script>

<style>
body {
  color: var(--text-body-color);
}
.verte__guide{
  width: 100% !important;
  height: 5rem !important;
  border-radius: 0.5rem !important;
}
.verte__icon{
  display: none;
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
</style>
