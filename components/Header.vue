<template>
  <header class="flex bg-gray-50/10 w-full py-6 px-5 top-0 z-10 fixed item-center justify-between backdrop-blur-sm dark:bg-gray-900/80">
  <nuxt-link>
  </nuxt-link>
  <nav class="flex gap-3 md:gap-10 lg:gap-10 items-center font-medium text-md md:text-lg lg:text-lg">
    <nuxt-link class="  text-dark-900/50 dark:text-gray-50/80 hover:text-dark-900" to="/"> Home </nuxt-link>
   <nuxt-link class=" text-dark-900/50 dark:text-gray-50/80 hover:text-dark-900" to="Projects"> Projects </nuxt-link>
   <nuxt-link class=" text-dark-900/50 dark:text-gray-50/80 hover:text-dark-900" to="about"> About </nuxt-link>
   <nuxt-link class=" text-dark-900/50 dark:text-gray-50/80 hover:text-dark-900" to="Contacts"> Contact </nuxt-link>
    <Switch-mode></Switch-mode>
  </nav>
  </header>
  
</template>
