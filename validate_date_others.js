function getDay(format, date) {
  if (format === "dd-mm-yyyy") {
    return date[0] + date[1];
  }
  if (format === "mm-dd-yyyy") {
    return date[3] + date[4];
  }
  if (format === "yyyy-mm-dd") {
    return date[8] + date[9];
  }
}

function getMonth(format, date) {
  if (format === "dd-mm-yyyy") {
    return date[3] + date[4];
  }
  if (format === "mm-dd-yyyy") {
    return date[0] + date[1];
  }
  if (format === "yyyy-mm-dd") {
    return date[5] + date[6];
  }
}

function getYear(format, date) {
  if (format === "dd-mm-yyyy") {
    return date[6] + date[7] + date[8] + date[9];
  }
  if (format === "mm-dd-yyyy") {
    return date[6] + date[7] + date[8] + date[9];
  }
  if (format === "yyyy-mm-dd") {
    return date[0] + date[1] + date[2] + date[3];
  }
}

function isLeap(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function isFormatValid(format) {
  switch (format) {
    case "dd-mm-yyyy":
      return true;
    case "mm-dd-yyyy":
      return true;
    case "yyyy-mm-dd":
      return true;
  }
  return false;
}

function isDateHasSpace(date) {
  for (let i = 0; i < date.length; i++) {
    if (date[i] === " " || date.length !== 10) {
      return true;
    }
  }
  return false;
}

function isDateAccordingToTheFormat(format, date) {
  if (isDateHasSpace(date)) {
    return false;
  }
  if (format === "dd-mm-yyyy" && date[2] === "-" && date[5] === "-") {
    return true;
  }
  if (format === "mm-dd-yyyy" && date[2] === "-" && date[5] === "-") {
    return true;
  }
  if (format === "yyyy-mm-dd" && date[4] === "-" && date[7] === "-") {
    return true;
  }
}


function isYearValid(year) {
  return year > 0;
}

function isMonthValid(month) {
  return month > 0 && month <= 12;
}

function isDayValid(year, month, day) {
  if (month === 2 && isLeap(year)) {
    return day <= 29 && day > 0;
  }
  if (month === 2 && !isLeap(year)) {
    return day < 29 && day > 0;
  }
  const noOfDays = 31 - ((month - 1) % 7) % 2;

  if (noOfDays === 30) {
    return day <= 30 && day > 0;
  }
  return day <= 31 && day > 0;
}

function isAllValid(month, day, year) {
  if (!isYearValid(year)) {
    return 'invalid year';
  }
  if (!isMonthValid(month)) {
    return 'invalid month';
  }
  if (!isDayValid(year, month, day)) {
    return 'invalid day';
  }
  return "valid";
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return "invalid format";
  }
  if (!isDateAccordingToTheFormat(format, date)) {
    return 'date not according to format';
  }

  const day = getDay(format, date);
  const month = getMonth(format, date);
  const year = getYear(format, date);
  const checkingResult = isAllValid(+month, +day, +year);

  if (checkingResult !== "valid") {
    return checkingResult;
  }

  return "valid";
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  const mark = result === expected ? '✅' : '❌';

  console.log(mark, format, date, expected, "|", result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('dd-mm-mmmm', '01-01-2020', 'invalid format');
  testValidate('yy-dd-mmmm', '01-01-2020', 'invalid format');
  testValidate('mm-yy-dddd', '01-01-2020', 'invalid format');
  testValidate('dd-dd-dddd', '01-01-2020', 'invalid format');

  testValidate('dd-mm-yyyy', '11-11-111', 'date not according to format');
  testValidate('dd-mm-yyyy', '1111-11-11', 'date not according to format');
  testValidate('dd-mm-yyyy', '11-1-1111', 'date not according to format');
  testValidate('dd-mm-yyyy', '1-11-1111', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-11-1', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11111-1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11-11-1111', 'date not according to format');

  testValidate('yyyy-mm-dd', '0000-11-11', 'invalid year');
  testValidate('yyyy-mm-dd', 'tada-11-11', 'invalid year');
  testValidate('yyyy-mm-dd', 'yyyy-11-11', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-tasa', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-yyyy', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-tasa', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-yyyy', 'invalid year');

  testValidate('yyyy-mm-dd', '0001-00-01', 'invalid month');
  testValidate('yyyy-mm-dd', '0001-13-01', 'invalid month');
  testValidate('yyyy-mm-dd', '0001-1a-01', 'invalid month');
  testValidate('yyyy-mm-dd', '0001-aa-01', 'invalid month');
  testValidate('mm-dd-yyyy', '00-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '13-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '1a-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', 'aa-01-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-00-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-13-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-1a-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-aa-0001', 'invalid month');

  testValidate('dd-mm-yyyy', '29-02-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '30-02-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '32-09-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '31-04-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '31-11-2023', 'invalid day');

  testValidate('mm-dd-yyyy', '02-29-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '02-30-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '09-32-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '04-31-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '11-31-2023', 'invalid day');

  testValidate('yyyy-mm-dd', '2023-02-29', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-02-30', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-09-32', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-04-31', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-11-31', 'invalid day');

  testValidate('yyyy-mm-dd', '2023-11-30', 'valid');
  testValidate('yyyy-mm-dd', '2023-12-31', 'valid');
  testValidate('yyyy-mm-dd', '2024-02-29', 'valid');
  testValidate('yyyy-mm-dd', '1900-02-28', 'valid');
  testValidate('yyyy-mm-dd', '1900-02-28', 'valid');
  testValidate('yyyy-mm-dd', '0001-01-01', 'valid');

  testValidate('dd-mm-yyyy', '30-11-2023', 'valid');
  testValidate('dd-mm-yyyy', '31-12-2023', 'valid');
  testValidate('dd-mm-yyyy', '29-02-2024', 'valid');
  testValidate('dd-mm-yyyy', '28-02-1900', 'valid');
  testValidate('dd-mm-yyyy', '28-02-1900', 'valid');
  testValidate('dd-mm-yyyy', '01-01-0001', 'valid');

  testValidate('mm-dd-yyyy', '11-30-2023', 'valid');
  testValidate('mm-dd-yyyy', '12-31-2023', 'valid');
  testValidate('mm-dd-yyyy', '02-29-2024', 'valid');
  testValidate('mm-dd-yyyy', '02-28-1900', 'valid');
  testValidate('mm-dd-yyyy', '02-28-1900', 'valid');
  testValidate('mm-dd-yyyy', '01-01-0001', 'valid');
}

testAll();