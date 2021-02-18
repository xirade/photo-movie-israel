<template>
  <div>
    <div v-if="getExtralist.length <= 0"></div>
    <mdb-tbl v-else class="fixed-column" striped>
      <mdb-tbl-head>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Count</th>
          <th>Price</th>
        </tr>
      </mdb-tbl-head>

      <mdb-tbl-body>
        <tr v-for="ext in getExtralist" :key="ext.id">
          <td>
            <div class="custom-control custom-checkbox">
              <input
                ref="checkbox"
                type="checkbox"
                class="custom-control-input"
                :id="ext.id"
                :checked="checked"
                @change="preventIfActive(ext.id)"
              />
              <label class="custom-control-label" :for="ext.id"></label>
            </div>
          </td>
          <td>
            {{ ext.name }}
          </td>
          <td class="font-weight-light pr-4">{{ ext.description }}</td>
          <td class="font-weight-bolder pr-4">
            <input-number
              ref="number"
              :id="ext.id"
              :disabled="ext.active"
              :min="ext.count"
              :max="ext.max"
              :step="ext.count"
              :value="ext.count"
              @input="onInput"
              type="number"
            />
          </td>
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
      extralists: [],
      total: 0
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
    getExtralist() {
      return this.extralists.filter(
        category => category.category == this.getList[0].category
      );
    }
  },
  methods: {
    onInput(value) {
      const extra = this.getExtralist.find(item => item.id == value.id);
      this.total = extra.price * value.value;
    },
    preventIfActive(index) {
      const extra = this.getExtralist.find(item => item.id == index);
      const newbox = this.$refs.checkbox.find(box => box.id == index);
      if (newbox.checked == true) {
        if (this.total > 0) {
          this.addPrice(this.total);
        } else {
          this.addPrice(extra.price);
        }
      } else if (newbox.checked != true && this.total > 0) {
        this.removePrice(this.total);
      } else {
        this.removePrice(extra.price);
      }
    },
    ...mapMutations({
      addPrice: "order/addPrice",
      removePrice: "order/removePrice"
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
