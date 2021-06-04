<template>
  <div>
    <h3>Work orders</h3>
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
          <td>{{ order.customer?.name }}</td>
          <td>{{ order.description }}</td>
          <td>{{ new Date(order.createdAt).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      orders: [],
    };
  },
  props: ['user'],
  async mounted() {
    this.orders = (
      await (await fetch("/orders/WorkOrders?$expand=customer")).json()
    )?.value;
  },
};
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>