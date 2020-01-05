<template>
  <div v-bind:class="['card', 'card--' + title]">
    <header class="card__header">
      <font-awesome-icon class="card__icon" v-bind:icon="icon" />
      <h2>{{ title }}</h2>
    </header>
    <div class="card__content">
      <div
        v-for="skill in skills"
        v-bind:class="['skills', 'skills--' + skill.key]"
        v-bind:key="skill.id"
      >
        <header class="skills__header">
          <h3 class="skills__title">{{ skill.title }}</h3>
          <font-awesome-icon icon="search" />
        </header>
        <ul class="skills__list">
          <li
            v-for="skill in skill.list"
            v-bind:key="skill.id"
            class="skills__item"
          >
            <font-awesome-icon
              class="skills__icon"
              v-bind:icon="[skill.iconGroup, skill.icon]"
            />
            <span class="skills__name">{{ skill.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeSkills",
  data() {
    return {
      title: "skills",
      icon: "user-astronaut",
      skills: [
        {
          title: "Professional Skills",
          key: "professional",
          list: [
            {
              icon: "html5",
              iconGroup: "fab",
              name: "HTML5"
            },
            {
              icon: "css3-alt",
              iconGroup: "fab",
              name: "CSS & SASS"
            },
            {
              icon: "js-square",
              iconGroup: "fab",
              name: "JavaScript & jQuery"
            },
            {
              icon: "php",
              iconGroup: "fab",
              name: "PHP"
            },
            {
              icon: "wordpress",
              iconGroup: "fab",
              name: "Wordpress"
            },
            {
              icon: "git",
              iconGroup: "fab",
              name: "GIT"
            },
            {
              icon: "adobe",
              iconGroup: "fab",
              name: "Adobe Creative Cloud"
            },
            {
              icon: "adobe",
              iconGroup: "fab",
              name: "Adobe XD"
            },
            {
              icon: "figma",
              iconGroup: "fab",
              name: "Figma"
            }
          ]
        },
        {
          title: "Personal Skills",
          key: "personal",
          list: [
            {
              icon: "comments",
              iconGroup: "far",
              name: "Communication"
            },
            {
              icon: "paint-brush",
              iconGroup: "fas",
              name: "Creativity"
            },
            {
              icon: "search-plus",
              iconGroup: "fas",
              name: "Attention to detail"
            },
            {
              icon: "users",
              iconGroup: "fas",
              name: "Team work & collaboration"
            },
            {
              icon: "handshake",
              iconGroup: "fas",
              name: "Dedication"
            },
            {
              icon: "code-branch",
              iconGroup: "fas",
              name: "Flexible & adaptable"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.card--skills {
  .skills--professional {
    margin-bottom: 40px;
  }

  .skills__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    border: 1px solid $blue;
    border-radius: 2px 2px 0 0;

    svg {
      color: $blue;
    }
  }

  .skills__list {
    margin: 0;
    padding: 15px;
    border: 1px solid $light-grey;
    border-top: none;

    .skills__item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &:last-of-type {
        margin-bottom: 0;
      }

      &::before {
        content: none;
      }
    }

    .skills__icon {
      width: 30px;
      margin-right: 10px;
      font-size: 1.5em;
      color: $light-grey;
    }
  }
}
</style>
