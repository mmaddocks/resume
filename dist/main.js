/**
 * card-about component
 */
Vue.component('card-about', {
  data() {
    return {
      item: {
        id: 1,
        title: 'about',
        content: [
          '<p>A creative thinking, detail oriented and self-motivated Front-end Web Developer and Designer.</p>',
          '<p>Armed with an array of technical and personal skills to compliment a progressive development team. Passionate about creating engaging ‘mobile first’ visual communication, to deliver exceptional user experiences.</p>',
          ].join(''),
        socials: [
          {
            icon: 'fa-linkedin-in',
            link: 'https://uk.linkedin.com/in/markmaddocks1',
          },
          {
            icon: 'fa-twitter',
            link: 'https://twitter.com/mark_maddocks'
          },
          {
            icon: 'fa-github',
            link: 'https://github.com/mmaddocks'
          },
        ]
      }
    }
  },
  template: `
    <div v-bind:class="['card', 'card--' + item.title ]">
      <header class="card__header">
        <img class="card__icon" alt="logo" src="dist/images/mm-logo.svg" />
        <h2>{{ item.title }}</h2>
      </header>
      <div class="card__content">
        <div class="text" v-html="item.content"></div>
        <a class="card__btn  btn" href="mailto:hello@mmaddocks.com" role="button">Email me</a>
        <footer class="card__footer">
          <a class="social__icon"
             v-for="social in item.socials"
             v-bind:href="social.link"
             target="_blank">
            <i v-bind:class="['fab', social.icon]"></i>
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
        icon: 'fa-briefcase',
        jobs: [
          {
            company: 'Companyapp | BREAD Creative',
            role: 'Front-end Web Developer & Web Designer',
            date: '2017 - present',
            location: 'London, UK',
            content: [
              '<p>Part of the team responsible for building, designing and maintaining Companyapp Presenter - a browser based and mobile/tablet presentation product. Agency side - designing and building client websites.</p>',
              '<h5 class="content__heading">Design</h5>',
              '<ul>',
                '<li>Revamped UI elements of Companyapp Presenter system and mobile/ tablet app.</li>',
                '<li>UX wireframes and layout design for 5 client websites - including asset and logo design.</li>',
                '<li>Designed 12+ presentation themes and assets for use in Presenter system.</li>',
                '<li>Designing presentation layouts to work in two key views (16:9 and 4:3 aspect ratios) with no vertical scroll.</li>',
              '</ul>',
              '<h5 class="content__heading">Development</h5>',
              '<ul>',
                '<li>Built 3 mobile-first client websites, deployed on Wordpress and fully browser tested to be compatible with IE11 upwards.</li>',
                '<li>Redesigned and built Presenter templates to run on Drupal CMS.</li>',
                '<li>Built 50+ custom client presentations - utilising CSS and JavaScript animations for interactive, dynamic slides and presentations.</li>',
              '</ul>',
              '<h5 class="content__heading">Support & Collaboration</h5>',
              '<ul>',
                '<li>Responsible for managing a Contract Graphic Designer and Junior Front-end Developer.</li>',
                '<li>Attending client meetings to scope out project and build relationships.</li>',
                '<li>Training clients on the use of Companyapp Presenter and Wordpress CMS for client sites.</li>',
                '<li>Responding to support tickets and testing / QA for all presentations and client websites.</li>',
              '</ul>'
            ].join(''),
          },
          {
            company: 'Apple',
            role: 'Technical Specialist',
            date: '2015 - 2017',
            location: 'Sydney, Australia & London, UK',
            content: [
              '<p>Apple Certified iOS Technician | Troubleshooting | Team | Communication</p>',
              '<p>Working in a fast paced team environment to troubleshoot and resolve technical issues with customer’s iOS devices, whilst delivering a high level of customer service. Clearly articulating and translating technical concepts to non-technical customers.</p>',
              '<p>Influenced new processes to improve customer journey and assisted with training new colleagues on in house systems and troubleshooting strategies.</p>'
            ].join(''),
          },
          {
            company: 'TIBCO Software Inc.',
            role: 'Business Development (Contract)',
            date: '2014 - 2015',
            location: 'Sydney, Australia',
            content: [
              '<p>Software Solutions | Database Admin | Support Marketing | Lead Generation</p>',
              '<p>Proposed TIBCO Software’s solutions to meet customer’s projects. Worked alongside marketing and sales teams to ensure technical compliance and meeting customers at various events.</p>'
            ].join(''),
          },
          {
            company: 'Six Degrees / Apps World',
            role: 'Relationship Manager',
            date: '2011 - 2014',
            location: 'UK',
            content: [
              '<p>Account Management | Relationship Building | Communication</p>',
              '<p>Founding member of the mobile apps event and team that helped lead to the acquisition by a publicly listed company.</p>',
              '<p>Built new relationships with world leading global tech companies, such as Facebook, Amazon and Dropbox to boost their developer outreach. Hosted customers at these major global conferences, exhibitions and hackathons.</p>'
            ].join(''),
          }
        ]
      }
    }
  },
  template: `
    <div v-bind:class="['card', 'card--' + item.title ]">
      <header class="card__header">
        <i v-bind:class="['card__icon', 'fas', item.icon]"></i>
        <h2>{{ item.title }}</h2>
      </header>
      <div class="card__content">
        <div v-for="job in item.jobs" class="job">
          <header class="job__header">
            <div class="header__left">
              <h3 class="job__role">{{ job.role }}</h3>
              <h4 class="job__company">{{ job.company }}</h4>
            </div>
            <div class=header__right>
              <h3 class="job__date">{{ job.date }}</h3>
              <h4 class="job__location">{{ job.location }}</h4>
            </div>
          </header>
          <div class="job__content" v-html="job.content"></div>
        </div>
      </div>
    </div>
  `
});


/* INSERT SKILLS BLOCK */

/**
 * card-experience component
 */
Vue.component('card-education', {
  data() {
    return {
      item: {
        id: 4,
        title: 'education',
        icon: 'fa-graduation-cap',
        schools: [
          {
            certificate: 'Diploma of Website Development',
            institute: 'TAFE',
            date: '2015 - 2017',
            location: 'Sydney, Australia',
            content: [
              '<p>Comprehensive grounding in the complete development cycle, from wire-framing and UX designs through to development, testing and deployment.</p>'
            ].join(''),
          },
          {
            certificate: 'BA (HONS) Graphic Design and Visual Comms',
            institute: 'Sheffield Hallam University',
            date: '2007 - 2010',
            location: 'Sheffield, UK',
            content: [
              '<p>Bachelor Degree with Honours focussed around the development of brands through the power of visual communication and graphic design. Core areas included - branding/corporate identity, typography, layout design, UX, illustration and advertising.</p>'
            ].join(''),
          },
          {
            certificate: 'A-Levels',
            institute: 'Churchill Academy',
            date: '2005 - 207',
            location: 'Bristol, UK',
            content: [
              '<p class="course">Business <span>A</span></p>',
              '<p class="course">Product Design <span>B</span></p>',
              '<p class="course">Fine Art <span>A</span></p>'
            ].join(''),
          }
        ]
      }
    }
  },
  template: `
    <div v-bind:class="['card', 'card--' + item.title ]">
      <header class="card__header">
        <i v-bind:class="['card__icon', 'fas', item.icon]"></i>
        <h2>{{ item.title }}</h2>
      </header>
      <div class="card__content">
        <div v-for="school in item.schools" class="school">
          <header class="school__header">
            <div class="header__left">
              <h3 class="school__certificate">{{ school.certificate }}</h3>
              <h4 class="school__institute">{{ school.institute }}</h4>
            </div>
            <div class=header__right>
              <h3 class="school__date">{{ school.date }}</h3>
              <h4 class="school__location">{{ school.location }}</h4>
            </div>
          </header>
          <div class="school__content" v-html="school.content"></div>
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
  data: {
    components: [
      'card-about',
      'card-experience',
      'card-education'
    ],
  },
  template: `
    <div class="resume">
      <section class="resume__hero"></section>
      <div class="grid">
        <div v-for="component in components" class="grid__item">
          <component
            v-bind:is="component"
            v-bind:key="component.id">
          </component>
        </div>
      </div>
    </div>
  `
});
