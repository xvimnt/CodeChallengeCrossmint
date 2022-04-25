const ConnectionFactory = require('./ConnectionFactory');

/*
We will use the factory pattern to create the 
connections that will make our space objects
*/
let connectionFactory = new ConnectionFactory()
let polyanetConnection = connectionFactory.create('polyanet')
let soloonConnection = connectionFactory.create('soloon')
let comethConnection = connectionFactory.create('cometh')

polyanetConnection.drawDiagonal(2,2,8,8);
polyanetConnection.drawDiagonal(2,8,8,2);

soloonConnection.drawDiagonal(2,8,8,2,'blue');
soloonConnection.drawDiagonal(2,8,8,2,'red');

comethConnection.drawDiagonal(2,8,8,2,'up');
comethConnection.drawDiagonal(2,8,8,2,'down');