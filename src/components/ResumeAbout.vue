<template>
  <div v-bind:id="[title]" v-bind:class="['card', 'card--' + title]">
    <header class="card__header">
      <svg
        class="card__icon"
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
      <h2>{{ title }}</h2>
    </header>

    <div class="card__content">
      <div class="text" v-html="content"></div>
      <a class="card__btn  btn" href="mailto:hello@mmaddocks.com" role="button"
        >Email me</a
      >
      <footer class="card__footer">
        <a
          v-bind:class="['social__icon', social.icon]"
          v-for="social in socials"
          v-bind:key="social.id"
          v-bind:href="social.link"
          target="_blank"
        >
          <font-awesome-icon v-bind:icon="['fab', social.icon]" />
        </a>
      </footer>
      <!-- <font-awesome-icon :icon="['fa', 'dog']" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeAbout",
  data() {
    return {
      title: "about",
      content: [
        "<p>A creative thinking, detail oriented and self-motivated Front-end Web Developer and Designer.</p>",
        "<p>Armed with an array of technical and personal skills to compliment a progressive development team. Passionate about creating engaging ‘mobile first’ visual communication, to deliver exceptional user experiences.</p>"
      ].join(""),
      socials: [
        {
          icon: "linkedin-in",
          link: "https://uk.linkedin.com/in/markmaddocks1"
        },
        {
          icon: "twitter",
          link: "https://twitter.com/mark_maddocks"
        },
        {
          icon: "github",
          link: "https://github.com/mmaddocks"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.card--about {
  text-align: center;

  .text {
    text-align: left;
  }

  .card__btn {
    width: 150px;
    display: inline-block;
    margin: 40px 0;
    border-radius: 2px;
    font-weight: 300;
    text-decoration: none;
  }

  .card__footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 15px;
    border-top: 1px solid $light-grey;
  }

  .social__icon {
    margin: 0 4px;
    font-size: 1.5em;
    color: $light-grey;
    @include transition(color);

    &:hover {
      @include transition(color);

      &.linkedin-in {
        color: $linkedin;
      }
      &.twitter {
        color: $twitter;
      }
      &.github {
        color: $github;
      }
    }
  }
}
</style>
