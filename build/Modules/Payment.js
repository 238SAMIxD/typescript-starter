export default class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} received $${this.amount} for ${this.details}`;
    }
    getClient() {
        return this.recipient;
    }
    getDetails() {
        return this.details;
    }
    getAmount() {
        return this.amount;
    }
}
//# sourceMappingURL=Payment.js.map