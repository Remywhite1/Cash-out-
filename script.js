

// Login functionality
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter both email and password');
    }
});

// Dashboard functionality
let balance = 0;
let counting = 0;
const balanceElement = document.getElementById('balance-amount');
const countingElement = document.getElementById('counting-amount');
setInterval(() => {
    counting += 1;
    countingElement.innerText = counting;
    if (counting >= 1000) {
        balance += 1000;
        balanceElement.innerText = balance;
        counting = 0;
    }
}, 1000 * 60 * 60 * 24 / 1000); // 24 hours

document.getElementById('deposit-btn').addEventListener('click', () => {
    // Deposit functionality
    alert('Deposit functionality not implemented');
});

document.getElementById('withdraw-btn').addEventListener('click', () => {
    // Withdraw functionality
    window.location.href = 'withdraw.html';
});

document.getElementById('invest-btn').addEventListener('click', () => {
    // Invest functionality
    window.location.href = 'invest.html';
});

// Invest functionality
document.getElementById('buy-btn').addEventListener('click', () => {
    // Buy fries