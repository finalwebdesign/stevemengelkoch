<template>
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
      <p>
        <strong>Steve Mengelkoch</strong> is a webmaster, software engineer and
        inbound marketing professional. Throughoout the past 15 years, Steve has
        been responsible for the design, development and management of a handful
        of the internets most elaborate and successful websites. Working
        primarily with businesses in the South Florida area.
        <strong>Steve Mengelkoch</strong> has become a prominent voice in the
        local web and digital marketing scene helping clients throughout the
        USA.
      </p>
      <p>
        Steve is always looking to expand his web and marketing knowledge. Steve
        is aggressively seeking new connections in the South Florida area and
        throughout the United States. If you are interested in learning more
        about.
        <strong
          >professional website design, development, app development, coding or
          SEO</strong
        >
        (Search Engine Optimization)
        <a href="/contact" title="Contact">contact Steve here</a>. Steve is
        alawys excited to work with new client and customers on helping them
        grow and impove their online presence.
      </p>
    </div>

    <div class="about-full-width">
      <div class="about-section">
        <div class="about-image">
          <img src="../assets/overview/about.png" />
        </div>
        <div class="about-content">
          <h3>About Steve Mengelkoch</h3>
          <p>
            Steve Mengelkoch is a professional webmaster, computer programmer
            and technology fanatic. Working as a professional coder and
            programmer for over 10 years, Steve has established himself as
            leader in the field of software engineering and technology.
          </p>
          <div class="about-button">
            <a href="/about" title="About Steve"
              ><button>About Steve</button></a
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
              ><button>Resume Steve</button></a
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
          <p>
            Steve Mengelkoch is a professional webmaster, computer programmer
            and technology fanatic. Working as a professional coder and
            programmer for over 10 years, Steve has established himself as
            leader in the field of software engineering and technology.
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
          <img src="../assets/overview/contact.png" />
        </div>
        <div class="contact-content">
          <p>
            Steve Mengelkoch is a professional webmaster, computer programmer
            and technology fanatic. Working as a professional coder and
            programmer for over 10 years, Steve has established himself as
            leader in the field of software engineering and technology.
          </p>
          <div class="contact-button">
            <a href="/contact" title="Contact Steve"
              ><button>Contact Steve</button></a
            >
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
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  margin: 20px;
}
.about-full-width {
  width: 100%;
  height: 750px;
  margin-left: -10px;
  padding: 10px;
  background-color: #dfdede;
}
.about-image {
  width: 45%;
  float: left;
  padding: 15px;
}
.about-content {
  width: 45%;
  float: right;
  padding: 5px;
}

.resume-full-width {
  width: 100%;
  height: 750px;
  margin-left: -10px;
  padding: 10px;
  background-color: #c4c4c4;
}
.resume-image {
  width: 45%;
  float: right;
  padding: 15px;
}
.resume-content {
  width: 45%;
  float: left;
  padding: 5px;
}

.certificates-full-width {
  width: 100%;
  height: 750px;
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
  height: 750px;
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
