/* eslint-disable */
import { ref, Ref, onMounted, onUnmounted } from 'vue'
const useClickOutSide = (elementRef:Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const handle = (e:MouseEvent) => {
    // “!” 为not null 的断言操作符，不执行运行时检查
    if (elementRef.value!.contains(e.target as HTMLElement)) {
      isClickOutside.value = false
    } else {
      isClickOutside.value = true
    }
  }
  onMounted(() => {
    document.addEventListener('click', handle)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handle)
  })
  return isClickOutside
}

export default useClickOutSide
