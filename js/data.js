const products_items = [
    {
        id: 1,
        src: 'images/GameHub_covers10.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '100'
    },
    {
        id: 2,
        src: 'images/GameHub_covers3.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '200'
    },
    {
        id: 3,
        src: 'images/GameHub_covers.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '599'
    },
    {
        id: 4,
        src: 'images/GameHub_covers3.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '599'
    },
    {
        id: 5,
        src: 'images/GameHub_covers.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '599'
    },
    {
        id: 6,
        src: 'images/GameHub_covers10.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '599'
    },
    {
        id: 7,
        src: 'images/GameHub_covers3.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '599'
    },
    {
        id: 8,
        src: 'images/GameHub_covers10.jpg',
        alt: 'Game 1',
        title: 'Game 1',
        price: '599'
    }

];



let myCart = JSON.parse(localStorage.getItem("cart")); // cart working with localStorage

if(myCart === null) {  // cart working with localStorage
    localStorage.setItem("cart",JSON.stringify([]))
    myCart = []
}


document.querySelector('.cart-count-item span').innerHTML = myCart.length;

