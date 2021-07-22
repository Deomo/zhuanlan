<template>
    <div class="validate-input-container pb-3">
      <input
        type="email" class="form-control" id="exampleInputEmail1"
        v-model="inputRef.val"
        @blur="validateInput"
      >
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
/** 声明rules的类型 */
interface RuleProp {
  type: 'required' | 'email',
  message: string
}
export type RulesProp = RuleProp[]
/** 以上 */
export default defineComponent({
  props: {
    /** 使用rules类型 */
    rules: Array as PropType<RulesProp>
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (inputRef.val.trim() === '') {
        inputRef.error = true
        inputRef.message = '邮箱不能为空'
      } else if (!emailReg.test(inputRef.val)) {
        inputRef.error = true
        inputRef.message = '邮箱验证不通过'
      }
    }

    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style scoped>

</style>
