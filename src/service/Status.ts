export const enum StatusType {
    PREPARATION = 'Připravá',
    REALIZATION = 'Realizace',
    DELIVERY = 'Předávka',
    CLOSED = 'Ukončeno',
    ERROR = 'Chyba',
}

export interface Status {
    name: string;
    color: string;
    type: StatusType;
}
