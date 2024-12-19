const DMY = "dd-mm-yyyy";
const MDY = "mm-dd-yyyy";
const YMD = "yyyy-mm-dd";

function slice(date, start, end) {
  let subString = "";

  for (let index = start; index <= end; index++) {
    subString += date[index];
  }

  return subString;
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeap(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return isDivisible(year, 4) && !isDivisible(year, 100);
}

function maxNoOfDays(month, year) {
  if (month === 2) {
    return isLeap(year) ? 29 : 28;
  }

  return 30 + (month % 7) % 2;
}

function isValidDay(day, month, year) {
  return day > 0 && day <= maxNoOfDays(month, year);
}

function isValidMonth(month) {
  return month > 0 && month < 13;
}

function isValidYear(year) {
  return year > 0;
}

function isAllValid(day, month, year) {
  if (!isValidYear(year)) {
    return "invalid year";
  }
  if (!isValidMonth(month)) {
    return "invalid month";
  }
  if (!isValidDay(day, month, year)) {
    return "invalid day";
  }

  return "valid";
}

function isValidYMD(format, date) {
  const year = slice(date, 0, 3);
  let month = slice(date, 5, 6);
  let day = slice(date, 8, 9);

  if (format === DMY) {
    const temp = day;
    day = month;
    month = temp;
  }

  return isAllValid(+day, +month, +year);
}

function getStandardizedDate(format, date) {
  if (format === YMD) {
    return date;
  }

  return slice(date, 6, 9) + "-" + slice(date, 0, 4);
}

function isDigit(x) {
  return x >= "0" && x <= "9";
}

function isDateAccordingToFormat(format, date) {
  if (date.length !== format.length) {
    return false;
  }

  for (let i = 0; i < date.length; i++) {
    if (format[i] === "-" && date[i] !== "-") {
      return false;
    }
    if (format[i] !== "-" && !isDigit(date[i])) {
      return false;
    }
  }
  return true;
}

function isValidFormat(format) {
  return format === DMY || format === MDY || format === YMD;
}

function validate(format, date) {
  if (!isValidFormat(format)) {
    return "invalid format";
  }
  if (!isDateAccordingToFormat(format, date)) {
    return 'date not according to format';
  }

  const convertToYMDFormat = getStandardizedDate(format, date);
  return isValidYMD(format, convertToYMDFormat);
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  const status = result === expected ? '✅' : '❌';

  console.log(status, format, date, expected, "|", result);
}

function testDDMMYYYY() {
  console.log("\n------ checking for 'dd-mm-yyyy' ------\n");
  testValidate('dd-mm-yyyy', '11-11-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-aasa', 'date not according to format');
  testValidate('dd-mm-yyyy', '11-11-yyyy', 'date not according to format');
  testValidate('dd-mm-yyyy', ' 1-11-111', 'date not according to format');
  testValidate('dd-mm-yyyy', '1111-11-11', 'date not according to format')
  testValidate('dd-mm-yyyy', '30-02-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '32-09-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '31-04-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '31-11-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '30-11-2023', 'valid');
  testValidate('dd-mm-yyyy', '31-12-2023', 'valid');
  testValidate('dd-mm-yyyy', '01-aa-0001', 'date not according to format');
}

function testMMDDYYYY() {
  console.log("\n------ checking for 'mm-dd-yyyy' ------\n");
  testValidate('mm-dd-yyyy', '11-11-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-tasa', 'date not according to format');
  testValidate('mm-dd-yyyy', '11-11-yyyy', 'date not according to format');
  testValidate('mm-dd-yyyy', '02-29-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '02-30-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '09-32-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '04-31-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '11-31-2023', 'invalid day');
  testValidate('mm-dd-yyyy', 'aa-01-0001', 'date not according to format');
}

function testYYYYMMDD() {
  console.log("\n------ checking for 'yyyy-mm-dd' ------\n");
  testValidate('yyyy-mm-dd', '1111-11-1', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11111-1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11-11-1111', 'date not according to format');
  testValidate('yyyy-mm-dd', '0000-11-11', 'invalid year');
  testValidate('yyyy-mm-dd', 'yyyy-11-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '0001-00-01', 'invalid month');
  testValidate('yyyy-mm-dd', '2023-12-31', 'valid');
  testValidate('yyyy-mm-dd', '2024-02-29', 'valid');
  testValidate('yyyy-mm-dd', '1900-02-28', 'valid');
  testValidate('yyyy-mm-dd', '1900-02-28', 'valid');
  testValidate('yyyy-mm-dd', '0001-01-01', 'valid');
}

function testValidFormat() {
  console.log("\n------ checking for is format valid ? ------\n");
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-yy-kkkk', '01-01-2020', 'invalid format');
  testValidate('dd-dd-dddd', '01-01-2020', 'invalid format');
}

function testAll() {
  testValidFormat();
  testDDMMYYYY();
  testMMDDYYYY();
  testYYYYMMDD();
  testValidate("dd-mm-yyyy", "01-01-2-20", "date not according to format");
}

testAll();