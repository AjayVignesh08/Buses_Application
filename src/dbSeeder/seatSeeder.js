const Seats = require("../models/seatModel");

const seatlist = [
  {
    seatid: 101,
    busid: 1,
    seatno: 1,
    busName: "AJ Travels",
    availablity: "yes"
  },
  {
    seatid: 102,
    busid: 1,
    seatno: 2,
    busName: "AJ",
    availablity: "no"
  },
  {
    seatid: 103,
    busid: 1,
    seatno: 3,
    busName: "Bharathi Travels",
    availablity: "yes"
  },
  {
    seatid: 104,
    busid: 1,
    seatno: 4,
    busName: "Bharath Travels",
    availablity: "yes"
  },
  {
    seatid: 105,
    busid: 1,
    seatno: 5,
    busName: "Bharat Travels",
    availablity: "yes"
  },
  {
    seatid: 106,
    busid: 1,
    seatno: 6,
    busName: "Bharhi Travels",
    availablity: "yes"
  },
  {
    seatid: 107,
    busid: 1,
    seatno: 7,
    busName: "Brathi Travels",
    availablity: "yes"
  },
  {
    seatid: 108,
    busid: 1,
    seatno: 8,
    busName: "Bharathi Trels",
    availablity: "yes"
  },
  {
    seatid: 109,
    busid: 1,
    seatno: 9,
    busName: "AJ",
    availablity: "no"
  },
  {
    seatid: 110,
    busid: 1,
    seatno: 10,
    busName: "Bharathi Travels",
    availablity: "yes"
  },
  {
    seatid: 111,
    busid: 1,
    seatno: 11,
    busName: "Bharath Travels",
    availablity: "yes"
  },
  {
    seatid: 112,
    busid: 1,
    seatno: 12,
    busName: "Bharat Travels",
    availablity: "yes"
  },
  {
    seatid: 113,
    busid: 1,
    seatno: 13,
    busName: "Bharhi Travels",
    availablity: "yes"
  },
  {
    seatid: 114,
    busid: 1,
    seatno: 14,
    busName: "Brathi Travels",
    availablity: "yes"
  },
  {
    seatid: 115,
    busid: 1,
    seatno: 15,
    busName: "Bharathi Trels",
    availablity: "yes"
  }
];

const seatSeeder = async () => {
  await Seats.sync({ force: true });
  seatlist.forEach(async x => {
    try {
      const result = await Seats.create(x);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

seatSeeder();
