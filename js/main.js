const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


const carouselWrapper = document.querySelector(".carousel-wrapper");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");


let activeImageIndex = 0;

images.forEach((element, index) => {

    const carouselSlide = document.createElement("div");
    carouselSlide.classList.add("carousel-slide");

    const carouselMainImage = document.createElement("img");
    carouselMainImage.setAttribute("src", element.url);
    carouselMainImage.classList.add("carousel-img");

    const carouselMainText = document.createElement("div");
    carouselMainText.classList.add("carousel-text");
    carouselMainText.innerHTML = `<h1>${element.title}</h1>
                                    <h5>${element.description}</h5>`;

    carouselSlide.append(carouselMainImage, carouselMainText);

    if(index === activeImageIndex){
        carouselSlide.classList.add("active");
        carouselSlide.classList.add("active");
    }

    carouselWrapper.append(carouselSlide);


});



nextButton.addEventListener("click", function(){
    changeCarouselImage(carouselWrapper, true);
})

prevButton.addEventListener("click", function(){
    changeCarouselImage(carouselWrapper, false);
})


function changeCarouselImage(htmlElement, advanceToNext){

    htmlElement.children[activeImageIndex].classList.remove("active");

    if(advanceToNext){
        activeImageIndex++;

        if(activeImageIndex === images.length){
            activeImageIndex = 0;
        }

    } else {
        activeImageIndex--;

        if(activeImageIndex < 0){
            activeImageIndex = images.length - 1;
        }
    }

    console.log(activeImageIndex);




    // Aggiungere la classe active al nuovo elemento
    htmlElement.children[activeImageIndex].classList.add("active");

}