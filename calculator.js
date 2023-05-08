const express = require('express');

const app = express();

//.sendFile to send the file over to the server
//__dirname is used to fetch the file no matter the location
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
