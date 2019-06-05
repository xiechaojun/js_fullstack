<template>
  <div class="login">
    <i-form ref="formLogin" :model="formLogin" :rules="formLoginRules" class="card-box">
      <!-- title -->
      <FormItem class="formLogin-title">
        <h3>系统登录</h3>
      </FormItem>
      <!-- user -->
      <FormItem prop="username">
        <i-input size="large" type="text" v-model="formLogin.username" placeholder="用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <!-- password -->
      <FormItem prop="password">
        <Input size="large" type="password" v-model="formLogin.password" placeholder="密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </i-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
        remember: []
      },
      formLoginRules: {
        username: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>



