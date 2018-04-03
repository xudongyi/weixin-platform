<template>
    <div>
      <a href="javascript:;" @click="test">测试2</a>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        created() {
          http.get('/test/test.do')
            .then(data => {
              console.log(data)
            })
        },
        mounted() {

        },
        methods: {
            test:function(){
              this.$router.push({path:'/home3'});
            }
        },
        components: {

        }
    }
</script>
<style scoped>

</style>
