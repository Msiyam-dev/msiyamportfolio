<template>
    <button  class="flex h-auto w-auto items-center justify-between" >
        <img @click="toggleDark()" class="h-8 fill-current text-gray-50 w-8 dark:display-none" viewbox="0 0 20 20" src="assets/switch-pngrepo-com.png" alt="" >
        <img  @click="toggleDark()" class="h-8 fill-current text-dark-900 w-8 dark:display-block display-none" viewbox="0 0 20 20" src="assets/switch.png" alt="" >         
    </button>
    
</template>

<script setup lang="ts">
    const color = useColorMode();
    
    function toggleDark() {
      color.preference = color.value === "dark" ? "light" : "dark";
      console.log("clicked");
    }
</script>

