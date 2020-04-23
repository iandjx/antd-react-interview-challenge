import namor from "namor";

const txtgen = require("txtgen");

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

function randomDate(start, end) {
  var d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const newPerson = () => {
  return {
    from: namor.generate({ words: 1, numbers: 0 }),
    to: namor.generate({ words: 1, numbers: 0 }),
    subject: txtgen.sentence(),
    date: randomDate(new Date(2012, 0, 1), new Date()),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
