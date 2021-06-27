<template>
  <div>
    <mdb-modal @show="show" @close="close" danger>
      <mdb-modal-header>
        <mdb-modal-title>
          {{
            $i18n.locale == "en"
              ? "Please check your entries!"
              : "Пожалуйста, проверьте свои данные!"
          }}
        </mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="text-center">
        <mdb-icon
          icon="exclamation-circle"
          fas
          size="4x"
          class="mb-3 text-center animated bounce"
        />
        <p>
          {{
            $i18n.locale == "en"
              ? "Check the correctness of filling in the data, for errors or inconsistencies before sending to us"
              : "Проверьте корректность заполнения данных, на наличие ошибок или несовпадений перед отравкой"
          }}
        </p>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn type="submit" name="submit" color="success">
           {{
            $i18n.locale == "en"
              ? "Get it now"
              : "Подтвердить"
          }}
          <mdb-icon icon="cash-register" class="ml-1" color="white" />
        </mdb-btn>
        <mdb-btn outline="danger" @click="close">
          {{
            $i18n.locale == "en"
              ? "No, thanks"
              : "Нет, спасибо"
          }}
        </mdb-btn>
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
