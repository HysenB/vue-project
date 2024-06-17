<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, shallowRef } from 'vue';
import router from './router';
import layouts from './layouts';

const layout = shallowRef('div');

router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || 'div';
})

provide('app:layout', layout);

</script>

<template>
  <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Posts</RouterLink> -
        <RouterLink to="/authors">Authors</RouterLink>
      </nav>
    </div>
  </header>

  <component :is="layout || 'div'">
    <!-- <RouterView /> -->
    <router-view />
  </component>
</template>

<style>
.navbar {
  background-color: lightgreen;
  padding: 1.2rem;
  max-width: 1100px;
  margin: auto;
}
</style>