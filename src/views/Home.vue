<template>
<div class="containter">
  <div class="home">
    <Header />
    <div class="feature">
      <Title />
      <img
        src="../assets/banners/home.jpg"
        title="Steve Mengelkoch"
        alt="Steve Mengelkoch"
      />
    </div>
    <div class="content">
      <div class="bio">
        <p>
          <strong>Steve Mengelkoch</strong> is a webmaster, software engineer
          and inbound marketing professional. Throughout the past 15 years,
          Steve has been responsible for the design, development and management
          of some of the internets most elaborate and successful websites.
          Steve has worked primarily with businesses in the South Florida and Twin Cities area.
          <strong>Steve Mengelkoch</strong> has become a prominent voice in the
          local web and digital marketing scene helping customers and clients throughout the
          USA.
        </p>
        <p>
          Steve is always looking to expand his web and marketing knowledge by staying active in the tech community.
          Steve is aggressively seeking new connections throughout the United States and globally that share in his passion. If you are interested in
          learning more about.
          <strong
            >professional website design, development, app development, coding
            or SEO</strong
          >
          (Search Engine Optimization)
          <a href="/contact" title="Contact">contact Steve</a> today. Steve is
          alawys excited to work on new web and applications projects while helping
          grow and impove a companies online presence.
        </p>
      </div>
    </div>

    <div class="about-full-width">
      <div class="about-section">
        <div class="about-image">
          <img src="../assets/overview/about.png" />
        </div>
        <div class="about-content">
          <h3>About Steve Mengelkoch</h3>
          <p>
            Steve was born and raised in Minneapolis Minnesota. After graduating
            with a bachelors degree from the University of Minnesota in business
            and marketing Steve relocated to sunny Miami, FL. Steve is an
            experienced senior full stack developer looking to grow his I.T.
            skills and knowledge at every opprotunity.
          </p>
          <div class="about-button">
            <a href="/about" title="About Steve"
              ><button>About Steve Mengelkoch</button></a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="resume-full-width">
      <div class="resume-section">
        <div class="resume-image">
          <img src="../assets/overview/resume.png" />
        </div>
        <div class="resume-content">
          <h3>Steve Mengelkoch's Resume</h3>

          <p>
            Steve Mengelkoch is a professional webmaster, computer programmer
            and technology fanatic. Working as a professional coder and
            programmer for over 10 years, Steve has established himself as
            leader in the field of software engineering and technology.
          </p>
          <div class="resume-button">
            <a href="/resume" title="Resume Steve"
              ><button>Steve Mengelkoch's Resume</button></a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="certificates-full-width">
      <div class="certificates-section">
        <div class="certificates-image">
          <img src="../assets/overview/certificates.png" />
        </div>
        <div class="certificates-content">
          <h3>Steve Mengelkoch's Certificates</h3>

          <p>
            Steve Mengelkoch has received dozens of certificates, awards and
            recognition over his professional career. Vist the 'Certificates and
            Awards' page to see the countless certificates Steve has received in
            his pursuite to become a senior full-stack developer.
          </p>
          <div class="certificates-button">
            <a href="/certificates" title="Certificates Steve"
              ><button>Steve's Certificates</button></a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-full-width">
      <div class="portfolio-section">
        <div class="portfolio-image">
          <img src="../assets/overview/portfolio.png" />
        </div>
        <div class="portfolio-content">
          <h3>Steve Mengelkoch's Portfolio</h3>

          <p>
            Steve Mengelkoch is a professional webmaster, computer programmer
            and technology fanatic. Working as a professional coder and
            programmer for over 10 years, Steve has established himself as
            leader in the field of software engineering and technology.
          </p>
          <div class="portfolio-button">
            <a href="/portfolio" title="portfolio Steve"
              ><button>Steve's Portfolio</button></a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="contact-full-width">
      <div class="contact-section">
        <div class="contact-image">
          <img src="../assets/overview/certificates.png" />
        </div>
        <div class="contact-content">
          <h3>Contact Steve Mengelkoch</h3>

          <p>
            Steve Mengelkoch is happy to assist and respond to any and all
            questions. Steve is very passionate in helping spread the knowledge
            of website design and development to business owners large and
            small.
          </p>
          <div class="contact-button">
            <a href="/contact" title="Contact Steve"
              ><button>Steve's Certificates</button></a
            >
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- <div class="full-width-2">
      <div class="resume-styles">
        <div class="resume-image"></div>
        <img src="../assets/gallery/el-salvador.jpg" />
        <div class="resume-button">
          <a href="https://stevemengelkoch.com/resume" title="Steve's Resume"
            ><button>Steve's Resume</button></a
          >
        </div>
      </div>
    </div> 
    <div class="full-width-3">
      <div class="certificates-button">
        <a
          href="/certificates"
          title="Steve's Certificates"
          ><button>Steve's Certificates</button></a
        >
      </div> 
    </div> -->
    <Footer />
    <Copyright />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Copyright from "@/components/Copyright.vue";
import Title from "@/components/Title.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    Copyright,
    Title,
  },
});
</script>

<style scoped>
img {
  float: left;
  margin: -10px -10px 10px -10px;
}
button {
  margin-bottom: 10px;
}
.container {
  font-family: "Montserrat", Sans-serif;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  padding-top: 120px;
}
.bio {
  padding-top: 115px;
}

.about-full-width {
  width: 100%;
  height: 600px;
  margin-left: -10px;
  padding: 10px;
  background-color: #dfdede;
}
.about-image {
  width: 45%;
  float: left;
  padding: 85px 0 0 85px;
}
.about-content {
  width: 45%;
  float: right;
  padding: 85px 55px 0 0;
}

.resume-full-width {
  width: 100%;
  height: 600px;
  margin-left: -10px;
  padding: 10px;
  background-color: #c4c4c4;
}
.resume-image {
  width: 45%;
  float: right;
  padding: 85px 55px 0 0;
}
.resume-content {
  width: 45%;
  float: right;
  padding: 85px 55px 0 0;
}

.certificates-full-width {
  width: 100%;
  height: 600px;
  margin-left: -10px;
  padding: 10px;
  background-color: #dfdede;
}
.certificates-image {
  width: 45%;
  float: left;
  padding: 15px;
}
.certificates-content {
  width: 45%;
  float: right;
  padding: 5px;
}

.portfolio-full-width {
  width: 100%;
  height: 600px;
  margin-left: -10px;
  padding: 10px;
  background-color: #c4c4c4;
}
.portfolio-image {
  width: 45%;
  float: right;
  padding: 15px;
}
.portfolio-content {
  width: 45%;
  float: left;
  padding: 5px;
}

.contact-full-width {
  width: 100%;
  height: 600px;
  margin-left: -10px;
  padding: 10px;
  background-color: #dfdede;
}
.contact-image {
  width: 45%;
  float: left;
  padding: 15px;
}
.contact-content {
  width: 45%;
  float: right;
  padding: 5px;
}

.full-width-2 {
  width: 100%;
  height: 750px;
  float: left;
  margin-left: -10px;
  padding: 10px;
}
.full-width-3 {
  width: 100%;
  height: 750px;
  background-color: #dfdede;
  float: left;
  margin-left: -10px;
  padding: 10px;
}
</style>
