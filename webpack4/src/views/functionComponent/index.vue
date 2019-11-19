<template>
  <div>
    <FunctionalButton @click="log">
      click me
    </FunctionalButton>
  </div>
</template>
<script type="text/jsx">
import FunctionalButton from './modules/slotTemplate'
export default {
  components: {
    FunctionalButton
  },
  methods: {
    log() {
      console.log('click...')
    }
  }
}
</script>