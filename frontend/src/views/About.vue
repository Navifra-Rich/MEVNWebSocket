<template>
  <div class="about">
    <h1>ABOUT!!!!!!!!!!!!!!!</h1>
    {{tt}}
  </div>
</template>
<script>
export default {
  created(){
    if(this.$route.params.id!=null){
      var id = this.$route.params.id;
      this.$http.get('/api/user/'+id)
          .then((response) => {
            this.tt = response.data
      })
    }else{
       this.$http.get('/api/user')
          .then((response) => {
            this.tt = response.data
            })
    }
  },
 data () {
    return {
      tt: []
    }
  }
}
</script>
