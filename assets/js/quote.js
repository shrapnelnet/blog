const quotebank = [
    "jesus don't want me for a sunbeam!",
    "is the man who sold the world",
    "choose life, choose a job",
    "chuffing back a fat dart",
    "still not goth",
    "может правда все закончится вот так!",
    "active cigarette lobby member",
    "remembers space cake's requiem",
    "yet another shit in the sandpit",
    "this user is mortal",
    "the internet is serious business",
    "beer respects me",
    "on the internet, nobody knows you're a dog",
    "good grief!",
    "bow to me!",
    "stuffed with love fluff",
    "tip your waiter",
    "on a plain",
    "UK DUTY PAID",
    "let children breathe your smoke!",
    "my back hurts!!",
    "happy new year 2003!",
    "meows at passing cars",
    "are you okay, dude?",
    "axolotl fan",
    "this user enjoys smirnoff",
    "this user enjoys chekhov",
    "now with 50% less sugar",
    "contains nicotine and tar",
    "only to be sold as a multipack",
    "banned in syria!",
    "popular in azerbajan!",
    "friends with sewerslvt!"
]


const len = quotebank.length
const quote = quotebank[Math.floor(Math.random() * len)]
document.getElementById("quote").innerHTML = `&#8220;${quote}&#8221;`