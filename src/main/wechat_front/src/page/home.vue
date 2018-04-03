<template>
    <div>
      <a href="javascript:;" @click="test">测试1</a>
      {{$store.state.storeData.user.openId}}
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
              this.$router.push({path:'/home2'});
            }
        },
        components: {

        }
    }
</script>
<style scoped>

</style>
