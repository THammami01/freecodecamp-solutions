const KEYS_AND_VALUES = [
  ["ONE HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

const getObject = (obj) => Object.fromEntries(obj);

const getTotalCID = (cid) =>
  cid.map(([_, val]) => val).reduce((sum, a) => sum + a, 0);

const fillChange = (change) => {
  const changeObj = Object.fromEntries(change);
  const res = [];

  KEYS_AND_VALUES.forEach(([key, _]) => {
    res.unshift([key, changeObj[key] || 0]);
  });

  return res;
};

const checkCashRegister = (price, cash, cid) => {
  const cidObj = getObject(cid);
  let change = [];

  let changeVal = (cash - price).toFixed(2);
  if (changeVal > getTotalCID(cid))
    return { status: "INSUFFICIENT_FUNDS", change: [] };

  for (let [key, val] of KEYS_AND_VALUES) {
    if (changeVal >= val) {
      const count = Math.floor(changeVal / val);
      const amount = val * count > cidObj[key] ? cidObj[key] : val * count;

      if (amount !== 0) {
        changeVal -= amount;
        changeVal = changeVal.toFixed(2);
        change.push([key, amount]);
      }
    }
  }

  if (changeVal > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (getTotalCID(cid) - getTotalCID(change) === 0)
    return { status: "CLOSED", change: fillChange(change) };
  return { status: "OPEN", change };
};

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
