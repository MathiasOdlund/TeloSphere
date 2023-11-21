<template>
  <section class="contact__area pb-100 pt-95">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="contact__info">
            <h3>Find us here.</h3>
            <ul class="mb-55">
              <li
                v-for="(item, i) in contactInfo"
                :key="i"
                class="d-flex mb-35"
              >
                <div class="contact__info-icon mr-20">
                  <i :class="item.icon"></i>
                </div>
                <div class="contact__info-content">
                  <h6>{{ item.title }}:</h6>
                  <span>{{ item.subtitle }}</span>
                </div>
              </li>
            </ul>
            <p>
              TeloSphere is a web store project that offers a range of products
              including phones, Telenor subscriptions, and peripherals. The
              store is developed using TypeScript, Nuxt Js, Vue.Js, and
              Tailwindcss to provide a modern and intuitive shopping experience.
            </p>

            <div class="contact__social">
              <ul></ul>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="contact__form">
            <h3>Contact Us.</h3>
            <!-- form start -->
            <contact-form />
            <!-- form end -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "../forms/ContactForm.vue";

// info type
type InfoData = {
  icon: string;
  title: string;
  subtitle: string;
};

export default defineComponent({
  components: { ContactForm },
  setup() {
    const contactInfo = [
      {
        icon: "fal fa-map-marker-alt",
        title: "Address",
        subtitle: "3842, Tonsberg.",
      },
      {
        icon: "fal fa-envelope-open-text",
        title: "Email",
        subtitle: "thomas@14.no",
      },
      {
        icon: "fal fa-phone-alt",
        title: "Number Phone",
        subtitle: "(47) 322 39 999",
      },
    ] as InfoData[];
    return { contactInfo };
  },
});
</script>
