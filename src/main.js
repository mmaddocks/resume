/**
 * Hero / welcome component
 */
Vue.component('hero', {
  data() {
    return {
      title: 'Mark Maddocks',
      keywords: [
        'Front-end Web Developer',
        'Web Designer',
      ],
      typeSpeed: 50,
      typeValue: '',
      typeIndex: 0,
      show: false,
    }
  },
  methods: {
    typeWriter: function() {

      var txt = this.title;

      if ( this.typeIndex < txt.length ) {
        document.querySelector( '.search__title' ).innerHTML += txt.charAt(this.typeIndex);
        console.log( txt.charAt(this.typeIndex) );
        this.typeIndex++;

      }

      setTimeout( this.typeWriter, this.typeSpeed );
    },
  },
  mounted: function() {
    this.show = true;
    //this.typed();
    //setTimeout( this.typeWriter, 5000 );
  },
  created: function() {
    setTimeout( this.typeWriter, 1750 );
  },
  template: `
    <transition name="fade">
      <div class="resume__hero" v-if="show">
        <div class="search">
          <h1 class="search__title"></h1>
          <i class="search__icon  fas fa-search"></i>
        </div>
      </div>
      <div class="element"></div>
    </transition>
  `
 });

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


/**
 * card-skills component
 */
Vue.component('card-skills', {
  data() {
    return {
      item: {
        id: 3,
        title: 'skills',
        icon: 'fa-user-astronaut',
        skills: [
          {
            title: 'Professional Skills',
            key: 'professional',
            list: [
              {
                icon: 'fab fa-html5',
                name: 'HTML5'
              },
              {
                icon: 'fab fa-css3-alt',
                name: 'CSS & SASS',
              },
              {
                icon: 'fab fa-js-square',
                name: 'JavaScript & jQuery',
              },
              {
                icon: 'fab fa-php',
                name: 'PHP',
              },
              {
                icon: 'fab fa-wordpress',
                name: 'Wordpress',
              },
              {
                icon: 'fab fa-git',
                name: 'GIT',
              },
              {
                icon: 'fab fa-adobe',
                name: 'Adobe Creative Cloud',
              },
              {
                icon: 'fab fa-adobe',
                name: 'Adobe XD',
              },
              {
                icon: 'fab fa-figma',
                name: 'Figma',
              }
            ]
          },
          {
            title: 'Personal Skills',
            key: 'personal',
            list: [
              {
                icon: 'far fa-comments',
                name: 'Communication'
              },
              {
                icon: 'fas fa-paint-brush',
                name: 'Creativity',
              },
              {
                icon: 'fas fa-search-plus',
                name: 'Attention to detail',
              },
              {
                icon: 'fas fa-users',
                name: 'Team work & collaboration',
              },
              {
                icon: 'fas fa-handshake',
                name: 'Dedication',
              },
              {
                icon: 'fas fa-code-branch',
                name: 'Flexible & adaptable',
              }
            ]
          },

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

        <div v-for="skill in item.skills" v-bind:class="['skills', 'skills--' + skill.key ]">
          <header class="skills__header">
            <h3 class="skills__title">{{ skill.title }}</h3>
            <i class="fas fa-search"></i>
          </header>
          <ul class="skills__list">
            <li v-for="skill in skill.list" class="skills__item">
              <i v-bind:class="['skills__icon', skill.icon]"></i>
              <span class="skills__name">{{ skill.name }}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  `
});

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
 * card-interests component
 */
Vue.component('card-interests', {
  data() {
    return {
      item: {
        id: 5,
        title: 'interests',
        icon: 'fa-mountain',
        interests: [
          {
            icon: String.fromCodePoint(0x1F3C4),
            title: 'Surfing'
          },
          {
            icon: String.fromCodePoint(0x26F7),
            title: 'Skiing'
          },
          {
            icon: String.fromCodePoint(0x1f9d7, 0x200d, 0x2642, 0xfe0f),
            title: 'Climbing'
          },
          {
            icon: String.fromCodePoint(0x1F3C3),
            title: 'Running'
          },
          {
            icon: String.fromCodePoint(0x1F3CA),
            title: 'Swimming'
          },
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
        <div v-for="interest in item.interests" class="interest">
          <i class="interest__icon">{{ interest.icon }}</i>
          <h3 class="interest__title">{{ interest.title }}</h3>
        </div>
      </div>
    </div>
  `
});

/**
 * card-references component
 */
Vue.component('card-references', {
  data() {
    return {
      item: {
        id: 6,
        title: 'References',
        icon: 'fa-edit',
        content: 'Available on request'
      }
    }
  },
  template: `
    <div v-bind:class="['card', 'card--' + item.title ]">
      <header class="card__header">
        <i v-bind:class="['card__icon', 'far', item.icon]"></i>
        <h2>{{ item.title }}</h2>
      </header>
      <div class="card__content">
        <p>{{item.content}}</p>
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
    // components: [
    //   'card-about',
    //   'card-experience',
    //   'card-skills',
    //   'card-education',
    //   'card-interests',
    //   'card-references'
    // ],
    components: {
      hero: 'hero',
      cards: [
        'card-about',
        'card-experience',
        'card-skills',
        'card-education',
        'card-interests',
        'card-references'
      ]
    }
  },
  template: `
    <div class="resume">
      <hero></hero>
      <div class="grid">
        <div v-for="card in components.cards" class="grid__item">
          <component
            v-bind:is="card"
            v-bind:key="card.id">
          </component>
        </div>
      </div>
    </div>
  `
});
