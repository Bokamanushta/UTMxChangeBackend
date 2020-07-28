const db = require("../api/database");


async function setupDatabaseDoDont(req, res, next) {

    // deleting the collection first
    await deleteCollection("students")

    // adding document
    await addDocuments("students", [
        {
            image: 'assets/images/avator.jpg',
            name: 'Kelvin Robert',
            university: 'University of Holman',
            country: 'Netherland',
            description: 'Hi there, I am Kelvin. I will be happy if you want to reach me. stay safe stay funky',
            faculty: "FE",
            registerStatus: false,
            semester: "2020/21-02",
            age: "21",
            gender: "Male",
            passport: "HK990O990",
            username: "kelvin.holand",
            password: "1234RFKO",
            email: "kelvin@holand.com"
        },
        {
            image: 'assets/images/avator.jpg',
            name: 'Sri pal Ram Sharma',
            university: 'University of Kalkatta',
            country: 'India',
            description: 'Hi there, I am Kelvin. I will be happy if you want to reach me. stay safe stay funky',
            faculty: "FE",
            registerStatus: false,
            semester: "2020/21-02",
            age: "22",
            gender: "Male",
            passport: "HK990O990",
            username: "ramSharme.kolkatta",
            password: "1234RFKO",
            email: "sharma@india.com"
        },
        {
            image: 'assets/images/avator.jpg',
            name: 'Xiang de Koilen',
            university: 'University of Guinkiold',
            country: 'Hungari',
            description: 'Hi there, I am Xiang. I will be happy if you want to reach me. stay safe stay funky',
            faculty: "FE",
            registerStatus: false,
            semester: "2020/21-02",
            age: "21",
            gender: "Female",
            passport: "JI90O990",
            username: "Xianf.holand",
            password: "asd90s",
            email: "hue@holand.com"
        },
        {
            image: 'assets/images/avator.jpg',
            name: 'Nivora Horeun',
            university: 'University of Denmark',
            country: 'Denmark',
            description: 'Hi there, I am Kelvin. I will be happy if you want to reach me. stay safe stay funky',
            faculty: "FE",
            registerStatus: false,
            semester: "2020/21-02",
            age: "19",
            gender: "Male",
            passport: "H0L9O990",
            username: "horeun.denmark",
            password: "1234RFKO",
            email: "denmark@holand.com"
        }
    ]
    );
    res.send(`Setting Up Database.... students Done`);
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection);
    const docs = await cref.listDocuments();
    docs.forEach((doc) => doc.delete());
}

async function addDocuments(collection, docs) {
    docs.forEach(async (doc) => await db.create(collection, doc));
}

module.exports = setupDatabaseDoDont;