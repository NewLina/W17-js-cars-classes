import {data} from './data.js';
const main=document.querySelector('.wrapper');
class Transport {
    type;
    price;
    brand;

    constructor (type, price, brand){
        this.type=type;
        this.price=price;
        this.brand=brand;
    }
    getInfo() {
        return `
            Type: ${this.type} <br>
            Brand: ${this.brand}
        `
    }
    getPrice(){
        return `Price: ${this.price} rub.`;
    }
}
class Car extends Transport{
    doors;

    constructor(type, price, brand, doors){
        super(type, price, brand);
        this.doors=doors;
    }
    getDoorsCount(){
        return `Doors: ${this.doors}`;
    }
}

class Bike extends Transport{
    maxSpeed;

    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed=maxSpeed;
    }
    getMaxSpeed() {
        return `Max. speed: ${this.maxSpeed}`;
    }
}

data.forEach((item)=>{
    const vehicleCar=new Car(item.type, item.price, item.brand, item.doors);
    const vehicleBike=new Bike(item.type, item.price, item.brand, item.maxSpeed);

function createItems() {
    item.type==='car' ? createItemCar() : createItemBike();
}
    function createItemCar(){
        let display='';
        display=`<div class='vehicle'><div class='vehicle__info'>${vehicleCar.getInfo()}</div>
        <div class='vehicle__price'>${vehicleCar.getPrice()}</div>
        <div class='vehicle__doors'>${vehicleCar.getDoorsCount()}</div>
        <div class='vehicle__image'><img class='picture' src="${item.image}" alt="image"></div>
        </div>`
        main.innerHTML+=display;
    }
    function createItemBike(){
        let display='';
        display=`<div class='vehicle'><div class='vehicle__info'>${vehicleBike.getInfo()}</div>
        <div class='vehicle__price'>${vehicleBike.getPrice()}</div>
        <div class='vehicle__doors'>${vehicleBike.getMaxSpeed()}</div>
        <div class='vehicle__image'><img class='picture' src="${item.image}" alt="image"></div>
        </div>`
        main.innerHTML+=display;
    }
    createItems();
})

