<template>
  <a v-bind:href="href" v-on:click.prevent="scroll">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "ScrollLink",
  props: ["href"],
  methods: {
    scroll() {
      // document.querySelector(this.href).scrollIntoView({ behavior: "smooth" });

      // Emits event 'clicked'
      this.$emit("clicked");

      const element = document.querySelector(this.href);
      const yOffset = -30;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
};
</script>
