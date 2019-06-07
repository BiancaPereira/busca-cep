<template>
  <button aria-label="Fechar" @click="this.closeBtn">x</button>
</template>

<script>
export default {
  methods: {
    closeBtn () {
      const div = document.querySelector(`.${this.className}`)
      div.style.display = 'none'
    }
  },
  props: [
    'className'
  ]
}
</script>

<style scoped>
button {
  position: absolute;
  right: 15px;
  border: 0;
  background: transparent;
  padding: 0;
  font-weight: bold;
  font-size: 1.4rem;
  text-shadow: 0 0 6px #000;
  color: #fff;
}
button:hover {
  cursor: pointer;
}
</style>
