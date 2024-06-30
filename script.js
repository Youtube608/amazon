document.addEventListener('DOMContentLoaded', function () {
    const balance = document.getElementById('balance');
    const income = document.getElementById('income');
    const expenses = document.getElementById('expenses');
    const transactionForm = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');

    let transactions = [];

    transactionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        const transaction = {
            id: generateID(),
            description,
            amount
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    });

    function generateID() {
        return Math.floor(Math.random() * 1000000);
    }

    function addTransactionDOM(transaction) {
        const sign = transaction.amount < 0 ? '-' : '+';
        const item = document.createElement('li');
        item.classList.add(transaction.amount < 0 ? 'expense' : 'income');
        item.innerHTML = `
            ${transaction.description} <span>${sign}$${Math.abs(transaction.amount).toFixed(2)}</span>
            <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
        `;
        transactionList.appendChild(item);
    }

    function updateValues() {
        const amounts = transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        const incomeTotal = amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);
        const expenseTotal = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
        ).toFixed(2);

        balance.innerText = `$${total}`;
        income.innerText = `$${incomeTotal}`;
        expenses.innerText = `$${expenseTotal}`;
    }

    window.removeTransaction = function (id) {
        transactions = transactions.filter(transaction => transaction.id !== id);
        init();
    };

    function init() {
        transactionList.innerHTML = '';
        transactions.forEach(addTransactionDOM);
        updateValues();
    }

    init();
});
