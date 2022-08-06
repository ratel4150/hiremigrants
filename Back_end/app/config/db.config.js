module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Laura@@2009080220",//contraseña
    DB: "exerciseextra",//el nombre que le ponene a su bd
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  