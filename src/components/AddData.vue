<template>
  <v-form fast-fail @submit.prevent="submitForm">
    <input v-model="firstName" label="First name" />

    <input v-model="lastName" label="Last name" />
    <button type="submit" block class="mt-2">Submit</button>
  </v-form>
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

    },
  }
}
</script>