<template>
<div class="dropdown" ref='dropdownRef'>
  <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="taggleOpen">
    {{title}}
  </a>
  <ul class="dropdown-menu" :style="{ display:'block'}" v-if="isOpen">
    <slot></slot>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutSide from '../hooks/useClickOutSide'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const taggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // 获取class="dropdown"元素
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutSide = useClickOutSide(dropdownRef)
    /** !!! setup中逻辑只能执行一次 */
    // if (isClickOutSide.value && isOpen.value) {
    //   isOpen.value = false
    // }
    /** 所以要用到watch */
    watch(isClickOutSide, () => {
      if (isClickOutSide.value && isOpen.value) {
        isOpen.value = false
      }
    })
    // const hander = (e: MouseEvent) => {
    //   if (dropdownRef.value) {
    //     // dropdown不包含事件触发节点且菜单栏打开时，点击关闭菜单栏
    //     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
    //       isOpen.value = false
    //     }
    //   }
    // }
    // onMounted(() => {
    //   document.addEventListener('click', hander)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', hander)
    // })
    return {
      isOpen,
      taggleOpen,
      dropdownRef
    }
  }
})
</script>
