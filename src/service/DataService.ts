import Order from '@/service/Order'
import { Status, StatusType } from './Status';

export default class DataService {
    private static id: number = 10000;

    private static statuses: Status[] = [
        { name: 'ČEKAJÍCÍ', color: 'yellow', type: StatusType.PREPARATION },
        { name: 'KONTROLA PLANTOGRAMU', color: 'orange', type: StatusType.PREPARATION },
        { name: 'K VÝROBĚ', color: 'saddlebrown', type: StatusType.PREPARATION },
        { name: 'V REALIZACI', color: 'purple', type: StatusType.REALIZATION },
        { name: 'KONTROLA VYROBKU', color: 'mediumslateblue', type: StatusType.REALIZATION },
        { name: 'K EXPEDICI', color: 'lightskyblue', type: StatusType.DELIVERY },
        { name: 'K VYZKOUŠENÍ', color: 'blue', type: StatusType.DELIVERY },
        { name: 'K VYZVEDNUTÍ', color: 'seagreen', type: StatusType.DELIVERY },
        { name: 'KONTAKTOVAT KLIENTA', color: 'green', type: StatusType.DELIVERY },
        { name: 'UZAVŘENA', color: 'greenyellow', type: StatusType.CLOSED },
        { name: 'REKLAMACE', color: 'brown', type: StatusType.ERROR },
        { name: 'NEVYZVEDNUTO', color: 'black', type: StatusType.ERROR },
    ];

    private static orders: Order[] = [
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[0]),
        new Order(DataService.id++, DataService.statuses[11]),
        new Order(DataService.id++, DataService.statuses[11]),
        new Order(DataService.id++, DataService.statuses[11]),
        new Order(DataService.id++, DataService.statuses[11]),
        new Order(DataService.id++, DataService.statuses[11]),
        new Order(DataService.id++, DataService.statuses[7]),
        new Order(DataService.id++, DataService.statuses[7]),
        new Order(DataService.id++, DataService.statuses[7]),
        new Order(DataService.id++, DataService.statuses[7]),
        new Order(DataService.id++, DataService.statuses[7]),
        new Order(DataService.id++, DataService.statuses[7]),
        new Order(DataService.id++, DataService.statuses[8]),
        new Order(DataService.id++, DataService.statuses[8]),
        new Order(DataService.id++, DataService.statuses[8]),
        new Order(DataService.id++, DataService.statuses[8]),
        new Order(DataService.id++, DataService.statuses[8]),
        new Order(DataService.id++, DataService.statuses[8]),
    ];

    public static statusTypes(): StatusType[] {
        return [
            StatusType.PREPARATION,
            StatusType.REALIZATION,
            StatusType.DELIVERY,
            StatusType.CLOSED,
            StatusType.ERROR,
        ]
    }

    public static addOrder(status: Status): void {
        this.orders.push(new Order(DataService.id++, status));
    };

    public static editOrder(order: Order): void {
        let i = this.orders.findIndex(e => e.getId() === order.getId());
        if (i >= this.orders.length || i < 0) return;

        this.orders[i] = order;
    }

    public static deleteOrder(order: Order): void {
        this.orders = this.orders.filter(e => e.getId() != order.getId());
    }

    public static getOrders(): Order[] {
        return this.orders;
    }

    public static getStatuses(): Status[] {
        return this.statuses;
    }

    public static getOrderByStatus(status: Status): Order[] {
        return this.orders.filter(s => s.getStatus() === status);
    }

    public static getOrdersByStatusIndex(i: number): Order[] {
        return this.getOrderByStatus(this.statuses[i]);
    }

    public static getStatusesByType(type: StatusType) : Status[] {
        return this.statuses.filter(s => s.type === type);
    }


}