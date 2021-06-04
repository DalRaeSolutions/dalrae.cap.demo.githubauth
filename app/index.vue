<template>
  <main>
    <div v-if="!loggedIn">
        <login />
    </div>
    <div v-if="loggedIn">
        <orders :user="user" />
    </div>
  </main>
</template>

<script>
module.exports = {
  components: {
    login: httpVueLoader("login.vue"),
    orders: httpVueLoader("orders.vue"),
  },
  data: function () {
    return {
      loggedIn: false,
      user: {}
    };
  },

  async mounted() {
    const response = await fetch('/auth/my-user')
    if(response.status === 200) {
      this.user = await response.json();
      this.loggedIn = Object.keys(this.user).length > 0
    }
  }
};
</script>