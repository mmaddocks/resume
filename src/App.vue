<template>
  <div id="app" class="resume">
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

    <footer>
      <scroll-link href="#app" class="scroll-link">
        <span class="rocket">&#x1F680;</span>
        <span>Back to the top</span>
      </scroll-link>
    </footer>
  </div>
</template>

<script>
import ResumeHero from "./components/ResumeHero.vue";
import ResumeAbout from "./components/ResumeAbout.vue";
import ResumeExperience from "./components/ResumeExperience.vue";
import ResumeSkills from "./components/ResumeSkills.vue";
import ResumeEducation from "./components/ResumeEducation.vue";
import ResumeInterests from "./components/ResumeInterests.vue";
import ScrollLink from "./components/ScrollLink";

export default {
  name: "app",
  components: {
    ResumeHero,
    ResumeAbout,
    ResumeExperience,
    ResumeSkills,
    ResumeEducation,
    ResumeInterests,
    ScrollLink
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
  display: block;
}

.resume {
  width: 100%;

  footer {
    width: 100%;
    max-width: 1100px;
    margin: 100px auto 40px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;

    .scroll-link {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: $mid-grey;
      @include transition(all);

      .rocket {
        font-size: 4em;
        transform: rotate(-45deg) translateX(20px);
        @include transition(all);
      }

      &:hover {
        color: $blue;

        .rocket {
          transform: rotate(-45deg) translate(35px, -15px);
        }
      }
    }
  }
}
</style>
