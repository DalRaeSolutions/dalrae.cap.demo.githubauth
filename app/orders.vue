<template>
  <div>
    <h3>Work Orders ({{ this.count }}) </h3>
    <form @submit.prevent="searchList()">
      <label for="name">Enter a keyword of phrase here</label>
      <input type="text" id="name" placeholder="Search" v-model="search">
    </form>
    <table id="orders" class="striped-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Description</th>
          <th>Order date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order?.ID">
          <td>{{ order.ID.split('-')[4] }}</td>
          <td>{{ order.customerName }}</td>
          <td>{{ order.description }}</td>
          <td>{{ new Date(order.createdAt).toLocaleDateString() }}</td>
        </tr>
        <tr v-show="orders.length === 0">
          <td colspan="4" class="error">No records returned</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
const getURL = (page, search) => {

}

module.exports = {
  data: function () {
    return {
      orders: [],
      search: '',
      count: 0,
      get: 50,
      url: `/orders/WorkOrders?$top=50&$skip=0&$count=true`
    };
  },
  props: ['user'],
  async mounted() {
    const result = (await (await fetch(this.url)).json());
    this.orders = result.value;
    this.count = result["@odata.count"]
  },
  methods: {
    async searchList() {
      const url = this.search ? `${this.url}&$search=${this.search}` : this.url;
      const result = (await (await fetch(url)).json());
      this.orders = result.value;
      this.count = result["@odata.count"]
    }
  }
};
</script>
<style scoped>
  a {
    text-decoration: none;
  }

  tbody tr:hover {
    background-color: #0366ee !important;
    color: white;
  }

  .error, .error:hover {
    color: #cc0000;
    background-color: white;
    text-align: center;
    font-weight: bold;
  }
</style>