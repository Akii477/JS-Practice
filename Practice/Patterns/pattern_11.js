function printPattern(rows) {
    let starPattern = '';
    let start = 1;

    for (let outer = 0; outer<rows; outer++) {
        if (( outer % 2) === 0) {
            start = 1;
        } else {
            start = 0;
        }

        for (let inner = 0; inner <=outer; inner++) {
            starPattern += start;
            start = 1 - start;
            starPattern += " ";
        }
        starPattern += "\n";
    }

    return starPattern;
}

console.log(printPattern(5));
