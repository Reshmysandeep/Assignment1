const fs = require('fs')
const path = require('path')
const csvjson = require('csvtojson')

const filepath= path.join(__dirname,'./customer-data.xls')
const outPath=path.join(__dirname,'./customer-data.json')



csvjson().fromFile(filepath).then((jsonobj)=>{
    let data = JSON.stringify(jsonobj);
    fs.writeFileSync(outPath, data);
})
