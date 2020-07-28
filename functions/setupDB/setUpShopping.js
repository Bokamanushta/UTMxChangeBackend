const db = require("../api/database");


async function setupDatabaseDoDont(req, res, next) {

    // deleting the collection first
    await deleteCollection("shops")

    // adding document
    await addDocuments("shops", [
        {
            title: 'AEON',
            address: 'Taman university, Skudai, Johor',
            type: 'Shapping Mall',
            distance: '18 KM',
            priceRannge: 'Medium'
        },
        {
            title: 'U-Mall',
            address: 'Taman pulai utama, Skudai, Johor',
            type: 'Shapping Mall',
            distance: '18 KM',
            priceRannge: 'Low to Medium'
        },
        {
            title: 'Eco Shop',
            address: 'Taman university, Skudai, Johor',
            type: 'Grocery Mall',
            distance: '16 KM',
            priceRannge: 'Low to Medium'
        },
        {
            title: 'Johor Bahru City Sqaure',
            address: 'Office Tower, Johor Bahru City Square',
            type: 'Shapping Mall',
            distance: '18 KM',
            priceRannge: 'Medium to High'
        },
        {
            title: 'Paradigm Mall',
            address: 'Jalan bartingkat, Skudai, Johor',
            type: 'Shapping Mall',
            distance: '18 KM',
            priceRannge: 'Medium to High'
        },
        {
            title: 'Shopee',
            address: 'https://shopee.com.my/',
            type: 'Online Shopping',
            distance: '0 KM',
            priceRannge: 'Low to High'
        },
        {
            title: 'Lazada',
            address: 'https://lazada.com.my/',
            type: 'Online Shopping',
            distance: '0 KM',
            priceRannge: 'Low to High'
        }
    ]
    );
    res.send(`Setting Up Database.... shops Done`);
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