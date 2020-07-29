const logins = require("../models/loginModel");

const loginlist = [
  {
    email: "ramco@adecco.com",
    password: "123456789"
  }
];

const loginSeeder = async () => {
  await logins.sync({ force: true });
  loginlist.forEach(async x => {
    try {
      const result = await logins.create(x);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

loginSeeder();
