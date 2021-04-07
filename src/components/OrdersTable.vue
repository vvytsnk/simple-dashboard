<template>
    <div class="table">
        <p class="uk-tile-default">{{name}}</p>
        <table class="uk-table uk-table-divider">
            <tr>
                <th class="uk-table-shrink"></th>
                <th class="uk-table-expand"></th>
                <th class="uk-width-small"></th>
            </tr>
            <order-row v-for="i in getData()" :order="i" :key="i.getId()" v-on:updateTable="reload()"/>
        </table>
        <a class="show" v-on:click.left="showFull()">{{getMsgForDataShow()}}</a>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Order from '@/service/Order'
import OrderRow from '@/components/OrderRow.vue'
import DataService from '@/service/DataService';

@Component({
    components: {
        OrderRow,
    },
})
export default class OrderTable extends Vue {
    @Prop() private name!: String;
    @Prop() private data!: Order[];
    private showFullData: boolean = false;

    private getMsgForDataShow(): string {
        return this.showFullData ? "Show less" : "Show more" ;
    }

    private showFull(): void {
        this.showFullData = !this.showFullData;
        this.$forceUpdate();
    }

    private reload() : void {
        this.$emit('updateTable');
    }

    private getData(): Order[] {
        if(this.showFullData) {
            return this.data;
        }
        return this.data.slice(0, 5);
    }

}


</script>

<style scoped>
.table {
   margin-right: 20px;
   margin-left: 20px;
   margin-top: 40px;
   margin-bottom: 0px;
}

.uk-table {
    margin-bottom: 0px;
}

.show {
    padding: 0px;
    margin: 0;
    margin-bottom: 20px;;
}
</style>