
import  { getProducts }  from "./getProducts.js"
let ProductContainer = document.querySelector(".ProductContainer")

document.addEventListener("DOMContentLoaded", async () => {
const data = await getProducts ("https://fakestoreapi.com/products");

products(data,ProductContainer);
});

async function products(list, container) {
    list.forEach( ( styleProducts ) => {
        const addEvent = document.createElement("div");

        addEvent.classList.add(
            "bg-background-color",
            "max-w-40",
            "h-40",
            "flex",
            "flex-col",
            "justify-around",
            "items-center",
            "text-primary-color-300",
            "p-3",
            "text-justify",
            "rounded-lg",
            "text-[8px]",

        )
addEvent.innerHTML=`
            <img src="${styleProducts.image}" alt="" class="w-[40px]">
            <p class="text-[8px]">${styleProducts.title}</p>
            <h3>${styleProducts.title}</h3>
            <button class="text-blue-950">${styleProducts.price}</button>
`

container.appendChild(addEvent);
    });

}


