

// 第一步把查询函数抽离出来
const findMiscreant = (people) => {
  for (const p of people) {
    if (p === "Don") {
      // setOffAlarms(); // delete
      return "Don";
    }
    if (p === "John") {
      // setOffAlarms(); // delete
      return "John";
    }
  }
  return "";
}


function alertForMiscreant(people) {
  if (findMiscreant(people) !== "") setOffAlarms();
}