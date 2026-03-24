class Transaction {
    constructor(amount, description) {
        this.amount = amount;
        this.description = description;
        this.date = new Date();
    }
}

class TransactionManager {
    constructor() {
        this.transactions = [];
    }

    addTransaction(amount, description) {
        // Validate amount
        if (amount <= 0) {
            throw new Error('Transaction amount must be positive.');
        }
        const transaction = new Transaction(amount, description);
        this.transactions.push(transaction);
    }

    detectDuplicates(newTransaction) {
        return this.transactions.some(transaction => 
            transaction.amount === newTransaction.amount && 
            transaction.description === newTransaction.description && 
            transaction.date.toDateString() === newTransaction.date.toDateString()
        );
    }

    validateTransaction(transaction) {
        if (!transaction.amount || !transaction.description) {
            throw new Error('Transaction must have amount and description.');
        }
    }

    calculateBalance() {
        return this.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    }
}

// Example usage
const manager = new TransactionManager();
try {
    manager.addTransaction(100, 'Deposit');
    manager.addTransaction(-50, 'Withdrawal');
    console.log('Current Balance:', manager.calculateBalance());
} catch (error) {
    console.error(error.message);
}