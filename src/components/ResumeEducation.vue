<template>
  <div v-bind:class="['card', 'card--' + title]">
    <header class="card__header">
      <font-awesome-icon class="card__icon" v-bind:icon="['fas', icon]" />
      <h2>{{ title }}</h2>
    </header>
    <div class="card__content">
      <div v-for="school in schools" v-bind:key="school.id" class="school">
        <header class="school__header">
          <div class="header__left">
            <h3 class="school__certificate">{{ school.certificate }}</h3>
            <h4 class="school__institute">{{ school.institute }}</h4>
          </div>
          <div class="header__right">
            <h3 class="school__date">{{ school.date }}</h3>
            <h4 class="school__location">{{ school.location }}</h4>
          </div>
        </header>
        <div class="school__content" v-html="school.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeEducation",
  data() {
    return {
      title: "education",
      icon: "graduation-cap",
      schools: [
        {
          certificate: "Diploma of Website Development",
          institute: "TAFE",
          date: "2015 - 2017",
          location: "Sydney, Australia",
          content: [
            "<p>Comprehensive grounding in the complete development cycle, from wire-framing and UX designs through to development, testing and deployment.</p>"
          ].join("")
        },
        {
          certificate: "BA (HONS) Graphic Design and Visual Comms",
          institute: "Sheffield Hallam University",
          date: "2007 - 2010",
          location: "Sheffield, UK",
          content: [
            "<p>Bachelor Degree with Honours focussed around the development of brands through the power of visual communication and graphic design. Core areas included - branding/corporate identity, typography, layout design, UX, illustration and advertising.</p>"
          ].join("")
        },
        {
          certificate: "A-Levels",
          institute: "Churchill Academy",
          date: "2005 - 207",
          location: "Bristol, UK",
          content: [
            '<p class="course">Business <span>A</span></p>',
            '<p class="course">Product Design <span>B</span></p>',
            '<p class="course">Fine Art <span>A</span></p>'
          ].join("")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.card--education {
  .school {
    margin-bottom: 50px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .school__header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px dashed $light-grey;
    }

    .header__left {
      margin-right: 15px;
      text-align: left;
    }

    .header__right {
      margin-left: 15px;
      text-align: right;
    }

    .school__institute {
      color: $blue;
    }

    &:last-of-type {
      .school__content {
        width: 50%;
      }

      .course {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
