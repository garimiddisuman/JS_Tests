const format = 'yyyy-mm-dd';
const date = "2000-11-30";

let month = "";
let day = "";
let year = "";
let isValid = false;

if (format === "yyyy-mm-dd") {
  month = date[5] + date[6];
  day = +(date[8] + date[9]);
  year = date[0] + date[1] + date[2] + date[3];
}

if (format === "mm-dd-yyyy") {
  month = date[0] + date[1];
  day = +(date[3] + date[4]);
  year = date[6] + date[7] + date[8] + date[9];
}

if (format === "dd-mm-yyyy") {
  month = date[3] + date[4];
  day = +(date[0] + date[1]);
  year = date[6] + date[7] + date[8] + date[9];
}

if (date.length !== 10) {
  year = 0;
}

if (+ year > 0) {
  if (month === "02") {
    const isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

    if (isLeapYear && day < 30 && day > 0) {
      isValid = true;
    }
    else if (!isLeapYear && day < 29 && day > 0) {
      isValid = true;
    }
  }

  const noOfDays = +year === 2 ? 0 : 31 - ((month - 1) % 7) % 2;

  if (noOfDays === 31) {
    isValid = day < 32 && day > 0;
  }

  if (noOfDays === 31) {
    isValid = day < 31 && day > 0;
  }

}

console.log(isValid ? "valid" : "invalid");