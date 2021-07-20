<template>
  <header id="header" class="fixed-top">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xl-10 d-flex align-items-center">
          <h1 class="logo mr-auto">
            <a href="/"
              ><span class="d-sm-none">DM-24</span>
              <span class="d-none d-sm-inline">Design Master 24</span
              ><span>.</span></a
            >
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo mr-auto"><img src="{% static 'assets/img/logo.png" alt=""></a>-->

          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active">
                <a href="#header" v-scroll-to="'#header'">Home</a>
              </li>
              <li>
                <a href="#" v-scroll-to="'#services'">Services</a>
              </li>
              <li><a href="#" v-scroll-to="'#projects'">Projects</a></li>
              <li><a href="#" v-scroll-to="'#contact'">Contact</a></li>
            </ul>
          </nav>
          <!-- .nav-menu -->

          <a href="#about" class="get-started-btn scrollto"> About Us </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
