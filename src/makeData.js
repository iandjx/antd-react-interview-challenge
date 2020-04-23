import namor from "namor";
import moment from "moment";
const txtgen = require("txtgen");

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    from: namor.generate({ words: 1, numbers: 0 }),
    to: namor.generate({ words: 1, numbers: 0 }),
    subject: txtgen.sentence(),
    date: moment(
      new Date(+new Date() - Math.floor(Math.random() * 10000000000))
    ),
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
