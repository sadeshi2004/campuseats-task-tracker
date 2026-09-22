// CampusEats task list

const tasks = [
    { name: "Design the menu screen", dueDate: "2026-09-25" },
    { name: "Build the orders API", dueDate: "2026-09-28" },
    { name: "Add user login", dueDate: "2026-09-30" },
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// Code quality and security improvement
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
    if (price < 0 || quantity < 0) {
        throw new Error("Price and quantity must be >= 0");
    }

    const subtotal = price * quantity;

    return customerType === "vip"
        ? subtotal * (1 - VIP_DISCOUNT)
        : subtotal;
}

// API key should come from an environment variable
// e.g. process.env.API_KEY - never hard-coded
