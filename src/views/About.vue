<template>
  <div class="about">
     <status-list v-for="i in getStatusTypes()" :statusType="i" :key="i"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import StatusList from '@/components/StatusList.vue';
import { StatusType } from '@/service/Status';
import DataService from '@/service/DataService';

@Component({
  components: {
    StatusList,
  },
})
export default class Statuses extends Vue {
  
   private getStatusTypes(): StatusType[] {
       return DataService.statusTypes();
   }
}

</script>

<style scoped>
.about {
  width: 400px;
  text-align: center;
  margin-left: 20%;
}
</style>