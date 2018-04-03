<template>
    <div>
      <a href="javascript:;"@click="test">测试123123</a>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        created() {
          http.get('/test/test.do')
            .then(function (data) {
              console.log(data);
            })
        },
        mounted() {

        },
        methods: {
            test:function(){
                alert("测试");
            }
        },
        components: {

        }
    }
</script>
<style scoped>

</style>
