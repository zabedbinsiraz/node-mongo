const express = require('express');


const app = express();

app.get('/',(req, res) => {
    res.send('Alhamdulillah, I am succesfull to start my first node project');
})

app.listen(3000, () => console.log('listening from port 3000'));