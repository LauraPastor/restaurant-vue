<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

.logo {
  width: 100px;
}

.add {
  padding-top: 20px;
}

.register,
.add {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
}

.register input,
.add input {
  margin-bottom: 10px;
  padding: 5px;
  border: #014389 1px solid;
}

.register button,
.add button {
  border-radius: 25px;
  padding: 5px;
  background-color: #014389;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
