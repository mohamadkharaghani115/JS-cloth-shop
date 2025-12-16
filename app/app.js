
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
            "w-80",
            "h-40",
            "flex",
            "flex-col",
            "justify-between",
            "item-center",
            "text-primary-color-300",
            "p-3",
            "text-justify",
            "rounded-lg",
            "text-[10px]",

        )
addEvent.innerHTML=`
            <img src="${styleProducts.image}" alt="">
            <p>${styleProducts.title}</p>
            <h3>${styleProducts.title}</h3>
            <button>${styleProducts.price}</button>
`

container.appendChild(addEvent)
    });

}


