<script setup>
import AddData from './AddData.vue';
import DataTable from './DataTable.vue';
</script>

<template>
  <AddData />
  <br />
  <DataTable />
  <router-view>
  </router-view>
</template>

<style scoped></style>
