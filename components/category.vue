<template>
  <div>
    <client-only>
      <div class="container mt-4 d-flex flex-center justify-content-center">
        <span class="mr-auto"
          ><nuxt-link
            class="h4 text-uppercase"
            style="text-decoration: none; color: #6c757d;"
            :to="'/portfolio'"
            >Back</nuxt-link
          ></span
        >
        <h2 class="h2 white-text mr-auto text-center pr-5">
          {{ items.title }}
        </h2>
      </div>
      <Carousel v-if="filteredItems.category == 'clips'" :clip="items" />
      <div class="container py-3">
        <mdb-masonry
          v-for="category in items.Pictures"
          :key="category.id"
          horizontal
        >
          <mdb-masonry-item
            class="mb-3"
            :srcset="category.image.url + '?webp'"
            :src="category.image.url"
            :itemStyle="{ width: '100%' }"
          />
        </mdb-masonry>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mdbMasonry, mdbMasonryItem } from "mdbvue";
import Carousel from "~/components/Carousel.vue";
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },
  components: {
    Carousel,
    mdbMasonry,
    mdbMasonryItem
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:1337/portfolios");
      this.items = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  props: {
    items: Object
  },
  computed: {
    filteredItems() {
      const items = Object.entries(this.items);
      const categories = items.filter(([key, value]) => value == "clips");
      const categoryObject = Object.fromEntries(categories);
      return categoryObject;
    }
  }
};
</script>

<style scoped>
.h4,
.h2 {
  font-family: "Oswald", sans-serif;
}

.h4:hover {
  color: white !important;
}
</style>
