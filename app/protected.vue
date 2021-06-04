<template>
  <div>
    <nav class="vertical-center" style="justify-content:space-between;">
      <h1 style="vertical-align:middle;">
        <img style="position:relative;top:3px;" :src="user.avatar_url" alt="avatar" height="35" width="35" />
        Home
      </h1>
      <div>
        <a @click.prevent="() => view = view === 'orders' ? 'profile' : 'orders'" class="button muted-button text-right">
          {{ view === 'orders' ? user.name : 'Work Orders' }}
        </a>
        <a class="button text-right" href="/auth/logout">
          Logout
        </a>
      </div>
    </nav>
    <div v-show="view === 'profile'">
        <profile :user="user" />
    </div>
    <div v-show="view === 'orders'">
        <orders :user="user" />
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      view: 'orders',
    };
  },
  components: {
    profile: httpVueLoader('profile.vue'),
    orders: httpVueLoader('orders.vue')
  },
  props: ['user']
};
</script>
</script>
