const { log } = require('console');
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err1, result1) => {
    if(err1) {
        console.log(err1);
        return;
    }
    const first = result1;
    readFile('./content/second.txt', 'utf8', (err2, result2) => {
        if(err2) {
            console.log(err2)
            return
        }
        const second = result2
        writeFile(
            './content/result-async.txt',
            `Here is the result ${first}, ${second}`, (err, res) => {
                if(err) {
                    console.log(err);
                    return
                }
                console.log(res);
            }
        )
    })
})