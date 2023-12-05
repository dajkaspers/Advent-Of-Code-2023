const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    // Split the text into rows
    const rows = data.split('\n');

    count = 0;

    for (const row of rows) {
        // Use regular expression to match digits
        const digitsArray = row.match(/\d+/g);

        // Combine all matched digits into a single number
        const combinedNumber = parseInt(digitsArray.join(''), 10);
        
        const numberString = combinedNumber.toString();

        const resultString = numberString[0] + numberString.slice(-1);

        const resultInteger = parseInt(resultString, 10);

        count += resultInteger;
    }

    console.log(count);
});