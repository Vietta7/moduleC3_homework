//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.inSocket = false;
}

ElectricalAppliance.prototype.socketOn = function() {
    console.log(this.name + ' in socket');
    this.inSocket = true;
}

ElectricalAppliance.prototype.socketOff = function() {
    console.log(this.name + ' not in socket');
    this.inSocket = false;
}

function DeckLamp(name, brand, power, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.color = color;
    this.inSocket = false;
}

DeckLamp.prototype = new ElectricalAppliance();

function ElectricKettle(name, brand, power, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.color = color;
    this.inSocket = true;
}

ElectricKettle.prototype = new ElectricalAppliance();

const smartDeckLamp = new DeckLamp('ChinaTown','LG', 220, 'yellow');

const smartKettle = new ElectricKettle('EcoHome', 'Tefal', 220, 'white');

smartDeckLamp.socketOff();
smartKettle.socketOn();

console.log(smartDeckLamp);
console.log(smartKettle);