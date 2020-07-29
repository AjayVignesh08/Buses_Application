const busStructure = require("../models/busModel");

const Buslist = [
  {
    id: 1,
    busName: "Aj Travels",
    busdesc: "Go far together with us",
    rating: 4,
    price: 1500,
    starttime: "2020/07/21",
    endtime: "2020/07/22",
    seats: 5,
    toljourtime: 9,
    tolrateno: 400
  },
  {
    id: 2,
    busName: "VJ Travels",
    busdesc: "Go far away from us",
    rating: 2,
    price: 1100,
    starttime: "2020/07/22",
    endtime: "2020/07/23",
    seats: 8,
    toljourtime: 16,
    tolrateno: 100
  },
  {
    id: 3,
    busName: "Bharathi Travels",
    busdesc: "Simply Nothing",
    rating: 3,
    price: 800,
    starttime: "2020/07/23",
    endtime: "2020/07/24",
    seats: 2,
    toljourtime: 12,
    tolrateno: 20
  }
];

const busSeeder = async () => {
  await busStructure.sync({ force: true });
  Buslist.forEach(async bus => {
    try {
      const result = await busStructure.create(bus);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

busSeeder();
