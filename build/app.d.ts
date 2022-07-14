declare class Invoice {
    private client;
    private details;
    private amount;
    constructor(client: string, details: string, amount: number);
    format(): string;
    getClient(): string;
    getDetails(): string;
    getAmount(): number;
}
declare const anchor: HTMLAnchorElement | null;
declare const form: HTMLFormElement;
declare const type: HTMLInputElement;
declare const tofrom: HTMLInputElement;
declare const details: HTMLInputElement;
declare const amount: HTMLInputElement;
declare const inv: Invoice;
