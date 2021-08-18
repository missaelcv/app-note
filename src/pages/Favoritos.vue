<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-table grid class="text-rigth"
      grid-header
      title="Todas Las Notas:"
      row-key="name"
      :filter="filter"
      hide-header>

  

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Busqueda" align='rigth'>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
            </q-input>
          </template>
        </q-table>
      </div>
      
      

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Name and Note*"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>

   <q-input rounded filled v-model="text">
        <template v-slot:prepend>
          <q-icon
          name="event" 
          filled
          v-model="name"
          label="Fecha"
          hint="Name and surname"
            lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        </template>
      </q-input>
      

      <q-input
        filled
        type="number"
        v-model="age"
        label="Date Note *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"/>

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div class="text-center">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

      
    </q-form>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()
    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      filter: ref(''),
        text: ref(''),
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Full List Search'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>