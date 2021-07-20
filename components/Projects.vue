<template>
  <section id="projects" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Projects</h2>
        <p>These are some of the projects we have worked on</p>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">Structural Design</li>
            <li data-filter=".filter-web">Construction</li>
          </ul>
        </div>
      </div>

      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          v-for="project in designProjects"
          :key="project.id"
          class="col-lg-4 col-md-6 portfolio-item filter-app"
        >
          <div class="portfolio-wrap">
            <img :src="project.image" class="img-fluid" alt="" />
            <div class="portfolio-info">
              <h4>{{ project.title }}</h4>
              <p>{{ project.category.name }}</p>
              <div class="portfolio-links">
                <a
                  :href="project.image"
                  data-gall="portfolioGallery"
                  class="venobox"
                  :title="project.title + ' - ' + project.category.name"
                  ><i class="bx bx-plus-circle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          v-for="project in constructionProjects"
          :key="project.id"
          class="col-lg-4 col-md-6 portfolio-item filter-web"
        >
          <div class="portfolio-wrap">
            <img :src="project.image" class="img-fluid" alt="" />
            <div class="portfolio-info">
              <h4>{{ project.title }}</h4>
              <p>{{ project.category.name }}</p>
              <div class="portfolio-links">
                <a
                  :href="project.image"
                  data-gall="portfolioGallery"
                  class="venobox"
                  :title="project.title + ' - ' + project.category.name"
                  ><i class="bx bx-plus-circle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "General Steel Infrastructure",
          category: {
            name: "Structural Design"
          },
          image: "img/portfolio/s1.jpg"
        },
        {
          id: 2,
          title: "Design of a Warehouse",
          category: {
            name: "Structural Design"
          },
          image: "img/portfolio/s3.jpg"
        },
        {
          id: 3,
          title: "Building Design",
          category: {
            name: "Structural Design"
          },
          image: "img/portfolio/s6.jpg"
        },
        {
          id: 4,
          title: "Double Storey Building",
          category: {
            name: "Construction"
          },
          image: "img/portfolio/s2.jpg"
        }
      ]
    };
  },
  computed: {
    designProjects() {
      return this.projects.filter(p => p.category.name == "Structural Design");
    },
    constructionProjects() {
      return this.projects.filter(p => p.category.name == "Construction");
    }
  }
};
</script>

<style></style>
