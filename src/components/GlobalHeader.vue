<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <a class="navbar-brand" href="#">新闻zhuanlan</a>
        <ul v-if="user" class="list-inline mb-0">
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <drop-down :title="`Hello ${user.name}`">
                    <drop-down-item><a href="#" class="dropdown-item">新建文章</a></drop-down-item>
                    <drop-down-item disabled><a href="#" class="dropdown-item">编辑资料</a></drop-down-item>
                    <drop-down-item><a href="#" class="dropdown-item">退出登录</a></drop-down-item>
                </drop-down>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DropDown from './Dropdown.vue'
import DropDownItem from './DropDownItem.vue'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
  props: ['user']
//   props: {
//     user: {
//       type: Object as PropType<UserP>,
//       required: true
//     }
//   }
})
// export interface UserP{
//   isLogin: boolean,
//   name?: string,
//   id?: number,
// }
</script>

<style scoped>

</style>
