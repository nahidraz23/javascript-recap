let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth(); // this will show zero, cause month is zero based

x = d.getDate(); // this will show the day of the month

x = d.getDay(); // this will show the week of the month

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format();
x = Intl.DateTimeFormat('en-GB').format();
x = Intl.DateTimeFormat('default').format();

x = Intl.DateTimeFormat('default', {month: 'long'}).format();

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZone: 'America/New_York'
});

console.log(x)
