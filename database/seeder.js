const faker = require('faker');
const Seeder = require('mysql-db-seed').Seeder;

const bcrypt = require('bcryptjs');

const config = require('../config/dbcreds.json');

const {
    host,
    user,
    password,
    database
} = config;

const seed = new Seeder(
  10, 
  host,
  user,
  password,
  database
);

(async () => {
  await seed.seed(
    30,
    'users', 
    {
        email: () => `${faker.internet.userName().toLocaleLowerCase()}@example.com`,
        name: () => faker.name.firstName(),
        surname: () => faker.name.lastName(),
        address: () => faker.address.streetAddress(),
        phonenumber: () => faker.phone.phoneNumberFormat(),
        date: () => faker.date.between('2023-01-01', '2023-12-31'),
        password: bcrypt.hashSync('secret', 8),
    }
  )
  seed.exit();
  process.exit();
})();