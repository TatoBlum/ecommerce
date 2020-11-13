// import Img from '../Item/Img/Img.jpg';
import headphone  from '../Item/Img/headphone.jpg';
import phone  from '../Item/Img/phone.jpeg';
import macbook  from '../Item/Img/macbook.jpg';
import speaker  from '../Item/Img/speaker.jpeg';

const ItemList = [
    {
        id: '1',
        name: 'Headphone',
        description: 'Sennheiser HD-25',
        stock: 1,
        img: headphone,
        price: 100,
    },
    {
        id: '2',
        name: 'Iphone',
        description: 'Iphone 11x',
        stock: 5,
        img: phone,
        price: 300,
    },
    {
        id: '3',
        name: 'MacBook',
        description: 'Pro 15 2020',
        stock: 2,
        img: macbook,
        price: 1500,
    },
    { 
        id: '4',
        name: 'JBL Speaker',
        description: '360-Degree Pro',
        stock: 2,
        img: speaker,
        price: 200,
    }      
]

export default [ItemList];