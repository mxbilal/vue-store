<template>
  <v-table>
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
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['namesList']), // Map the 'namesList' state to a component computed property
  },
};
</script>