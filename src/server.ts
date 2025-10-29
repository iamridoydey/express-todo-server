import app from "./app.js";
import config from "./config/config.js";

app.listen(config.port, '0.0.0.0' ,()=>{
  console.log(`Server is running on http://localhost:${config.port}`)
})