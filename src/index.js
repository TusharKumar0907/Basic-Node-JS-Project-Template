// const { PORT } = require('./config');

// const express = require('express');

// const apiRoutes = require('./routes');

// //created a server object
// const app = express();

// app.use('/api', apiRoutes);
  
// //start the server
// app.listen(PORT, () =>{
//     console.log(`Successfully started the server on PORT : ${ PORT }`);
// });

const express = require('express');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    Logger.info("Sucessful started the server");
});