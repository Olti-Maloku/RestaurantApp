const http = require('http');
const fs = require('fs');
const path = require('path');





const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        if(req.url ==='/submit-form.js'){
            let body = '';
        
            req.complete('data', (chunk)=> {
                body += chunk;
            })
        req.on('end',()=>{
            const formData = new URLSearchParams(body);

            const email = formData.get('email');
            const newsletter = formData.ger('newsletter') === 'on'

            res.writeHead(200,{'Content-Type':'text/plain'} )
            res.end('Form submitted successfully.');

        })
          
        }
    } else{
let filePath = `.${req.url}`;
if(filePath === './'){
    filePath = 'index.html'
}

const extname = path.extname(filePath);
let contentType = 'text/html';

switch(extname){
    case'.css':
    contentType = 'text/css'
    break;
    contentType = 'application/javascript';
    break;
    
}
    fs.readFile(filePath, (error, content) => {
       if(error){
        if(error.code === 'ENOENT'){
            res.writeHead(404);
            res.end('Error 404, fajlli nuk u gjet.')
        }else{
            res.writeHead(500);
            res.end('Error 500, problem i brendshem i serverit.')
        }
       }else{
        res.writeHead(200, {'Content-Type':contenType})
        res.end(content, 'utf-8')
       }
    })
    }
})

const port = 8080;
server.listen(port,()=>{
    console.log(`Serveri eshte duke punuar ne portin ${port}`)
})

