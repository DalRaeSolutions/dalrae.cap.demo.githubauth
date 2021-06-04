<template>
  <section>
    <h3>Profile</h3>
    <form>
      <span v-for="(key, index) in Object.keys(user)" :key="index" class="vertical-center">
        <label style="width:250px;margin:0;">{{ format(key) }}</label>
        <input type="text" id="name" :placeholder="format(key)" :value="user[key]" disabled>
      </span>
    </form>
  </section>
</template>
<script>
module.exports = {
  props: ['user'],
  methods: {
    format(key) {
      return key.split('_').map(k => k[0].toUpperCase() + k.substring(1)).join(' ')
    }
  }
};
</script>
