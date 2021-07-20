<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Contact</h2>
        <div class="row d-flex justify-content-center">
          <div class="col-md-7">
            <p>
              Do you have a project that would benefit from a great team of
              Structural Engineers & Designers?,
              <span class="font-weight-bold">Reach out</span> to us using the
              details below, or by filling the following form
            </p>
          </div>
        </div>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-12">
              <div class="info-box">
                <h3>Get in touch</h3>
                <div class="text-center text-md-center pt-3 pt-md-0">
                  <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
                  <a
                    href="https://www.facebook.com/Designmaster24-103912665015060"
                    target="_blank"
                    class="facebook"
                    ><i class="bx bxl-facebook"></i
                  ></a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/design_master24/"
                    class="instagram"
                    ><i class="bx bxl-instagram"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box mt-4">
                <i class="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>designmaster24@gmail.com<br /></p>
                <p>tinotendaberejena404@gmail.com<br /></p>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="info-box mt-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+263 783 457 459<br /></p>
                <p>+263 782 921 172<br /></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <form
            method="post"
            action="/"
            role="form"
            class="needs-validation php-email-form"
            novalidate
          >
            <div class="form-row">
              <div class="col form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
                <div class="invalid-feedback">Please enter your name</div>
              </div>
              <div class="col form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
                <div class="invalid-feedback">
                  A valid email address is required
                </div>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <div class="invalid-feedback">
                Please enter the subject for your message
              </div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <div class="invalid-feedback">Please write something for us</div>
            </div>
            <div class="mb-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
