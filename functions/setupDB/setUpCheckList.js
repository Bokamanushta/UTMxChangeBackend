const db = require("../api/database");


async function setupDatabaseCheckList(req, res, next) {

    // deleting the collection first
    await deleteCollection("checkLists")

    // adding document
    await addDocuments("checkLists", [
        {
            title: 'Passport',
            value: false,
            type: 'documents',
        },
        {
            title: 'Copy of Passprt details page',
            value: false,
            type: 'documents',
        },
        {
            title: 'Entry Stamp to Malaysia(post-arrival)',
            value: false,
            type: 'documents',
        },
        {
            title: 'Single Entry Visa(SEV)',
            value: false,
            type: 'documents',
        },
        {
            title: 'Visa ApprovalLetter',
            value: false,
            type: 'documents',
        },
        {
            title: 'UTM Offer Letter',
            value: false,
            type: 'documents',
        },
        {
            title: 'Accommodation documents',
            value: false,
            type: 'documents',
        },
        {
            title: 'Personal Clothes',
            value: false,
            type: 'personal',
        },
        {
            title: 'Toiletries for your first fewdays',
            value: false,
            type: 'personal',
        },
        {
            title: 'Medicines',
            value: false,
            type: 'personal',
        },
        {
            title: 'National and traditional dress for formal occasionandactivities',
            value: false,
            type: 'personal',
        },
        {
            title: 'Bring MYR currency incase there are any delays in setting up a bank account',
            value: false,
            type: 'personal',
        },
        {
            title: 'Smart phone and Laptop/Notebook',
            value: false,
            type: 'personal',
        },
        {
            title: 'Keep the copy of your passport in a separate and safe place incase the document is lost or stolen. You may also leave the copy to your family and friend to be extra safe',
            value: false,
            type: 'tips',
        },
        {
            title: 'Avoid bringing valuable items with you such as jewelry and keepsakes. If you are certain you would like to bring valuable items with you, make sure they are insured and always stored securely.',
            value: false,
            type: 'tips',
        }

    ]);
    res.send(`Setting Up Database.... CheckLists Done`);
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection);
    const docs = await cref.listDocuments();
    docs.forEach((doc) => doc.delete());
}

async function addDocuments(collection, docs) {
    docs.forEach(async (doc) => await db.create(collection, doc));
}

module.exports = setupDatabaseCheckList;