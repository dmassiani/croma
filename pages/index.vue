<template>
  <div>

    <div class="p-4 bg-white w-full fixed z-10">
      <draggable @change="changeColors" class="grid grid-cols-5 gap-4" v-model="currentColors" group="people" @start="drag=true" @end="drag=false">
        <div v-for="(element,i) in currentColors" :key="i">
          <verte v-model="currentColors[i]" picker="square" :style="getColorsBG(i)" class="bg rounded-lg w-full h-20"></verte>
        </div>
      </draggable>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="pt-32 bg relative bg-gray-50 z-0" :style="getGlobalColors()">

      <!-- HEAD -->
      <div class="relative bg-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" class="font-bold text-2xl">
                <span>Croma</span>
                <!-- <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg" alt=""> -->
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
              <a :style="primaryColorsBG" href="#" class="bg ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium">
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

      <!-- HERO -->
      <main class="lg:relative">
        <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span class="block xl:inline">Easily generate your</span>
              <span class="block xl:inline">color scheme</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
              Use spacebar for generate a new scheme. You can order colors. First color is primary and used by text color (dark), second color is secondary and used for background color (very light).
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
        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full overflow-hidden">
          <!-- <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""> -->
          <!-- <svg width="713px" height="663px" viewBox="0 0 713 663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path :style="getVariantFill(0,3)" class="filler" d="M405.828125,236.289063 C392.742188,207.369792 362.704427,190.776042 315.714844,186.507813 C245.230469,180.105469 113.839844,202.769531 113.839844,236.289063 C113.839844,269.808594 188.832031,245.554688 181.976563,288.882813 C175.121094,332.210938 77.2851563,280.800781 62.2539063,332.253906 C47.2226563,383.707031 150.03125,345.972656 144.957031,392.726563 C139.882813,439.480469 20.6679688,445.109375 20.6679688,487.253906 C20.6679688,529.398438 207.76567,463.699219 207.76567,505.121094 C207.76567,546.542969 150.152344,539.027344 150.152344,563.191406 C150.152344,587.355469 238.773438,533.507813 254.644531,563.191406 C270.515625,592.875 225.957031,604.816406 254.644531,633.859375 C283.332031,662.902344 454.359375,609.378906 534.683594,535.054688 C615.007813,460.730469 615.007813,451.027265 606.570313,437.808594 C598.132813,424.589923 524.527344,451.027265 524.527344,413.660077 C524.527344,376.29289 567.839844,380.882813 567.839844,359.632813 C567.839844,338.382813 525.652344,364.953125 480.113281,316.683594 C449.753906,284.503906 424.992188,257.705729 405.828125,236.289063 Z"></path>
                  <g transform="translate(155.000000, 166.000000)">
                    <circle :style="getVariantFill(2,13)" class="filler" cx="194" cy="194" r="194"></circle>
                      <path :style="getVariantFill(2,9)" class="filler" d="M335.98182,61.7976552 C368.255578,96.4434886 388,142.915966 388,194 C388,282.182168 329.165022,356.62269 248.608259,380.208374 C238.130636,374.012605 230.308435,362.864685 225.136719,346.765625 C190.296875,238.3125 295.484375,244.080423 329.865234,177.839844 C351.181367,136.770684 355.009552,98.7142833 336.632106,63.0436505 Z"></path>
                      <path :style="getVariantFill(2,11)" class="filler" d="M383.358153,151.624453 C386.397087,165.263992 388,179.444806 388,194 C388,208.349871 386.441991,222.33585 383.485902,235.798006 C378.697751,249.816542 371.705656,265.742388 362.019531,284.886719 C316.035156,375.773438 264.140625,319.496094 325.587135,275.5 C367.370762,245.582656 384.746677,199.943914 383.419529,153.585344 Z"></path>
                      <path :style="getVariantFill(2,15)" class="filler" d="M194,0 C207.190885,0 220.074284,1.31650318 232.525973,3.8252849 C281.38042,16.0027819 319.126941,42.7135188 325.222656,89.2230912 C336.242188,173.300781 93.5625,117.046875 116.050781,308.757812 C121.971205,359.228991 163.337781,383.80371 240.150508,382.48197 L240.168632,382.472718 C225.371678,386.084923 209.909484,388 194,388 C86.8567585,388 0,301.143241 0,194 C0,86.8567585 86.8567585,0 194,0 Z"></path>
                      <path :style="getVariantFill(2,17)" class="filler" d="M199.355469,57.9257813 C166.378906,81.6757813 -82.765625,207.664063 118.824219,372.699219 L119.298233,373.095692 C49.2369622,343.838806 0,274.669357 0,194 C0,121.242876 40.0520829,57.8404165 99.3107358,24.6381356 C103.423066,23.3378372 107.858888,21.598736 112.617188,19.4244678 C175.925781,-9.50390625 232.332031,34.1757813 199.355469,57.9257813 Z"></path>
                      <path :style="getVariantFill(2,19)" class="filler" d="M151.382812,26.9960937 C166.591793,38.9492187 174.867188,51.5 125.371094,81.46875 C75.875,111.4375 50.859375,143.796875 40.2304687,168.898438 C29.6015625,194 -7.59375,190.054688 11.0039062,131.644531 C12.5016707,126.940462 13.8987516,122.584588 15.2250224,118.536015 C28.2445588,87.7291123 48.9953019,60.9858711 75.045271,40.737912 C75.8234473,40.2295652 76.6139808,39.7105511 77.4179687,39.1835937 C122.160156,9.85824974 136.173832,15.0429687 151.382812,26.9960937 Z"></path>
                      <ellipse :style="getVariantFill(2,21)" class="filler" transform="translate(103.230964, 53.196245) rotate(-31.000000) translate(-103.230964, -53.196245) " cx="103.230964" cy="53.1962452" rx="35" ry="21"></ellipse>
                      <ellipse :style="getVariantFill(2,23)" class="filler" transform="translate(104.973445, 43.767662) rotate(-31.000000) translate(-104.973445, -43.767662) " cx="104.973445" cy="43.7676616" rx="17" ry="9.5"></ellipse>
                      <path d="M81,134 C81,232.85897 161.14103,313 260,313 C301.636829,313 339.953329,298.783979 370.360517,274.940919 C339.685591,341.667926 272.253513,388 194,388 C86.8567585,388 0,301.143241 0,194 C0,109.203937 54.4033238,37.1144509 130.210037,10.7314766 C99.7127389,42.8301411 81,86.2297734 81,134 Z" id="Combined-Shape" fill="#030303" opacity="0.12831577"></path>
                  </g>
                  <path :style="getVariantFill(0,3)" class="filler" d="M554.679224,126 C487.425012,112.570313 460,67.3460223 511,61.9658937 C562,56.585765 557.950943,39.6414294 545.282585,27.0544845 C532.614227,14.4675396 572.919103,14.4675396 598.804556,14.4675396 C624.690009,14.4675396 639.984213,24.2252861 617.329224,35.2987811 C594.674235,46.3722762 639.770998,54.4022402 664.504703,56.585765 C689.238409,58.7692899 721.150607,84.1178208 689.238409,103.485765 C657.326211,122.853709 673.054525,160.476443 664.504703,164.868925 C655.954881,169.261407 621.933435,139.429688 554.679224,126 Z"></path>
                  <g transform="translate(591.000000, 126.000000) rotate(-165.000000) translate(-591.000000, -126.000000) translate(511.000000, 45.000000)">
                      <circle :style="getVariantFill(2,11)" class="filler" cx="77" cy="84" r="67.9"></circle>
                      <path :style="getVariantFill(2,7)" class="filler" d="M126.693815,37.7293704 C137.989525,49.8553918 144.9,66.1206819 144.9,84 C144.9,114.863813 124.307685,140.918034 96.1127409,149.172975 C92.4456596,147.004322 89.7079313,143.102575 87.8978516,137.467969 C80.3376055,113.933641 91.6166382,105.766612 104.148275,97.4325831 L105.364334,96.6250214 C112.677066,91.7702657 120.220844,86.6902583 124.552832,78.3439453 C132.013479,63.9697395 133.353343,50.6499992 126.921237,38.1652777 Z"></path>
                      <path :style="getVariantFill(2,9)" class="filler" d="M143.275215,69.1679366 C144.338932,73.9419663 144.9,78.9054609 144.9,84 C144.9,89.0232408 144.354526,93.9190793 143.31958,98.6315137 C141.64371,103.536936 139.196631,109.110525 135.806836,115.810352 C119.712305,147.620703 101.549219,127.923633 123.055497,112.525 C137.679767,102.05393 143.761337,86.0803698 143.296835,69.8548704 Z"></path>
                      <path :style="getVariantFill(2,13)" class="filler" d="M77,16.1 C81.6192383,16.1 86.1307433,16.561261 90.4909677,17.4402357 C107.586665,21.7034635 120.794713,31.0518991 122.92793,47.3280819 C126.784766,76.7552734 41.846875,57.0664062 49.7177734,124.165234 C51.7899168,141.830104 66.268153,150.431257 93.1524818,149.968693 C87.9798165,151.229757 82.5681801,151.9 77,151.9 C39.4998655,151.9 9.1,121.500135 9.1,84 C9.1,46.4998655 39.4998655,16.1 77,16.1 Z"></path>
                      <path :style="getVariantFill(2,15)" class="filler" d="M78.8744141,36.3740234 C67.3326172,44.6865234 -19.8679687,88.7824219 50.6884766,146.544727 L50.8526577,146.682772 C26.3321292,136.442448 9.1,112.233614 9.1,84 C9.1,58.5352318 23.117981,36.3445384 43.858207,24.7236559 C45.2978506,24.2683303 46.8504914,23.6596122 48.5160156,22.8985637 C70.6740234,12.7736328 90.4162109,28.0615234 78.8744141,36.3740234 Z"></path>
                      <path :style="getVariantFill(2,17)" class="filler" d="M62.0839844,25.5486328 C67.4071274,29.7322266 70.3035156,34.125 52.9798828,44.6140625 C35.65625,55.103125 26.9007812,66.4289063 23.1806641,75.2144531 C19.4605469,84 6.4421875,82.6191406 12.9513672,62.1755859 C13.4759598,60.527984 13.9652627,59.0024243 14.4297541,57.5845643 C18.9868518,46.8039066 26.2483451,37.445572 35.3639713,30.3597255 C35.6369931,30.1811445 35.9142762,29.9990973 36.1962891,29.8142578 C51.8560547,19.5503874 56.7608414,21.3650391 62.0839844,25.5486328 Z"></path>
                      <ellipse :style="getVariantFill(2,19)" class="filler" transform="translate(45.230838, 34.718686) rotate(-31.000000) translate(-45.230838, -34.718686) " cx="45.2308376" cy="34.7186858" rx="12.25" ry="7.35"></ellipse>
                      <ellipse :style="getVariantFill(2,21)" class="filler" transform="translate(45.840706, 31.418682) rotate(-31.000000) translate(-45.840706, -31.418682) " cx="45.8407059" cy="31.4186816" rx="5.95" ry="3.325"></ellipse>
                      <path d="M43.3057694,57.8070891 C43.3057694,92.4077287 71.3551298,120.457089 105.955769,120.457089 C120.52888,120.457089 133.939839,115.481332 144.582432,107.136033 C133.846394,130.490405 110.244886,146.707089 82.8557694,146.707089 C45.3556349,146.707089 14.9557694,116.307224 14.9557694,78.8070891 C14.9557694,49.1284113 33.9970043,23.8970521 60.5294319,14.6630539 C49.855421,25.897191 43.3057694,41.0872635 43.3057694,57.8070891 Z" id="Combined-Shape" fill="#030303" opacity="0.12831577" transform="translate(79.768598, 80.685245) rotate(-195.000000) translate(-79.768598, -80.685245) "></path>
                  </g>
              </g>
          </svg> -->
          <img :src="`/${illustration}.svg`" alt="" class="mt-12">
          <div class="absolute -right-20 top-10">
            <!-- <div class="circle bg-black rounded-full w-96 h-96" :style="getVariantBG(1)"></div> -->
          </div>
        </div>
      </main>

      <!-- IPHONE -->
      <div class="container py-20">
        <section class="relative">
          <div class="ml-auto mr-auto bg rounded-full text-white w-96 h-96 " :style="secondaryColorsBG">
            <img src="/iphone.png" alt="" class="w-60 ml-auto mr-auto">
          </div>
        </section>
      </div>

      <!-- This example requires Tailwind CSS v2.0+ -->
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
          <h2 class="text-base font-semibold tracking-wider uppercase">Deploy faster</h2>
          <p class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
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
  </div>
