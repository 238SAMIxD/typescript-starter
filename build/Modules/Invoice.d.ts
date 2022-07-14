export default class Invoice {
    private client;
    private details;
    private amount;
    constructor(client: string, details: string, amount: number);
    format(): string;
    getClient(): string;
    getDetails(): string;
    getAmount(): number;
}
