<template>
    <div class="uk-card uk-card-hover" v-bind:style="getStatusStyle()">
        <h3 class="uk-card-title" style="color: white !important">{{status.name}} </h3>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Status} from '@/service/Status';
@Component
export default class OrderRow extends Vue {
    @Prop() private status!: Status;

    private getStatusStyle() {
        return {
            'background-color': this.status.color,
            'text-shadow': '1px 1px blue',
        };
    }
}

</script>