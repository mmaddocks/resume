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
          role: "Front-end Web Developer & Web Designer",
          date: "2017 - present",
          location: "London, UK",
          content: [
            "<p>Part of the team responsible for building, designing and maintaining Companyapp Presenter - a browser based and mobile/tablet presentation product. Agency side - designing and building client websites.</p>",
            '<h5 class="content__heading">Design</h5>',
            "<ul>",
            "<li>Revamped UI elements of Companyapp Presenter system and mobile/ tablet app.</li>",
            "<li>UX wireframes and layout design for 5 client websites - including asset and logo design.</li>",
            "<li>Designed 12+ presentation themes and assets for use in Presenter system.</li>",
            "<li>Designing presentation layouts to work in two key views (16:9 and 4:3 aspect ratios) with no vertical scroll.</li>",
            "</ul>",
            '<h5 class="content__heading">Development</h5>',
            "<ul>",
            "<li>Built 3 mobile-first client websites, deployed on Wordpress and fully browser tested to be compatible with IE11 upwards.</li>",
            "<li>Redesigned and built Presenter templates to run on Drupal CMS.</li>",
            "<li>Built 50+ custom client presentations - utilising CSS and JavaScript animations for interactive, dynamic slides and presentations.</li>",
            "</ul>",
            '<h5 class="content__heading">Support & Collaboration</h5>',
            "<ul>",
            "<li>Responsible for managing a Contract Graphic Designer and Junior Front-end Developer.</li>",
            "<li>Attending client meetings to scope out project and build relationships.</li>",
            "<li>Training clients on the use of Companyapp Presenter and Wordpress CMS for client sites.</li>",
            "<li>Responding to support tickets and testing / QA for all presentations and client websites.</li>",
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
    }
  }
}
</style>
