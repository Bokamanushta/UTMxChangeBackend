const db = require("../api/database");


async function setupDatabaseDoDont(req, res, next) {

    // deleting the collection first
    await deleteCollection("places")

    // adding document
    await addDocuments("places", [
        {
            title: 'LEGOLAND MALAYSIA',
            description: 'Legoland Malaysia, Johor Bahru is the first theme park in Asia and sixth in the world upon its establishment. It is full packed of family fun with more than 40 rides, shows and attractions. Almost everything is hands-on, so you can push, pedal and program, or steer, squirt and splash, your way through a truly interactive experience. Come and enjoy all the amazing kid-friendly features made by the LEGO bricks. Even the flowers are made of LEGO Bricks! Legoland Malaysia is only 20 minutes from Pulai Springs Resort. Visit us at http://www.pulaisprings.com/packages/legoland-malaysia-hotel-packages to view our Legoland Malaysia Holiday Packages. It will be worth it!',
            distance: '26.5 KM',
            imageLocation: 'assets/images/legoland.png',
            review: '4.9'
        },
        {
            title: 'PUTERI HARBOUR',
            description: 'Puteri Harbour is home to the southernmost marina on the mainland of continent Asia, making it a must visit destination on the world sailing map. Located at the narrow-most point between Singapore and Johor; known as the Puteri Narrows, Malaysia – lies the breathtaking Marinas at Puteri Harbour. The Public Marina, Private Marina & Mega Yacht Marina can accomodate yachts with LOA up to 90 . Other outdoor activities Puteri Harbour offers are River cruise and firefly trips from Puteri Harbour to Sungai Perapat or Sungai Pendas, Pulau Merambung, Kukup, RAMSAR Sungai Pulai and Danga Bay. Fishing and diving trips at Pulau Pisang or any customer preferred areas. Watersports – canoe, kayak, paddle boats, water polo. Joy ride, Banana boat and wakeboard, Bicycle rental, Boating and sailing courses',
            distance: '27.6 KM',
            imageLocation: 'assets/images/puteri_harbour.jpg',
            review: '4.8'
        },
        {
            title: 'JOHOR PREMIUM OUTLET',
            description: 'Let’s go shopping!  JPO is a collection of 130 designer and name brand outlet stores. Good news for the shopping lovers where JPO Collection of finest brands in unique outdoor settings and offers impressive savings of 25% to 65% every day. ',
            distance: '12.8 KM',
            imageLocation: 'assets/images/jpo.jpg',
            review: '4.5'
        },
        {
            title: 'R&F TANJUNG PUTERI',
            description: 'Tanjung Puteri Waterfront in the heart of Johor Bahru city is a 157-acre mixed development straddling both sides of the Causeway to Singapore. Enjoy a relaxing stroll along the waterfront replete with world-class coastal amenities- this setting of Tanjung Puteri’s Cultural district will be sure to kindle your passion for creativity.',
            distance: '29.5 KM',
            imageLocation: 'assets/images/R&F TANJUNG PUTERI.jpg',
            review: '4.7'
        }
    ]
    );
    res.send(`Setting Up Database.... places Done`);
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