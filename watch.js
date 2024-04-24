const fs = require('fs');
const { exec } = require('child_process');

const filePath = './codewars/test.js'; // Replace 'yourFile.js' with the name of your file

fs.watch(filePath, (eventType, filename) => {
    if (eventType === 'change') {
        exec(`node ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    }
});
