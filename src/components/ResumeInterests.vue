<template>
  <div v-bind:class="['card', 'card--' + title]">
    <header class="card__header">
      <font-awesome-icon class="card__icon" v-bind:icon="['fas', icon]" />
      <h2>{{ title }}</h2>
    </header>
    <div class="card__content">
      <div
        v-for="interest in interests"
        v-bind:key="interest.id"
        class="interest"
      >
        <i class="interest__icon">{{ interest.icon }}</i>
        <h3 class="interest__title">{{ interest.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeInterests",
  data() {
    return {
      title: "interests",
      icon: "mountain",
      interests: [
        {
          icon: String.fromCodePoint(0x1f3c4),
          title: "Surfing"
        },
        {
          icon: String.fromCodePoint(0x26f7),
          title: "Skiing"
        },
        {
          icon: String.fromCodePoint(0x1f9d7, 0x200d, 0x2642, 0xfe0f),
          title: "Climbing"
        },
        {
          icon: String.fromCodePoint(0x1f3c3),
          title: "Running"
        },
        {
          icon: String.fromCodePoint(0x1f3ca),
          title: "Swimming"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.card--interests {
  .card__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .interest {
    flex-grow: 1;
    text-align: center;

    .interest__icon {
      font-style: normal;
      font-size: 5em;
    }

    .interest__title {
      display: none;
    }
  }
}
</style>
