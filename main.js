// let fb = 0;
// let next = 1;
// let prev = 0;

// while (true) {

//     fb = next + prev;
//     if (fb > 100) {
//         break;
//     }
//     alert(fb);
//     prev = next;
//     next = fb;

// }


// for (let i = 2; i <= 20; i += 2) {
//     alert(i);
// }

// let userNumber = +prompt(`Number?`);
// while (userNumber <= 100) {
//     userNumber = +prompt(`Number?`);
// }
const sum = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    alert(sum);
}

const arrayOnScreen = () => {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }
}
const arrayMax = () => {
    let arr = [-1, 22, 3, 44, 5];
    // alert(Math.max(...arr));
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    alert(max);
}

const userNumbers = () => {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let i = 1
    while (i <= 8) {
        let userNumber = +prompt(`Input number`);
        userNumber > 0 ? positive++ : userNumber < 0 ? negative++ : zero++;
        i++;
    }
    alert(`You have ${positive} positive, ${negative} negative numbers and ${zero} zeros.`);

}

const multiplicationTable = () => {
    for (let i = 1; i <= 9; i++) {
        console.log(`8*${i}=${8 * i}`);
    }
    alert(`Output in console.`);

}

const betweenTwoDigits = () => {
    let arr = [2, 5, 9, 15, 0, 4];

    for (let i = 0; i < arr.length; i++) {
        if (3 < arr[i] && arr[i] < 10) {
            alert(arr[i]);
        }
    }
}

const calculator = () => {
    let result;
    let again;
    do {
        let num1 = +prompt(`Input first number`);
        let num2 = +prompt(`Input second number`);
        let action = +prompt(`Choose action 1 for addition
                                            2 for subtraction
                                            3 for multiplication
                                            4 for division`);

        switch (action) {
            case 1:
                result = num1 + num2;
                break;
            case 2:
                result = num1 - num2;
                break;
            case 3:
                result = num1 * num2;
                break;
            case 4:
                result = num1 / num2;
                break;
            default:
                alert(`Wrong action!`);
        }
        alert(`result is ${result}`);
        again = confirm(`One more time?`);

    } while (again);

}