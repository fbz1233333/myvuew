<template>

  <div>
    <h1>Home</h1>
    <p>此处为home页面,你可以点击红色按钮进行一次只有登录才能完成的操作
      如果你没有登录就点击了这个按钮 你会返回到登录界面
    </p>
    <el-button @click="handleClick">
      测试登录
    </el-button>
  </div>
</template>
<script>
export default {
  methods:{
    handleClick(){
      axios.get('/app/user/test2',{
        headers:{
          'loginUserId':cookie.get('id'),
          'loginUserToken':cookie.get('token')
        }
      }).then(res=>{
        this.$message.success('测试成功,已登录')
      }).catch(err=>{
        this.$message.error('未通过验证')
        this.$router.push('/')
      })
    }
  }
}
import cookie from 'js-cookie'
import axios from 'axios'
</script>
<style scoped>
</style>
