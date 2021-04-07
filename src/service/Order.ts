import {Status} from '@/service/Status';

export default class Order {
    private id: number;
    private status: Status;

    constructor(id: number, status: Status) {
        this.id = id;
        this.status = status;
    }

    public getId(): number {
        return this.id;
    }

    public getStatus(): Status {
        return this.status;
    }
}

