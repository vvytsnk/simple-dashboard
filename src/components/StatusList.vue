<template>
    <ul>
        <p>{{statusType}}</p>
        <li v-for="i in getStatuses()" :key="i.name">
            <status-div :status="i"/>
        </li>
    </ul>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Order from '@/service/Order'
import StatusDiv from '@/components/StatusDiv.vue';
import DataService from '@/service/DataService';
import { Status, StatusType } from '@/service/Status';

@Component({
    components: {
        StatusDiv,
    },
})
export default class StatusList extends Vue {
    @Prop() private statusType!: StatusType;


    private getStatuses(): Status[] {
        return DataService.getStatusesByType(this.statusType);
    }
}
</script>

<style scoped>
p {
    text-align: right;
}
</style>