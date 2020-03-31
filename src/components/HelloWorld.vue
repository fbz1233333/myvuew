<template>
  <div class="container">
    <h1>Login</h1>
    <el-form ref='loginForm' :model="loginInfo" :rules="rules">
      <el-form-item label="username" prop="username">
        <el-input v-model="loginInfo.username">

        </el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="loginInfo.password" type="password">

        </el-input>
      </el-form-item>
      <el-button type="primary" @click="handleClick('loginForm')">login</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        rules:{
          username: [
            {required:true,message:'不能为空',trigger:'blur'}
          ],
          password: [
            {required:true,message:'不能为空',trigger:'blur'}
          ]
        },
        loginInfo:{
          username:'',
          password:''
        }
      }
    },
    methods: {
      saveToCookie(info){
        cookie.set('id',info.id)
        cookie.set('name',info.username)
        cookie.set('token',info.token)
      },
      handleClick(form){
        // console.log(this.loginInfo)
        this.$refs[form].validate((valid)=>{
          if (valid){
            console.log('前端验证无误')
            axios.post('app/user/login',
              {
                username:this.loginInfo.username,
                password:this.loginInfo.password
              }).then(res=>{
                console.log(res.data)
                if (res.data.result==='LOGIN_SUCCESS'){
                  this.$message.success('欢迎回来!用户:'+res.data.userInfo.username)
                  this.saveToCookie(res.data.userInfo)
                  this.$router.push('/test2')
                }else if (res.data.result==='NO_SUCH_USER'){
                  this.$message.warning('没有这样的用户')
                }
            }).catch(err=>{
              let infos=err.response.data.infos
              for(let i=0;i<infos.length;i++){
                this.$message.warning("后端验证有误"+infos[i])
              }
            })
          }else {
            this.$message.warning('前端验证有误')
          }
        })
      }
    }
  }
  import cookie from 'js-cookie'
  import axios from 'axios'
</script>

<style>

  .container{
    width: 300px;

    margin: 10% auto;
  }
</style>
