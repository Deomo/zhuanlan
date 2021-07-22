<template>
  <div class="container">
    <GlobalHeader :user="false"></GlobalHeader>
    <!-- <ColumnList :List='textData'>123123</ColumnList> -->
    <form>
      <div class="mb-3">
        <validateInput :rules="emailRules"></validateInput>
      </div>
      <!-- ---------- -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email" class="form-control" id="exampleInputEmail1"
          v-model="emailRef.val"
          @blur="validateEmail"
        >
        <p v-if="emailRef.error" class='form-text'>{{emailRef.message}}</p>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import GlobalHeader from './components/GlobalHeader.vue'
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import validateInput, { RulesProp } from './components/validateInput.vue'

// import ColumnList, { ColumnProps } from './components/ColumnList.vue'
// const textData:ColumnProps[] = [
//   {
//     id: 1,
//     title: '专栏1',
//     avatar: 'https://vue3js.cn/docs/logo.png',
//     description: '这是一个专栏内容'
//   },
//   {
//     id: 2,
//     title: '专栏2',
//     avatar: 'https://vue3js.cn/docs/logo.png',
//     description: '这是一个专栏内容'
//   },
//   {
//     id: 3,
//     title: '专栏3',
//     avatar: 'https://vue3js.cn/docs/logo.png',
//     description: '这是一个专栏内容'
//   },
//   {
//     id: 4,
//     title: '专栏4',
//     // avatar: 'https://vue3js.cn/docs/logo.png',
//     description: '这是一个专栏内容'
//   }
// ]

/** 只有直接写进来才可以 */
// interface RuleProp {
//   type: 'required' | 'email' | 'custom';
//   message: string;
// }
// type RulesProp = RuleProp[]
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    validateInput
  },
  setup () {
    const emailRules:RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '邮箱格式不正确' }
    ]
    // email表单验证数据
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    // email表单验证函数
    const emailReg = /^[a-zA-Z0-9.!#$%&’*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '邮箱不能为空'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '邮箱验证不通过'
      }
    }
    return {
      // textData
      emailRef,
      validateEmail,
      emailRules
    }
  }
})
</script>

<style>

</style>
