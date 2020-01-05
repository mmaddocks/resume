<template>
  <div id="app" class="resume">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <ResumeHero />

    <div class="grid">
      <div class="grid__item">
        <ResumeAbout />
      </div>
      <div class="grid__item">
        <ResumeExperience />
      </div>
      <div class="grid__item">
        <ResumeSkills />
      </div>
      <div class="grid__item">
        <ResumeEducation />
      </div>
      <div class="grid__item">
        <ResumeInterests />
      </div>
    </div>
  </div>
</template>

<script>
import ResumeHero from "./components/ResumeHero.vue";
import ResumeAbout from "./components/ResumeAbout.vue";
import ResumeExperience from "./components/ResumeExperience.vue";
import ResumeSkills from "./components/ResumeSkills.vue";
import ResumeEducation from "./components/ResumeEducation.vue";
import ResumeInterests from "./components/ResumeInterests.vue";

export default {
  name: "app",
  components: {
    ResumeHero,
    ResumeAbout,
    ResumeExperience,
    ResumeSkills,
    ResumeEducation,
    ResumeInterests
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

svg {
  width: 100%;
  height: auto;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
}

.resume {
  width: 100%;
}
</style>
