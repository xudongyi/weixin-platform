<template>
  <div>
    <a href="javascript:;" @click="test">测试2</a>
    {{$route.query.id}}
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    created() {
      //获取参数
      console.log(this.$route.query.id)
      http.get('/test/test.do')
        .then(data => {
          console.log(data)
        })
    },
    mounted() {

    },
    methods: {
      test: function () {
        //路由跳转
        this.$router.push({path: '/home3'});
      }
    },
    components: {}
  }
</script>
<style scoped>

</style>
