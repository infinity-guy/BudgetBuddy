document.addEventListener('DOMContentLoaded', function () {
    const expenses = [];
    const incomes = [];
    const goals = [];

    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const incomeForm = document.getElementById('income-form');
    const incomeList = document.getElementById('income-list');
    const analyzeButton = document.getElementById('analyze-button');
    const cashFlowResult = document.getElementById('cash-flow-result');
    const goalsForm = document.getElementById('goals-form');
    const goalsList = document.getElementById('goals-list');

    expenseForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        if (expenseName && !isNaN(expenseAmount)) {
            expenses.push({ name: expenseName, amount: expenseAmount });
            document.getElementById('expense-name').value = '';
            document.getElementById('expense-amount').value = '';
            updateExpenseList();
        }
    });

    function updateExpenseList() {
        expenseList.innerHTML = '';
        expenses.forEach(function (expense) {
            const li = document.createElement('li');
            li.textContent = `${expense.name}: Rs ${expense.amount.toFixed(2)}`;
            expenseList.appendChild(li);
        });
    }

    incomeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const incomeSource = document.getElementById('income-source').value;
        const incomeAmount = parseFloat(document.getElementById('income-amount').value);

        if (incomeSource && !isNaN(incomeAmount)) {
            incomes.push({ source: incomeSource, amount: incomeAmount });
            document.getElementById('income-source').value = '';
            document.getElementById('income-amount').value = '';
            updateIncomeList();
        }
    });

    function updateIncomeList() {
        incomeList.innerHTML = '';
        incomes.forEach(function (income) {
            const li = document.createElement('li');
            li.textContent = `${income.source}: Rs ${income.amount.toFixed(2)}`;
            incomeList.appendChild(li);
        });
    }

    analyzeButton.addEventListener('click', function () {
        const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
        const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
        const cashFlow = totalIncome - totalExpenses;
        cashFlowResult.textContent = `Cash Flow: Rs ${cashFlow.toFixed(2)}`;
    });

    goalsForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const goalName = document.getElementById('goal-name').value;
        const goalAmount = parseFloat(document.getElementById('goal-amount').value);

        if (goalName && !isNaN(goalAmount)) {
            goals.push({ name: goalName, amount: goalAmount });
            document.getElementById('goal-name').value = '';
            document.getElementById('goal-amount').value = '';
            updateGoalsList();
        }
    });

    function updateGoalsList() {
        goalsList.innerHTML = '';
        goals.forEach(function (goal) {
            const li = document.createElement('li');
            li.textContent = `${goal.name}: Rs ${goal.amount.toFixed(2)}`;
            goalsList.appendChild(li);
        });
    }
});