<template>
  <div class="resume">
    <Header />
    <div class="feature">
      <TitleResume />
      <img
        src="../assets/banners/resume.jpg"
        title="Steve Mengelkoch"
        alt="Steve Mengelkoch"
      />
    </div>
    <div class="content">
      <h1>PROFESSIONAL EXPERIENCE:</h1>
      <h2>Final Web Design, Inc.</h2>
      <h4>Dec 2008 - Present: Miami, FL</h4>
      <h3>WEBMASTER – Web Design & Online Marketing</h3>
      <ul>
        <li>
          Specializing in SEO (“Search Engine Optimization”) and SEM (“Search
          Engine Marketing”)
        </li>
        <li>
          Website design, development and functionality with multiple projects.
          Expanded online advertising for both local and national customer
          bases.
        </li>
        <li>
          Lead search engine campaign manager (including: Google, Yahoo, Bing).
        </li>
        <li>Keyword research for website page search optimization.</li>
        <li>
          CMS and custom HTML web design. (Wordpress, Joomla, Dreamweaver, etc.)
        </li>
        <li>
          Experienced and skilled with Google’s AdWords, AdSense, and Webmaster.
        </li>
        <li>
          Developed and implemented evolving strategies in internet marketing.
        </li>
        <li>
          Marketing and advertising through social media and social networking
          outlets.
        </li>
        <li>Analytical skills with marketing and company ROI.</li>
        <li>
          Graphic design including corporate logo design and corporate graphic
          materials.
        </li>
        <li>
          Experience with Adobe software (Photoshop, Illustrator, Dreamweaver,
          etc.)
        </li>
        <li>Google Ads Certified (AdWords)</li>
        <li>HTML HTML5, CSS and CSS3 Certified (Sololearn)</li>
      </ul>

      <h2>University of Minnesota</h2>
      <h4>Dec 2005 – July 2008: Minneapolis, MN</h4>
      <h3>COMPUTER CONSULTANT – IT Technical assistant</h3>
      <ul>
        <li>
          Developed knowledge and skills with popular computer technology;
          including Macintosh and Microsoft operating systems, and other popular
          computer hardware and software.
        </li>
        <li>
          Provided student tech support in regards to various IT support
          questions.
        </li>
        <li>
          Included working with large format printers, servers and network
          setups.
        </li>
        <li>
          Conducted repairs and fixes on computers and computer hardware and
          software.
        </li>
      </ul>

      <h1>EDUCATION:</h1>
      <h2>University of Minnesota</h2>
      <ul>
        <li>Bachelors Degree - Minneapolis, MN</li>
        <li>Bachelor in Business & Marketing</li>
      </ul>

      <h2>St. Cloud State University</h2>
      <ul>
        <li>General Education Courses - Saint Cloud, MN</li>
      </ul>

      <h1>SKILLS and LANGUAGES:</h1>
      <ul>
        <li>Hardworking, motivated, and driven; strong work ethic.</li>
        <li>Microsoft Office (Word, Excel, PowerPoint, Outlook).</li>
        <li>Spanish language skills.</li>
        <li>Strong communication and educational skills.</li>
        <li>
          College course work in international studies, marketing, economics,
          calculus, IT.
        </li>
        <li>Study abroad experience</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src
import TitleResume from "@/components/TitleResume.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    TitleResume,
  },
});
</script>

<style scoped>
img {
  margin: -10px -10px 10px -10px;
}
.content {
  text-align: left;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
