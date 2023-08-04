<template>
  <v-table fixed-header height="300px" :items-per-page="5">
    <thead>
      <tr>
        <th class="text-left">
          First Name
        </th>
        <th class="text-left">
          Last Name
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(name, index) in namesList" :key="index">
        <td>{{ name.firstName }}</td>
        <td>{{ name.lastName }}</td>
      </tr>
    </tbody>
  </v-table>
  <!-- <v-pagination v-model="page" :length="namesList.length / 5" rounded="circle"></v-pagination> -->
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['namesList']), // Map the 'namesList' state to a component computed property
  },
};
</script>