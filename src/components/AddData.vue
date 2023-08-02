<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="submitForm">
      <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>

      <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data: () => ({
    firstName: '',
    firstNameRules: [
      value => {
        if (value?.length > 3) return true

        return 'First name must be at least 3 characters.'
      },
    ],
    lastName: '123',
    lastNameRules: [
      value => {
        if (/[^0-9]/.test(value)) return true

        return 'Last name can not contain digits.'
      },
    ],
  }),
  methods: {
    ...mapMutations(['addName']),
    submitForm() {
      // Create a new name object with the entered first and last names
      const newName = {
        firstName: this.firstName,
        lastName: this.lastName,
      };

      // Call the 'addName' mutation to add the new name to the store
      this.addName(newName);

      // Clear the form fields after submission
      this.firstName = '';
      this.lastName = '';
    },
  }
}
</script>