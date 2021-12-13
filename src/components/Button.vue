<template>
  <button
    v-if="!isRouting"
    :disabled="isDisabled"
    :class="[
      color,
      isDisabled && 'disabled',
      'button'
      ]"
  >
    {{ Text }}
  </button>

  <router-link
    v-else
    :to="Link"
    :disabled="isDisabled"
    :target="isExternal ? '_blank' : false "
    :class="[
      color,
      isDisabled && 'disabled',
      'button'
      ]"
  >
    {{ Text }}
  </router-link>
</template>

<script>
export default {
  props: {
    Link: String,
    Text: String,
    isDisabled: Boolean,
    isRouting: Boolean,
    color: String,
  },
}
</script>

<style lang="scss" scoped>
.button{
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: var(--radiusH);
  transition: var(--fast);

  &:hover{
    background-color: #000;
    color: #fff;
  }
}
</style>