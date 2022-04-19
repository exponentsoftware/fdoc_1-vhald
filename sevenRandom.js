function sevenRandomNumbers() {
    let randomNum = () => ~~(Math.random() * 10);
    let numbers = new Set();
    while (numbers.size < 7) numbers.add(randomNum());
    return Array.from(numbers);
}

console.log(sevenRandomNumbers());