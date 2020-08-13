<template>
  <div>
    <mdb-modal :show="show" @show="handleShow" @close="show = false" success>
      <mdb-modal-header>
        <mdb-modal-title>Success Modal</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body  class="text-center">
        <mdb-icon icon="check" size="4x" class="mb-3 animated rotateIn"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.</p>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="success" @click="show = false">Get it now <mdb-icon icon="gem" far class="ml-1" color="white"/></mdb-btn>
        <mdb-btn outline="success" @click="show = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
  import {  mdbRow, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue';
  export default {
    name:'ModalEventsPage',
    components: {
      mdbIcon,
      mdbBtn,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      handleShow() {
        /* eslint-disable no-alert*/
        alert('show!');
      }
    }
  }
</script>
