/*Query Params
  Route P1arams
  Request Body
*/
const express = require("express");
const app = express();


/*http://localhost:3333/users?name=laeston&class=junior
app.get('/users',(request,response)=>{
    const parms = request.query;
    console.log(parms);
    return response.json({
        evento: 'curso onmistack11',
        aluno: 'laeston jose'
    });
});*/

/*http://localhost:3333/users/laeston
app.get('/users/:id',(request,response)=>{
    const parms = request.params;
    console.log(parms);
    return response.json({
        evento: 'curso onmistack11',
        aluno: 'laeston jose'
    });
});
*/
/*http://localhost:3333/users/laeston
app.get('/users/:id',(request,response)=>{
    const parms = request.params;
    console.log(parms);
    return response.json({
        evento: 'curso onmistack11',
        aluno: 'laeston jose'
    });
});
*/

/*http://localhost:3333/users   JSON*/
app.use(express.json());
app.post('/users',(request,response)=>{
    const parms = request.body;
    console.log(parms);
    return response.json({
        evento: 'curso onmistack11',
        aluno: 'laeston jose silva pinto'
    });
});

app.listen(3333);