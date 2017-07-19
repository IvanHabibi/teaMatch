<template lang="html">

  <button type="submit" class="btn btn-primary btn-block btn-flat" @click='getPlace' >Sign In</button>

</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    getPlace(){
      console.log('test')
      let sessionId = 'JSESSIONID=009512C2A51082B83B11DB57D49F59A4'
      let self = this

      self.axios.get(`http://192.168.1.43:8080/teammatch/squad?action=getAll&start=0&limit=100&sessionId=0A97F1F7D5BF88D7570EE1C19EAAD333`, {

      }).then(function(response){
        console.log(response)
      })


    }
  }
}
</script>

<style lang="css">
</style>
