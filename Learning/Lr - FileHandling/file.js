const fs = require("fs");

// sync
// fs.writeFileSync("./testing.txt", "womp womp");

// async
// fs.writeFile("./testing2.txt", "async", (err) => {})

// read file
// const read = fs.readFileSync('./testing.txt',"utf-8")
// console.log(read);

// const result = fs.readFile("./testing2.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("error", err);
//     }else{
//         console.log(result);
//     }
// })

// fs.appendFileSync('./testing.txt', new Date().getDate().toLocaleString());

// fs.cpSync('./testing.txt','./testing2.txt', )

// fs.writeFileSync('./delete','heyyyyy')

// fs.unlinkSync('./delete');

// console.log(fs.statSync('./testing.txt')); 

// fs.mkdirSync('./myfold')

const os = require('os');

console.log(os.cpus().length);