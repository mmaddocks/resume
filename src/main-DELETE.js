/**
 * card-about component
 */
Vue.component('card-about', {
  data() {
    return {
      item: {
        id: 1,
        title: 'about',
        icon: '',
        content: [
          '<p>A creative thinking, enthusiastic and self-motivated front-end web developer and designer.</p>',
          '<p>Focussed on visual communication, human interactions and user experience. Passionate about simplistic design and a mobile first approach.</p>',
          '<p>Currently studying in final semester - Diploma of Web Development.</p>'].join(''),
        socials: [
          {
            icon: 'linkedin',
            link: 'https://uk.linkedin.com/in/markmaddocks1',
          },
          {
            icon: 'twitter',
            link: 'https://twitter.com/mark_maddocks'
          },
          {
            icon: 'github',
            link: 'https://github.com/mmaddocks'
          },
        ]
      }
    }
  },
  template: `
    <div v-bind:class="['card', 'card-' + item.title ]">
      <header class="card__header">{{ item.id }}: {{ item.title }}</header>
      <div class="card__content">
        <div class="text" v-html="item.content"></div>
        <a href="mailto:hello@mmaddocks.com" role="button">Email me</a
        <footer>
          <a v-for="social in item.socials" v-bind:href="social.link">
            <i>{{ social.icon }}</i>
          </a>
        </footer>
      </div>
    </div>
  `
});


/**
 * card-experience component
 */
Vue.component('card-experience', {
  data() {
    return {
      item: {
        id: 2,
        title: 'experience',
        icon: '',
        jobs: [
          {
            company: 'Apple',
            role: 'Technical Specialist',
            date: '2015-2017',
            location: 'Australia',
            keywords: 'iOS | Troubleshooting | Team Work | Communication | Customer Facing',
            content: 'Apple Certified iOS Technician. Working in a fast paced team environment to troubleshoot and resolve technical issues with customer\'s iOS devices, whilst delivering a high level of customer service.'
          },
          {
            company: 'Tibco Software',
            role: 'Business Development (Contract)',
            date: '2014-2015',
            location: 'Australia',
            keywords: 'Software Solutons | Lead Generation | Support Marketing | Database Admin',
            content: 'Qualified enquiries, conveyed TIBCO Software\'s solutions and aligned with customer\'s scenario. Worked alongside marketing and sales teams to ensure strong communication and attended customer facing events.'
          }
        ]
      }
    }
  },
  template: `
    <div v-bind:class="['card', 'card-' + item.title ]">
      <header class="card__header">{{ item.id }}: {{ item.title }}</header>
      <div class="card__content">
        <div v-for="job in item.jobs" class="job">
          <header>{{ job.company }}, {{ job.role }}</header>
          <p>{{ job.content }}</p>
        </div>
      </div>
    </div>
  `
});

/**
 * Vue initialisation
 */
var app = new Vue({
  el: '#app',
  template: `
    <div class="resume">
      <section class="resume__hero"></section>
      <section class="cards-container">
        <card-about></card-about>
        <card-experience></card-experience>
        <card-experience></card-experience>
        <card-about></card-about>
      </section>
    </div>
  `
});
