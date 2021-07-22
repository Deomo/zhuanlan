<template>
    <li
      class="dropDown-option"
      :class="{'is-disabled':disabled}"
    >
        <slot></slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})

</script>

<style scoped>
.is-disabled {
    color: rgb(187, 187, 187);
    pointer-events: none;
    background-color: #e9e9e9;
}
</style>
