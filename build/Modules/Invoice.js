export default class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
    getClient() {
        return this.client;
    }
    getDetails() {
        return this.details;
    }
    getAmount() {
        return this.amount;
    }
}
//# sourceMappingURL=Invoice.js.map