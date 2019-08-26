<template>
  <div id="app">
    <div id="nav">
    <router-view/>
      
      <!-- <router-link to="/">Home</router-link> | 
       <router-link to="/about">About</router-link>-->
    </div>  
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    color: #b1b2b4;
    padding-bottom:10px;
    font-size:13px;
    &.router-link-exact-active {
      color: #344ab6;
      border-bottom:2px solid #344ab6;
    }
  }
}
</style>
