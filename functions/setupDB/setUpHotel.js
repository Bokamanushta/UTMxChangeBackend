const db = require("../api/database");


async function setupDatabaseDoDont(req, res, next) {

    // deleting the collection first
    await deleteCollection("hotels")

    // adding document
    await addDocuments("hotels", [
        {
            name: 'Scholars Inn',
            address: 'Block U9, Kolej Perdana, UTM,  Johor Bahru, Johor 81310 Malaysia.',
            telephone: '07-5535197',
            personCharge: 'Lee Wong',
        },
        {
            name: 'Rose Cottage Hotel',
            address: 'No. 76 & 78, JalanKebudayaan 1, Taman Universiti, 81300 Johor, Malaysia.',
            telephone: '07-5211366',
            personCharge: 'Ms. Junaidah bintiAni',
        },
        {
            name: 'U Hotel',
            address: '34, 34-01, JalanKebudayaan 5, Taman Universiti, 81300, Skudai, Malaysia.',
            telephone: '012-7542543/07-5203688',
            personCharge: 'Ms. June',
        },
        {
            name: 'The Uni GardenHote',
            address: 'No. 112, Jalan Pendidikan 6, Taman Universiti, 81300 Skudai, Johor, Malaysia.',
            telephone: '0118340998',
            personCharge: 'Mohammad Iqbal Hossein',
        },
        {
            name: 'Apollo Hotel',
            address: 'No. 30 & 32, Jalan Kebudayaan 5, Taman Universiti, 81300 Skudai, Johor, Malaysia.',
            telephone: '07-5206888/07-5201888',
            personCharge: 'Xion Lee',
        },
        {
            name: 'Q Hotel',
            address: 'No. 17, Kebudayaan 2, Taman Universiti, 81300 Skudai, Johor.',
            telephone: '07-5217969',
            personCharge: 'Neevashshini Dotto',
        }
    ]
    );
    res.send(`Setting Up Database.... hotels Done`);
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