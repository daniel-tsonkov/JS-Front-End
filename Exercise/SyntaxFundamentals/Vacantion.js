function solve(groupe, type, day) {
    let price = 0;

    if (type === "Students") {
        if (day === "Friday") {
            price = groupe * 8.45;
        } else if (day === "Saturday") {
            price = groupe * 9.8;
        } else {
            price = groupe * 10.46;
        }

        if (groupe >= 30) {
            price *= 0.85;
        }
    } else if (type === "Business") {
        let oneTicket;
        if (day === "Friday") {
            oneTicket = 10.90;
        } else if (day === "Saturday") {
            oneTicket = 15.60;
        } else {
            oneTicket = 16.00;
        }

        if (groupe >= 100) {
            price = (groupe - 10) * oneTicket;
        } else {
            price = groupe  * oneTicket;
        }
    } else {
        if ((groupe >= 10) && (groupe <= 20)) {
            if (day === "Friday") {
                price = (groupe * 15.00) * 0.95;
            } else if (day === "Saturday") {
                price = (groupe * 20.00) * 0.95;
            } else {
                price = (groupe * 22.50) * 0.95;
            }
        } else {
            if (day === "Friday") {
                price = groupe * 15.00;
            } else if (day === "Saturday") {
                price = groupe * 20.00;
            } else {
                price = groupe * 22.50;
            }
        }
        
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(40,
    "Regular",
    "Saturday"
);