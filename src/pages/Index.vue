<template>
<q-page padding>
  <div class="q-pa-md-5">
    <q-table grid
      grid-header
      title="Todas Las Notas:"
      :rows="rows"
      :columns="columns"
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
  </q-page>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'oneNote',
    required: true,
    label: 'Note No. 1',
    align: 'left',
    field: row => row.name,
    sortable: true
  }
]
 const noLista2 = [
   {
    name: 'oneNote',
    required: true,
    label: 'Note No. 1',
    align: 'left',
    field: row => row.name,
    sortable: true
  }
]

const rows = [
  {
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 
  }  
]

export default {
  setup () {
    return {
      filter: ref(''),
      columns,
      rows,
      noLista2
    }
  }
}
</script>