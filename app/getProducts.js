export async function getProducts(API) {




    const gettUI = await fetch(API);

    const data = await gettUI.json();

    return data;
}