</template>

<script>
const { contrastColor } = require('contrast-color');
import draggable from 'vuedraggable'
import cyanea from 'cyanea'

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
      backgroundColor: '',
      textColor: '',
      historique: [{colors:['','','','','']}],
      current: 0,
      apiColors: [],
      index: 0,
      offset: 0,
      illustration: SVGS[0],
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
      // console.log(this.currentColors[0], contrastColor({ bgColor: this.currentColors[0] }), cyanea(this.currentColors[0]), Color.contrastTextColor(this.currentColors[0],"hex"))
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
        '--bg-color': this.currentColors[index],
        '--text-color': contrastColor({ bgColor: this.currentColors[index] })
      }
    },
    getVariantBG(index, level) {
      if(cyanea(this.currentColors[index]).saturated == undefined){
        return {
          '--bg-color': this.currentColors[index],
          '--text-color': contrastColor({ bgColor: this.currentColors[index] })
        }
      }
      return {
        '--bg-color': cyanea(this.currentColors[index]).saturated.variants[level].hex,
        '--text-color': contrastColor({ bgColor: cyanea(this.currentColors[index]).saturated.variants[level].hex })
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

      let random = randomIntFromInterval(0, 100)
      this.apiColors = colors

      this.currentColors = colors[random].colors

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
      this.changeColors()

    },
    changeColors() {
      this.defineFontColor()
      this.defineBackgroundColor()
      this.newSVG()
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
    }
  }
}
</script>

<style>
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
</style>
