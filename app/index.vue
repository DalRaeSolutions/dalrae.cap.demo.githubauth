<template>
  <main>
    <div v-if="!loggedIn && !user.id">
      <login />
    </div>
    <div v-if="loggedIn">
      <protected :user="user" />
    </div>
  </main>
</template>

<script>
module.exports = {
  components: {
    login: httpVueLoader("login.vue"),
    protected: httpVueLoader("protected.vue"),
  },
  data: function () {
    return {
      loggedIn: false,
      user: {},
    };
  },

  async mounted() {
    const response = await fetch("/auth/my-user");
    if (response.status === 200) {
      this.user = await response.json();
      this.loggedIn = Object.keys(this.user).length > 0;
    }
  },
};
</script>