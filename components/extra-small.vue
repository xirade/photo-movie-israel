<template>
  <div>
    <div v-if="getExtraList.length == 0">
      <mdb-container class="text-center text-muted">
        <mdb-icon icon="shopping-cart" size="3x" class="mb-3" />
        <p class="h5">Cart is empty!</p>
      </mdb-container>
    </div>
    <span v-for="ext in getExtraList" :key="ext.id">
      <mdb-badge color="light" class="m-1 p-2 text-dark"
        ><a class="close m-1" @click="removeFromCart(ext)">
          ×
        </a>
        <span>
          {{ ext.name }}
        </span>
        <mdb-badge color="primary">{{ ext.quantity }}</mdb-badge>
        <span>{{ ext.price }}₪ </span>
      </mdb-badge>
    </span>
    <hr />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mdbBadge } from "mdbvue";
import { mdbContainer, mdbIcon } from "mdbvue";
export default {
  components: {
    mdbContainer,
    mdbIcon,
    mdbBadge
  },
  computed: {
    getExtraList() {
      return this.$store.getters["cart/extralist"];
    }
  },
  methods: {
    ...mapMutations({
      removeFromCart: "cart/removeExtra"
    })
  }
};
</script>
