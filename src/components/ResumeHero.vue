<template>
  <transition name="fade">
    <div
      v-if="resumeHero.isShowing"
      class="resume__hero"
      data-aos="fade-out"
      data-aos-anchor-placement="top-center"
      data-aos-offset="500"
      data-aos-duration="1000"
    >
      <a class="logo" href="/">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="600px"
          height="504.108px"
          viewBox="-320.682 -171.974 600 504.108"
          enable-background="new -320.682 -171.974 600 504.108"
          xml:space="preserve"
        >
          <g>
            <path
              fill="currentColor"
              d="M-188.957-120.642c-23.104,0-34.611,10.602-34.611,31.806V32.306c0,26.039-12.281,41.301-36.853,45.783
          		c24.59,4.098,36.853,19.184,36.853,45.205v131.163c0,9.722,2.663,16.403,8.105,20.131c5.398,3.745,15.719,5.608,30.988,5.608
          		v51.902h-18.979c-50.611,0-75.93-24.579-75.93-73.704V137.781c0-12.271-2.233-20.889-6.715-25.934
          		c-4.439-5.063-11.517-7.526-21.205-7.526h-13.379V52.402h13.397c9.688,0,16.765-2.602,21.213-7.823
          		c4.474-5.172,6.707-14.118,6.707-26.778V-98.287c-0.018-49.132,25.284-73.687,75.912-73.687h18.979v51.903
          		C-185.598-120.431-187.11-120.642-188.957-120.642z"
            />
          </g>
          <g>
            <path
              fill="currentColor"
              d="M162.082,332.135h-18.989v-51.921c15.262,0,25.58-1.862,30.996-5.608
          		c5.397-3.691,8.088-10.408,8.088-20.097V123.328c0-26.021,12.325-41.123,36.887-45.203c-24.562-4.482-36.887-19.744-36.887-45.783
          		V-88.809c0-11.543-3.059-19.824-9.195-24.835c-6.119-5.002-12.201-7.542-18.145-7.542h-1.652l-10.092,1.116v-51.903h18.989
          		c50.635,0,75.953,24.571,75.953,73.687V17.835c0,12.66,2.251,21.591,6.682,26.778c4.466,5.222,11.534,7.823,21.204,7.823h13.397
          		v51.902H265.92c-9.636,0-16.738,2.532-21.204,7.561c-4.431,4.993-6.682,13.68-6.682,25.952v120.579
          		C238.035,307.52,212.716,332.135,162.082,332.135z"
            />
          </g>
          <g>
            <path
              fill="currentColor"
              d="M-39.447,116.296l-68.659-170.688h37.222l51.955,128.948L33.098-54.393h37.186L1.625,116.296H-39.447z"
            />
          </g>
        </svg>
      </a>

      <div class="search">
        <div class="primary">
          <vue-typed-js :strings="[title]" :startDelay="1500">
            <h1 class="primary__title typing"></h1>
          </vue-typed-js>

          <font-awesome-icon class="search__icon" icon="search" />
        </div>

        <div class="dropdown">
          <div class="dropdown__item">
            <vue-typed-js
              :strings="[interests[0], interests[1], interests[2], keywords[0]]"
              :startDelay="1500"
              @onComplete="showNextDropdown()"
            >
              <h2 class="typing"></h2>
            </vue-typed-js>
          </div>

          <div v-if="dropdownItem.isShowing" class="dropdown__item">
            <vue-typed-js
              :strings="[keywords[1]]"
              @onComplete="showScroll(hideCursor)"
            >
              <h2 class="typing"></h2>
            </vue-typed-js>
          </div>
        </div>
        <!-- .dropdown -->
      </div>
      <!-- .search -->

      <transition name="fade-down">
        <scroll-link
          v-if="scrollLink.isShowing"
          href="#about"
          class="scroll-link"
          style="transition-delay: 500ms"
          @clicked="handleClick"
        >
          <div class="icon-scroll"></div>
          <span>Learn more</span>
        </scroll-link>
      </transition>
    </div>
  </transition>
