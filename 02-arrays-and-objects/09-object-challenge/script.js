let x;

// step 1
const library = [
    {
        title: "Bela Furabar Age",
        author: "Arif Azad",
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: "Paradoxical Sazid",
        author: "Arif Azad",
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: "Hayater Din Furole",
        author: "Arif Azad",
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
];


// step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// step 3
const {title: firstBook} = library[0];

// step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);