// if page not exist redirect to HomePage
<script>
export default {
  asyncData ({ redirect }) {
    return redirect('/')
  }
}
</script>