class Account {
    // parameter property.
    constructor(public readonly id: number, public owner: string, private _balance: number, public nickName?: string) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    private calculateTax() {

    }

    deposit(amount: number) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        else {
            this.calculateTax();
            this._balance +=amount;
        }
    }

    get balance() {
        return this._balance;
    }
}

let account = new Account(1, 'Bilal', 50);
// account.id = 0;
account.deposit(50);
console.log(account.balance);
