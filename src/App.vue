<template>
  <h1>Визуализация структуры</h1>
  <div class="links">
    <router-link :to="{ name: 'TotalCount' }">Общий итог</router-link>
    <router-link :to="{ name: 'RegionCount' }">Итог по регионам</router-link>
  </div>
  <router-view></router-view>
</template>
<script>
import dataObj from '@/inc/data.js';
import TotalCount from "@/views/TotalCount";
export default {
  name: 'App',
  data() {
    return {
      data: dataObj
    }
  },
  mounted() {
    this.$store.dispatch('readFile');
  },
  components: {
    TotalCount
  }
}
</script>

<style>
.links {
  text-align: center;
}
.links a {
  margin: 0 1em;
}
body {
  margin: 0;
}
h1 {
  font-family: sans-serif;
  color: #4a148c;
  text-align: center;
}

a {
  text-decoration: none;
  color: #444;
  font-family: sans-serif;
  font-weight: 600;
}
a:hover {
  text-decoration: underline;
}

a:active {
  color: #444444e3;
}
</style>
