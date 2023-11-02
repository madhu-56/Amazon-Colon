const slide = document.querySelectorAll(".slide")
var counter = 0;
// console.log("egfbg")
slide.forEach(
    (slide,index) =>{
        slide.style.top=`${index*100}%`
    }
)
const goprev = () =>{
    counter--
   
    slideImage()
}
const goNext = () =>{
    counter++
    
    slideImage()
}
const slideImage = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translatey(-${counter*100}%)`
        }
    )
}