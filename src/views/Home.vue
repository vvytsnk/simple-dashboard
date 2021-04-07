<template>
  <div class="home">
    <div class="row">
      <orders-table :data="getOrders(0)" :name='"Poslední zakázky"'  v-on:updateTable="reload()"/>
      <orders-table :data="getOrders(11)" :name='"Nevyzvednuté zakázky"'  v-on:updateTable="reload()"/>
    </div>
    <div class="row">
      <orders-table :data="getOrders(7)" :name='"K vyzkoušení"' v-on:updateTable="reload()"/>
      <orders-table :data="getOrders(8)" :name='"Kontaktovat klienta"' v-on:updateTable="reload()"/>
    </div>
  </div>
</template>

<script lang="ts">
import OrdersTable from '@/components/OrdersTable.vue';
import DataService from '@/service/DataService';

export default {
  name: 'Home',
  components: {
    OrdersTable,
  },
  methods: {
    getOrders(i: number) {
      return DataService.getOrdersByStatusIndex(i);
    },
    
    reload() {
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>

.row {
  display: inline-block;
  width: 30%;
  border: 2px blue;
}

.home {
  text-align: center;
}
</style>