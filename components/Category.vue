<template>
  <div>
    <client-only>
      <div class="container mt-4 d-flex flex-center justify-content-center">
        <span class="mr-auto"
          ><NuxtLink
            class="h4 text-uppercase"
            style="text-decoration: none; color: #6c757d;"
            :to="`${$i18n.locale == 'en' ? '' : '/' + $i18n.locale}/portfolio`"
            >{{
              $i18n.locale == "en" ? "Back" : "Назад"
            }}</NuxtLink
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
  components: {
    Carousel,
    mdbMasonry,
    mdbMasonryItem
  },
  props: ["items"],
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
.h4:hover {
  color: white !important;
}
</style>
