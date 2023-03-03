const express = require('express');
const app = express();
const port = 4000;
app.set('view engine', 'pug');
app.set('views','./views');
const middleware = (req,res,next)=>{
    const d = new Date();
    let hour = d.getHours();
    let day = d.getDay();
   if((hour+1)<17 && (hour+1)>9 && (day)!=0 && (day)!=6 ){
    console.log("Hi User");
    next();
   } 
   else res.send("I'm Sorry Not Working Now");
}
app.use(middleware);
app.get('/', function(req, res){ 
     res.render('home');
});
app.get('/OurServices', function(req, res){ 
     res.render('service');
});
app.get('/Contactus', function(req, res){ 
    res.render('contact');
});
app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });