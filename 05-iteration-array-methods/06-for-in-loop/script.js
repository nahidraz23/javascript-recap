const colorObj = {
    color1: 'red',
    color2: 'orange',
    color3: 'blue',
    color4: 'yellow',
    color5: 'purple'
}

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}