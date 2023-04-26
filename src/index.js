require('dotenv').config()
import app from './app'
const port=process.env.PORT || 3030;

app.listen(port ,()=>{
    console.log("The app is listening in port: "+port);
});
