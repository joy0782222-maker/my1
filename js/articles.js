
const stories = [
    {
        image: "img/BG/27cb18d655ed39b677376952e9cbf2f956581815.jfif",
        date: "October 10, 2025",
        title: "Finding Stillness in the Hills of San Cristóbal",
        href: "#"
    },
    {
        image: "img/BG/9b58dc9b48679876dd5ac9b6b654466614b6194e.jfif",
        date: "October 2, 2025",
        title: "Wandering Through the Streets of Rome",
        href: "#"
    },
    {
        image: "img/BG/5ca51572ba2d8e96fb00c8f39922e09cdf58f1fe.jfif",
        date: "September 17, 2025",
        title: "Driving Across Monument Valley",
        href: "#"
    },
    {
        image: "img/BG/a659699f2aa58f7db37edcdee7ea0940a78d834c.jfif",
        date: "September 2, 2025",
        title: "Walking the Terraces of Northern Vietnam",
        href: "#"
    },
    {
        image: "img/BG/f44daa8abaa7df35321bd36777d750a1d31662e9.jfif",
        date: "August 20, 2025",
        title: "Admiring the Clifftops of the Lycian Coast",
        href: "#"
    },
    {
        image: "img/BG/f0399cad0a53eae90ca207a53d1d1334df273e5e.jfif",
        date: "August 1, 2025",
        title: "Waiting by the Shores of the Red Sea",
        href: "#"
    },
    {
        image: "img/BG/02e47aa92e7e0947022a90128b4ac5626cca112d.jfif",
        date: "July 30, 2025",
        title: "Tracing Trails Throughthe Dolomite Highlands",
        href: "#"
    },
    {
        image: "img/BG/02296b5b8a49a0b0cd76e320f03ed2e486874615.jfif",
        date: "July 11, 2025",
        title: "Wild Camping Along Tasmania’s East Coast",
        href: "#"
    },
];

const storyList = document.querySelector("#story-list");
const storyTemplate = document.querySelector("#story-template");

stories.forEach((story) => {
    const card = storyTemplate.content.cloneNode(true);

    const link = card.querySelector("a");
    const image = card.querySelector(".s_img img");
    const date = card.querySelector(".story-date");
    const title = card.querySelector(".story-title");

    link.href = story.href;
    image.src = story.image;
    image.alt = story.title;
    date.textContent = story.date;
    title.textContent = story.title;

    storyList.appendChild(card);
});