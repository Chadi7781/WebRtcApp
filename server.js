const express = require('express');

const app = express();
const port = 3000;

//set public folder as root
app.use(express.static('public'));

//Provide access to node_modules folder from the client-side
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

//Redirect all trafic to index.html
app.use((req,res)=>res.send(`${__dirname}/public/index.html`)); //I dont understand

app.listen(port, () => {
    console.info('listening on %d', port);
});

