<template>
  <div>
    <nav-bar />
    <hero />
    <main id="main">
      <why-us />
      <about />
      <services />
      <projects />
      <contact-us />
    </main>
    <my-footer />
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import NavBar from "~/components/NavBar.vue";
import WhyUs from "~/components/WhyUs.vue";
import About from "~/components/About.vue";
import Services from "~/components/Services.vue";
import Projects from "~/components/Projects.vue";
import ContactUs from "~/components/ContactUs.vue";
import MyFooter from "~/components/MyFooter.vue";
export default {
  components: {
    NavBar,
    Hero,
    WhyUs,
    About,
    Services,
    Projects,
    ContactUs,
    MyFooter
  }
};
</script>
