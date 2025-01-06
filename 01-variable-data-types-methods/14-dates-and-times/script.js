let d;

d = new Date();

d = d.toString();

d = new Date(2021, 1, 10, 12, 30, 0); // Month is Zero based, this will show February

d = new Date ('2021-07-10T12:13:00'); // This format is One based, this will show July

d = new Date('07/10/2021 12:30:00');

d = new Date ('2022-07-10');

// Timestamp, in JavaScript default timestamp is in millisecond
d = Date.now(); // will show time in millisecond

// d = new Date('07-10-2022 12:30:00');
d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1736190324870); // get exact date time using timestamp

d = Math.floor(Date.now() / 1000);

console.log(d);