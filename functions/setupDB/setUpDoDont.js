const db = require("../api/database");


async function setupDatabaseDoDont(req, res, next) {

    // deleting the collection first
    await deleteCollection("doDonts")

    // adding document
    await addDocuments("doDonts", [
        {
            title: 'Do learn Malaysian dining etiquette',
            description: "Since there are three major ethnicities among Malaysians, each restaurant will have different utensils. A Malay stall will give you a fork and a spoon. A Chinese-Malaysian restaurant will give you chopsticks and a spoon. An Indian-Malaysian establishment will probably offer a fork and spoon. Most Indians will eat without utensils by using their RIGHT hand. Only their right hand. The left is reserved for the bad/dirty things like cleaning after going to the bathroom, so they keep it separate. And before you get all grossed out… I’m sure they wash both hands after going to the bathroom, but still, the right hand prevails for all the clean and good stuff. If you are unsure what to do, watch the locals. Do what they do. It’s not easy to eat rice and curry with your fingers, but it’s fun to try.",
            type: 'do',
        },
        {
            title: 'Do dress respectfully',
            description: "Malaysians are moderate people. The Malay women wear a hair covering called a tudong. Usually with jeans, long pants, or a long skirt. Malaysian woman in floral tudong in tea plantation The Chinese and Indian Malaysians wear mainstream western clothes (unless they are dressed for a cultural event). Some of the Chinese women wear very short-shorts (aka cheek-peekers), and no one seems to care or notice for that matter. However, as a western woman, it’s very different. If I wore the same thing, I’d be gawked at by both sexes. It’s a dichotomy, but it’s true. I’ve worn a loose shirt with a cut out back and had a woman I know stop me and say, “Oh, you so sexy,” and giggled as she walked away in her cheek-peekers, leaving little to the imagination. As a traveler, you are free to wear anything you want. However, it’s always best to be more conservative than not. Just because side or underboob is a thing in America, doesn’t mean it’s a thing here. In fact, it’s not. And displaying any bit of your boob is pretty disrespectful. But if nothing else, it will undoubtedly draw a lot of attention, probably not the kind you want.",
            type: 'do',
        },
        {
            title: 'Do get used to a few gross habits',
            description: "By all means, this isn’t all Malaysians, not even most, but it happens. For some reason, slurping, burping and snorting out loud, even in restaurants, happens here. We were brought up never to slurp, burp or bring up a hairball at the table. But apparently there are people here who didn’t get that memo. There are times when we’ll be sitting down for a meal, and the guy next to me will start making these noises. I can only liken it to a cat bringing up a hairball from the depths of its gut. It is foul, but it happens. Don’t get me started on the nose-picking. Another thing we were taught not to do in public. But here, if you’ve got something up there, get it out. By all means necessary. That means knuckles deep, people. You’ve been warned.",
            type: 'do',
        },
        {
            title: 'Do Use Air Asia',
            description: "It’s not the nicest airline you’ll ever fly, certainly not the fanciest, but Air Asia is the cheapest. It’s a low-cost carrier that dominates the region. You can fly all over Southeast Asia for pennies. Seriously. It’s rare to spend more than 100 dollar unless you’re flying further afield.",
            type: 'do',
        },
        {
            title: 'Do eat the local food',
            description: "Eat at the food stalls and the hawker centers. It’s the best food you’ll eat while you are here. That’s where you’ll find the freshest and most authentic food outside of a friend’s kitchen. And it’s only a few dollars per plate. It is more common and less expensive for people to eat out than to cook at home. The stalls are cooking through their food every day. There are rarely leftovers, and stalls close when they run out of food, you know it’s being made fresh every day.",
            type: 'do',
        },
        {
            title: 'Don’t confuse the terms Malay and Malaysian',
            description: "Everyone who is from Malaysia is a Malaysian. But not every Malaysian is a Malay. Malays are the largest ethnic group in the country. They are Muslim and speak Bahasa Melayu as their first language. The Chinese and Indians, who came to Malaysia in the late 1700s, are Malaysians. They refer to themselves as Chinese Malaysian or Indian Malaysian. They are not Muslim, Bahasa isn’t their first language, and therefore they are not Malay.",
            type: 'dont',
        },
        {
            title: 'Don’t go there to party',
            description: "If you are looking for a party, look elsewhere. As a Muslim nation, however moderate it is, booze it taxed heavily here. You’ll spend more money on drinks than on your accommodations or food. If you are looking for that kind of holiday, try anywhere else in Southeast Asia, but not Malaysia. The one exception is Langkawi Island. If you want to party and drink alcohol, go there. It is a duty-free island, everything is cheap.",
            type: 'dont',
        },
        {
            title: 'Don’t take taxis – Grab yourself a ride',
            description: "Malaysia doesn’t use Uber, instead, we have Grab. It works the same, but you can pay cash if you want. Taxis suck, they don’t use meters, and are too expensive, so avoid them at all costs. Other than buses, Grab is the cheapest and easiest way to get around.",
            type: 'dont',
        },
        {
            title: 'Don’t shake hands with a Malay woman',
            description: "Man to man handshakes are common. However, if you are meeting a Muslim woman, do not reach out to shake her hand. Physical contact between members of the opposite sex is not encouraged. If she initiates the handshake, that is a different story, but generally speaking, females won’t. Also, after Muslims shake your hand, they will touch their heart meaning, I greet you from my heart. It symbolizes the connection and understanding between you.",
            type: 'dont',
        },
        {
            title: 'Don’t swap spit in public',
            description: "Keep the face sucking to yourself, it’s frowned upon in public. A quick peck or hand-holding is ok, but more than that will make the locals uncomfortable or feel disrespected. No Bueno.",
            type: 'dont',
        }
    ]
    );
    res.send(`Setting Up Database.... doDonts Done`);
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