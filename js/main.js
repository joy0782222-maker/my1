
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
    }
];

const storyList = document.querySelector("#story-list");
const storyTemplate = document.querySelector("#story-template");

if (storyList && storyTemplate) {
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
}

window.addEventListener("scroll",()=>{
    const sections = document.querySelectorAll("section")
    const hNav = document.querySelectorAll(".hNav")
    // console.log(sections,dots);
    sections.forEach((section,index)=>{
        // console.log(section,index);
        
        // 화면 위에서 얼마나 떨어졌는지
        const top = section.getBoundingClientRect().top
        // console.log(top);

        // 화면 위쪽에서 가까워지면 메뉴 활성화
        if(top < window.innerHeight / 2){
            hNav.forEach((hNav)=>{
                hNav.classList.remove("active")
            })
            hNav[index].classList.add("active")
        }
        
    })
    
})
