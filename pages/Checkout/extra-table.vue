<template>
  <div>
    <div v-if="filterExtralist.length <= 0"></div>
    <mdb-tbl v-else class="fixed-column" striped>
      <mdb-tbl-head>
        <tr>
          <th>Add</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </mdb-tbl-head>

      <mdb-tbl-body>
        <tr v-for="ext in filterExtralist" :key="ext.id">
          <td class="font-weight-bolder pr-4">
            <input-number
              :id="ext.id"
              :max="ext.max"
              :value="ext.count"
              type="number"
              @input="onInput"
            />
          </td>
          <td>
            {{ ext.name }}
          </td>
          <td class="font-weight-light pr-4">{{ ext.description }}</td>
          <td class="font-weight-bold">{{ ext.price }}₪</td>
        </tr>
      </mdb-tbl-body>
    </mdb-tbl>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import extralistsQuery from "~/apollo/queries/extralist/extralists.gql";
import { mdbTbl, mdbTblHead, mdbTblBody } from "mdbvue";
import InputNumber from "~/components/inputNumber.vue";
export default {
  data() {
    return {
      error: null,
      checked: false,
      extralists: []
    };
  },
  components: {
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    InputNumber
  },
  apollo: {
    extralists: {
      prefetch: true,
      query: extralistsQuery
    }
  },
  computed: {
    getList() {
      return this.$store.getters["order/items"];
    },
    filterExtralist() {
      return this.extralists.filter(
        category => category.category == this.getList[0].category
      );
    }
  },
  methods: {
    onInput(value) {
      const extra = this.filterExtralist.map(ext => {
        return {
          id: ext.id,
          name: ext.name,
          price: ext.price,
          max: ext.max
        }
      }).find(item => item.id == value.id)
      if (value.active == true) {
        this.addToCart(extra);
      }
    },
    ...mapMutations({
      addToCart: "cart/addExtra",
    })
  }
};
</script>

<style scoped>
.fixed-column::-webkit-scrollbar- {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.fixed-column {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.fixed-column th,
.fixed-column td {
  white-space: nowrap;
  padding: 0.2rem;
}
</style>
