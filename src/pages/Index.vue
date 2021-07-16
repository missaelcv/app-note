<template>
<q-page padding>
  
  <div class="q-pa-md">

    <div class="col-12 col-sm-12">
    
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

       <div class="col-12 text-center">

        <q-btn 
        label="New Note"
        :ripple="true"
        color="secondary "
        type="submit"/>

        <q-btn
        label="Delete Note"
        color="red"
        class="q-ml-sm"
        :ripple="true"
        type="deleter"/>
        
        </div>
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
    align: 'center',
    field: row => row.name,
    sortable: true
  },
   {
    name: 'oneNote',
    required: true,
    //label: 'Note No. 2',
    align: 'center',
    field: row => row.name2,
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
      rows         
    }
  }
}
</script>

<style lang="scss">
.btn {
  font-family: 'Times New Roman', Times, serif;
}
  
</style>\