</template>

<script>
import ScrollLink from "./ScrollLink";

export default {
  name: "ResumeHero",
  components: {
    ScrollLink
  },
  data() {
    return {
      title: "Mark ^1000 Maddocks",
      interests: ["Surfer", "Skier", "Climber"],
      keywords: ["Frontend Web Developer", "UX Designer"],
      resumeHero: {
        isShowing: false
      },
      dropdownItem: {
        isShowing: false
      },
      scrollLink: {
        isShowing: false
      }
    };
  },
  mounted: function() {
    this.fadeIn();
  },
  methods: {
    fadeIn() {
      this.resumeHero.isShowing = true;
    },
    showNextDropdown() {
      this.dropdownItem.isShowing = true;
    },
    showScroll(callback) {
      this.scrollLink.isShowing = true;
      callback();
    },
    hideCursor() {
      var divsToHide = document.querySelectorAll(".typed-cursor");
      // for (var i = 0; i < divsToHide.length; i++) {
      //   divsToHide[i].style.visibility = "hidden";
      // }
      for (let i = 0; i < divsToHide.length; i++) {
        setTimeout(function() {
          divsToHide[i].style.visibility = "hidden";
        }, 2000);
      }
    },
    handleClick() {
      document.querySelector(".grid__item").removeAttribute("data-aos");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.resume__hero {
  width: 100%;
  display: flex;
  position: relative;
  min-height: 100vh;
  pointer-events: all; // overide AOS

  /* Safari 10.1+ */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      /* mobile viewport bug fix for mobile safari */
      min-height: -webkit-fill-available;
    }
  }

  .logo {
    width: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    color: $light-grey;
    @include transition(all);

    &:hover {
      color: $blue;
    }
  }

  .search {
    width: 90%;
    max-width: 375px;
    margin: 0 auto;
    margin-top: 25vh;

    .primary {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      background-color: #fff;
      border: 1px solid $light-grey;
      border-radius: 2px 2px 0 0;
      min-height: 70px;
      @include transition(all);

      &:hover {
        border-color: $blue;
      }

      .primary__title {
        margin: 0;
      }

      .typed-cursor {
        font-size: 2em;
      }

      .search__icon {
        width: 20px;
        height: auto;
        color: $blue;
      }
    }

    .dropdown {
      width: 100%;
      border: 1px solid $light-grey;
      border-top: none;

      .dropdown__item {
        padding: 10px 15px;

        &:nth-of-type(2) {
          margin-top: -15px;
        }

        h2 {
          color: $mid-grey;
        }
      }

      .typed-cursor {
        font-size: 1.5em;
      }
    }
  }

  .scroll-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.044em;
    font-size: 0.875em;
    color: $blue;
    @include transition(all);

    &:hover {
      transform: translateY(20%);
    }

    span {
      margin-bottom: 10px;
    }

    svg {
      width: 20px;
    }

    .icon-scroll {
      width: 30px;
      height: 52.5px;
      box-shadow: inset 0 0 0 1px $blue;
      border-radius: 18.75px;
      margin-bottom: 10px;

      &::before {
        content: "";
        width: 6px;
        height: 6px;
        position: absolute;
        left: 50%;
        background: $blue;
        margin-left: -3px;
        top: 6px;
        border-radius: 3px;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-name: scroll;
      }

      @keyframes scroll {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(34.5px);
        }
      }
    }
  }
}

// Fade animation for mounted hook
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

//Fade up animation for arrow
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 1s ease-out;
}

.fade-down-enter,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

// Custom AOS animation to animate out content
// [data-aos="fade-out"] {
html:not(.no-js) [data-aos^="fade"][data-aos="fade-out"] {
  opacity: 1;
  transition-property: opacity;
  &.aos-animate {
    opacity: 0;
  }
}
</style>
