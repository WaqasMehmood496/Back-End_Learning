const {readFile} = require('fs');

const getText = (path) => {
    
}

readFile('./content/first.txt','utf8',(err,data)=> {
    if (err) {
        return
    }
    else {
        console.log(data)
    }
})