<template>
  <div v-bind:class="['card', 'card--' + title]">
    <header class="card__header">
      <font-awesome-icon class="card__icon" v-bind:icon="['fas', icon]" />
      <h2>{{ title }}</h2>
    </header>
    <div class="card__content">
      <div class="job" v-for="job in jobs" v-bind:key="job.id">
        <header class="job__header">
          <div class="header__left">
            <h3 class="job__role">{{ job.role }}</h3>
            <h4 class="job__company">{{ job.company }}</h4>
          </div>
          <div class="header__right">
            <h3 class="job__date">{{ job.date }}</h3>
            <h4 class="job__location">{{ job.location }}</h4>
          </div>
        </header>
        <div class="job__content" v-html="job.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeExperience",
  data() {
    return {
      title: "experience",
      icon: "briefcase",
      jobs: [
        {
          company: "Companyapp | BREAD Creative",
          role: "Frontend Web Developer & UX Designer",
          date: "2017 - present",
          location: "London, UK",
          content: [
            "<p>Companyapp - Part of the team responsible for building, designing and maintaining Communicator (a white-label mobile communications app) & Presenter (a browser based presentation product). BREAD Creative - designing and building client websites (agency side of the business).</p>",
            '<h5 class="content__heading">Design</h5>',
            "<ul>",
            "<li>Lead the design of <a href='https://companyapp.co.uk/communicator' target='_blank'>Communicator</a> (a white-label communications app) from UX wireframes through to high-fidelity mockups - utilising Figma for design and collaboration.</li>",
            "<li>Lead the redesign of the <a href='https://companyapp.co.uk' target='_blank'>Companyapp</a> website.</li>",
            "<li>Redesigned UI elements of the <a href='https://companyapp.co.uk/presenter' target='_blank'>Presenter</a> product and tablet app.</li>",
            "<li>UX wireframes and layout design for 5 client websites - including theme/branding, asset and logo design.</li>",
            "<li>Designed 15+ presentation themes and assets for use in Presenter.</li>",
            "<li>Designing presentation layouts to work in two fixed aspect ratios (16:9 and 4:3) with no vertical scroll.</li>",
            "</ul>",
            '<h5 class="content__heading">Development</h5>',
            "<ul>",
            "<li>Lead the design build of <a href='https://companyapp.co.uk/communicator' target='_blank'>Communicator</a> - built with React Native. Key design considerations included the handling of many screen resolutions, supporting landscape orientation and iOS/Android UI differences.</li>",
            "<li>Lead the design build of Communicator web app (PWA) - built in React.</li>",
            "<li>Lead the design build of the <a href='https://companyapp.co.uk' target='_blank'>Companyapp</a> website.</li>",
            "<li>Built 3 mobile-first client websites, deployed on Wordpress and browser tested to be compatible with IE11 upwards.</li>",
            "<li>Built 50+ custom client presentations - utilising CSS and JavaScript animations for interactive, dynamic slides and presentations.</li>",
            "<li>Designed and built <a href='https://companyapp.co.uk/presenter' target='_blank'>Presenter</a> templates to operate on Drupal CMS.</li>",
            "</ul>",
            '<h5 class="content__heading">Support & Collaboration</h5>',
            "<ul>",
            "<li>Responsible for managing a contract Graphic Designer and Junior Frontend Developer.</li>",
            "<li>Attending client meetings to scope out project and build relationships.</li>",
            "<li>Training clients on the use and administration of Communicator, Presenter and Wordpress CMS (for client websites).</li>",
            "<li>Responding to customer support tickets</li>",
            "<li>Testing / QA for all products, presentations and client websites.</li>",
            "<li>Responsible for managing the administration of projects on JIRA.</li>",
            "</ul>"
          ].join("")
        },
        {
          company: "Apple",
          role: "Technical Specialist",
          date: "2015 - 2017",
          location: "Sydney, Australia & London, UK",
          content: [
            "<p>Apple Certified iOS Technician | Troubleshooting | Team | Communication</p>",
            "<p>Working in a fast paced team environment to troubleshoot and resolve technical issues with customer’s iOS devices, whilst delivering a high level of customer service. Clearly articulating and translating technical concepts to non-technical customers.</p>",
            "<p>Influenced new processes to improve customer journey and assisted with training new colleagues on in house systems and troubleshooting strategies.</p>"
          ].join("")
        },
        {
          company: "TIBCO Software Inc.",
          role: "Business Development (Contract)",
          date: "2014 - 2015",
          location: "Sydney, Australia",
          content: [
            "<p>Software Solutions | Database Admin | Support Marketing | Lead Generation</p>",
            "<p>Proposed TIBCO Software’s solutions to meet customer’s projects. Worked alongside marketing and sales teams to ensure technical compliance and meeting customers at various events.</p>"
          ].join("")
        },
        {
          company: "Six Degrees / Apps World",
          role: "Relationship Manager",
          date: "2011 - 2014",
          location: "UK",
          content: [
            "<p>Account Management | Relationship Building | Communication</p>",
            "<p>Founding member of the mobile apps event and team that helped lead to the acquisition by a publicly listed company.</p>",
            "<p>Built new relationships with world leading global tech companies, such as Facebook, Amazon and Dropbox to boost their developer outreach. Hosted customers at these major global conferences, exhibitions and hackathons.</p>"
          ].join("")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.card--experience {
  .job {
    margin-bottom: 50px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .job__header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px dashed $light-grey;

      .job__role {
        font-weight: 400;
        color: $mid-grey;
      }
    }

    .header__left {
      margin-right: 15px;
      text-align: left;
    }

    .header__right {
      margin-left: 15px;
      text-align: right;
    }

    .job__company {
      color: $blue;
    }

    .content__heading {
      font-size: 1em;
      text-transform: uppercase;
      color: $body-font-color;
      font-weight: 400;
      color: $mid-grey;
    }
  }
}
</style>
