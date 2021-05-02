const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if an error is found do not accept the prommise and it should be caught by the .catch() method
           
            if (err) {
                reject(err);
                //return out so it doesmt resolve on an err
                
                return;
            }
            //assuming things go correctly resolve and send data to the .then()
            
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and send the errcatch error
            if (err) {
                reject(err);
                // get out of function if err
                return;
            }

            // resolve and send to .then
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };
