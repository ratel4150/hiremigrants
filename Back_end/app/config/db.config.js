module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Laura@@2009080220",
  DB: "hiremigrants",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
