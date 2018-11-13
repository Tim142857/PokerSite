module.exports = {
  idFacebook: "180216022928024",
  mySql : {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'user',
    db: 'pokersite',
    dialect: 'mysql',
    sync: { force: true },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
