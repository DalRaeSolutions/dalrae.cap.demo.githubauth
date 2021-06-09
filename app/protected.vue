<template>
  <main class="container mx-auto lg:pt-5">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="md:flex md:items-center md:justify-between md:space-x-5"
    >
      <div class="flex items-start space-x-5">
        <div class="flex-shrink-0">
          <div class="relative">
            <img class="h-16 w-16 rounded-full" :src="user.avatar_url" alt="" />
            <span
              class="absolute inset-0 shadow-inner rounded-full"
              aria-hidden="true"
            ></span>
          </div>
        </div>
        <!--
      Use vertical padding to simulate center alignment when both lines of text are one line,
      but preserve the same layout if the text wraps without making the image jump around.
    -->
        <div class="pt-1.5">
          <h1 class="text-2xl font-bold text-gray-900">{{ user.name }}</h1>
          <p class="text-sm font-medium text-gray-500">
            Logged in as
            <a href="#" class="text-gray-900">{{ user.login }}</a> via
            <time datetime="2020-08-25">{{ user.email }}</time>
          </p>
        </div>
      </div>
      <div
        class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
      >
        <button
          v-on:click="() => view = view === 'profile' ? 'orders' : 'profile'"
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          {{ view === "orders" ? "Profile" : "Orders" }}
        </button>
        <a
          href="/auth/logout"
          class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          Logout
        </a>
      </div>
    </div>

    <div v-show="view === 'profile'">
        <profile :user="user" />
    </div>
    <div v-show="view === 'orders'">
        <orders :user="user" />
    </div>
  </main>
</template>
<script>
module.exports = {
  data: function () {
    return {
      view: "orders",
    };
  },
  components: {
    profile: httpVueLoader("profile.vue"),
    orders: httpVueLoader("orders.vue"),
  },
  props: ["user"],
};
</script>
<style>
  main.container {
    max-width: 800px;
  }
</style>