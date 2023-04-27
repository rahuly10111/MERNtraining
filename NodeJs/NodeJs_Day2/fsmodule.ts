import fs from 'fs';

fs.writeFile('textfile.txt', 'Hello..', () => {
    console.log("Data Added");
});

fs.readFile('textfile.txt', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
});