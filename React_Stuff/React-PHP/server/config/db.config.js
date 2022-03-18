module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "CodingDojo21",
    DB: "react-php-db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }
  async () => {
    try {
     // make sure that any items are correctly URL encoded in the connection string
     await sql.connect(sqlConfig)
     const result = await sql.query`select * from mytable where id = ${value}`
     console.dir(result)
    } catch (err) {
     // ... error checks
    }
  };

//   First five parameters are for MySQL connection.
// pool is optional, it will be used for Sequelize connection pool configuration:

// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
