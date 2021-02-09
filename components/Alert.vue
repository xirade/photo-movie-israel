<template>
  <div>
    <mdb-modal @show="show" @close="close" danger>
      <mdb-modal-header>
        <mdb-modal-title>Please check your entries!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="text-center">
        <mdb-icon
          icon="exclamation-circle"
          fas
          size="4x"
          class="mb-3 text-center animated bounce"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ut
          necessitatibus quo perspiciatis, voluptatem corrupti qui reprehenderit
          molestias assumenda explicabo.
        </p>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn type="submit" name="submit" color="success">
          Get it now
          <mdb-icon icon="cash-register" class="ml-1" color="white" />
        </mdb-btn>
        <mdb-btn outline="danger" @click="close">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
import {
  mdbBtn,
  mdbIcon,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter
} from "mdbvue";
export default {
  name: "Alert",
  data() {
    return {};
  },
  components: {
    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  methods: {
    show() {
      this.$emit("show");
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style></style>
