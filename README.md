Use Basic nodejs project template from ( https://github.com/TusharKumar0907/Basic-Node-JS-Project-Templates )
Then open the project folder and then do npm install and then create a .env file and write the PORT here

Now, go inside the src folder and give command
npx sequelize init

Change the database details in the config.json file

Just Create the database flights using Sequelize CLI using the following command
npx sequelize db:create
The  above commmand is going to create a database that is mentioned in config.json file

Now, Create the table of name Airplane which is having Two columns modelNumber of type string and capacity of type integer
npx sequelize model:generate --name Airplane --attributes modelNumber:string, capacity:integer

Now do, npx sequelize db:migrate , It will apply all the pending migrations into the database

If we wan to undo migrations then do
npx sequelize db:migrate:undo

Now,prepare the repositories file and these repositories file is going to communicate with models file

Now, prepare the service file and these service use repositories to communicate with the database

Now, prepare the controller file and these will interact with the services

Now, create a routes file this file is going to interact with controller file



