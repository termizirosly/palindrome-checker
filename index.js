const input = document.getElementById("input1")

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const userInput = input.value;
    const reversed = reverseString(userInput);
    

    if (userInput === reversed){
        alert("PALINDROME")
    }
    else {
        alert("Not Palindrome")
    };

    input.value = "";
}