document.getElementById('btn').onclick = function () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    var largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
        document.getElementById('res').innerHTML = largest + "is the largest among " + num1 + "," + num2 + "and" + num3;
    }
    else if (num2 >= num3 && num2 >= num1) {
        largest = num2;
        document.getElementById('res').innerHTML = largest + "is the largest among " + num1 + "," + num2 + "and" + num3;
    }
    else {
        largest = num3;
        document.getElementById('res').innerHTML = largest + "is the largest among " + num1 + "," + num2 + "and" + num3;
    }

}