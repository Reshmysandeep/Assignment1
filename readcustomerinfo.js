const fs = require('fs')
const path = require('path')
const csvjson = require('csvtojson')

const filepath= path.join(__dirname,'./customer-data.xls')
const outPath=path.join(__dirname,'./customer-data.json')



csvjson().fromFile(filepath).then((jsonobj)=>{
    let data = JSON.stringify(jsonobj,null,4);
    fs.writeFileSync(outPath, data,'utf8',function(err){
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    });
})
