const pic = document.querySelector(".pic");

if (pic) {
    pic.addEventListener("mouseenter", () => {
        pic.classList.add("is-hovered");
    });

    pic.addEventListener("mouseleave", () => {
        pic.classList.remove("is-hovered");
    });
}

// top btn
window.addEventListener("scroll",()=>{
    const sections = document.querySelectorAll("section")
    const dots = document.querySelectorAll(".dot")

    // console.log(sections,dots);
    sections.forEach((section,index)=>{
        // console.log(section,index);
        
        // 화면 위에서 얼마나 떨어졌는지
        const top = section.getBoundingClientRect().top
        // console.log(top);

        // 화면 위쪽에서 가까워지면 메뉴 활성화
        if(top < window.innerHeight / 2){
            dots.forEach((dot)=>{
                dot.classList.remove("active")
            })
            dots[index].classList.add("active")
        }
        
    })
    
})