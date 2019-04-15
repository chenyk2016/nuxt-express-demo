<template>
  <div class="login-page">
    <h1 class="login-page-title">nuxt-express 项目实战</h1>
    <Card class="card">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="userName">
          <Input v-model="form.userName" type="text" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input v-model="form.password" type="password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Checkbox v-model="form.isSave">保存密码</Checkbox>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit" :loading="loading">登陆</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      form: {
        userName: '1233',
        password: '123',
        isSave: false
      },
      rules: {
        userName: {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
        password: [
          {
            required: true,
            type: 'string',
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '密码不能小于6位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log(111)
      this.$axios({
        url: '/api/auth/login',
        method: 'post',
        data: {
          ...this.form
        }
      }).then(res => {
        this.$Message.success('登陆成功')
        this.$router.push('/')
      }).catch(e => {
        this.$Message.error('登陆出错')
      })
    }
  }
}
</script>

<style lang="less">
.login-page{
  .login-page-title{
    padding-top: 100px;
    text-align: center;
  }
  .card{
    width: 300px;
    height: 260px;
    margin: 0 auto;
    margin-top: 40px;
  }

}
</style>
