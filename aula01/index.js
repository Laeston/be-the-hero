const express = require("express");
const app = express();

app.get('/',(request,response)=>{
    return response.json({
        evento: 'curso onmistack11',
        aluno: 'laeston jose'
    });
});

app.listen(3333);