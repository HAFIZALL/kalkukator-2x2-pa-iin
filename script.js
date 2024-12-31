function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Silakan masukkan angka yang valid.");
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Pembagian dengan nol tidak diperbolehkan.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('result').innerText = result;
}