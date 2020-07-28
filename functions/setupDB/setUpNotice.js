const db = require("../api/database");


async function setupDatabaseDoDont(req, res, next) {

    // deleting the collection first
    await deleteCollection("notices")

    // adding document
    await addDocuments("notices", [
        {
            title: 'Urgent Followup Session',
            date: '12/04/2020',
            attatchment: 'will be added later',
            type: 'official',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem'
        },
        {
            title: 'UTM Dinner Night Session',
            date: '19/05/2020',
            attatchment: 'will be added later',
            type: 'official',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem'
        },
        {
            title: 'Corona Update',
            date: '12/04/2020',
            attatchment: 'will be added later',
            type: 'official',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem'
        },
        {
            title: 'VC Messages to all Inbounds',
            date: '21/04/2020',
            attatchment: 'will be added later',
            type: 'event',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem'
        },
        {
            title: 'Inbounds Dinner Night',
            date: '24/04/2020',
            attatchment: 'will be added later',
            type: 'event',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem'
        },
        {
            title: 'Urgent Meeting in UTM Internationl',
            date: '08/04/2020',
            attatchment: 'will be added later',
            type: 'event',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem'
        },
        {
            title: 'Trips Around JB',
            date: '12/04/2020',
            attatchment: 'will be added later',
            type: 'event',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem'
        },
    ]
    );
    res.send(`Setting Up Database.... notices Done`);
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