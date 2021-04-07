<template>
    <tr>
        <td>{{order.getId()}}</td>
        <td><status-div :status="order.getStatus()"/></td>
        <td><span v-on:click.left="deleteOrder()" uk-icon="trash"></span></td>
    </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Order from '@/service/Order'
import StatusDiv from '@/components/StatusDiv.vue';
import DataService from '@/service/DataService';

@Component({
    components: {
        StatusDiv,
    },
})
export default class OrderRow extends Vue {
    @Prop() private order!: Order;

    private deleteOrder() {
        DataService.deleteOrder(this.order);
        this.$emit('updateTable')
    }
}

</script>