<template>
  <div class="top-nav">
    <Button @click="getUserInfo">获取用户信息</Button>
    <div class="fr">
      <Button @click="logout">退出</Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/api/auth/user',
        method: 'get'
      }).then(res => {
        // console.log(res)
      }).catch(e => {
        this.$Message.error(e.message)
      })
    },
    logout () {
      this.$axios({
        url: '/api/auth/logout',
        method: 'post'
      }).then(res => {
        // console.log(res)
        this.$Message.success('退出成功')
        this.$store.commit('SET_ISAUTH', false)
        this.$store.commit('SET_USERNAME', '')
        this.$router.push('/login')
      }).catch(e => {
        this.$Message.error(e.message)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.fr{
  float: right;
  vertical-align: middle;
}
</style>
