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
    "friends with sewerslvt!",
    "did not do that thing in bosnia",
    "legally blind!",
    "is fragile! (be nice)",
    "over 5 views a month!",
    "now likeable!",
    "pagination is hard!",
    "did not sign up for this",
    "better luck next life!",
    "loves msg!",
    "why not take a break?",
    "i killed kenny!",
    "i am cute when i sleep!",
    "i can't see!!!!!",
    "invented git!",
    "responsible for java v8!",
    "now marketable!",
    "secretly made lainchan!",
    "got rid of the python GIL!",
    "is paid £5000000 for this!",
    "this user enjoys absolut vanilla",
    "perpetually ill!",
    "possibly the bees knees",
    "generally jovial",
    "full time ikea fiend",
    "refuses to pay £1.90 for monster energy ultra",
    "writing from prison",
    "possibly richard nixon",
    "friends with doctor house!",
    "manufactures glycine!",
    "loves to hate!",
    "hates to love!",
    "has popcorn lung!",
    "is goddamn tired!",
    "friends with makarov!",
    "invented the ak/47!",
    "Licensed clairvoyant!",
    "on the agora road!",
    "set a doctype moron!",
    "installing adware...",
    "i have your ip address!!",
    "pure filth!",
    "i hate computers!",
    "meow meow meow",
    "merry christmas!",
    "wears an eyepatch!",
    "made a humans.txt file that you didn't even read...",
    "friends with jay eazy!",
    "fan of rain!",
    "certified fresh!",
    "morbid!",
    "enjoys scraps of wire!",
    "free as in freedom!",
    "RMS' biggest fan!",
    "XZ utils exploit author!",
    "friends with linus torvalds!",
    "not a real programmer!",
    "brigitte main!",
    "i renamed twitter!",
    "just hit the east side of the LBC!",
    "has 1 hour of computer time this week!",
    "grounded! (no fly list)",
    "friends with maia crimew!",
    "destroyed gradle with my own two hands!",
    "evil!!!",
    "proud keychron owner!",
    "rotten!",
    "is george w bush!"
]


const len = quotebank.length
const quote = quotebank[Math.floor(Math.random() * len)]
document.getElementById("quote").innerHTML = `&#8220;${quote}&#8221;`