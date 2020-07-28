<template>
    
</template>
<script>
export default {
     head() {
      return {
        script: [{src:"https://widget.cloudinary.com/v2.0/global/all.js", type:"text/javascript"}],
      }
    },
    createCloudinaryWidget() {
      const newWidget = cloudinary.createUploadWidget({
        cloudName: "dxeebmzdv",
        uploadPreset: "my_preset",
        multiple: false,
        maxFiles: 1,
        cropping: true,
        croppingAspectRatio: 1,
        croppingCoordinateMode: "face",
        clientAllowedFormats: ["png", "gif", "jpeg"]
     }, 
     (error, result) => {
          if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
          }
        }
      )
      return newWidget
    },
      openCloudinaryWidget() {
        const widget = this.createCloudinaryWidget()
        widget.open()
      }
}
</script>

<style></style>
