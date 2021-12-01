<template lang="html">
  <div>
    <h1>Home</h1>
    <p>Hello world</p>
    <p>{{count}}</p>
    <button @click="count++">click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {count: 0}
  }
}
</script>

<style lang="css" scoped>
</style>
