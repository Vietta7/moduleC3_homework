//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.inSocket = false;
    }

    socketOn() {
        console.log(this.name + ' in socket');
        this.inSocket = true;
    }

    socketOff() {
        console.log(this.name + ' not in socket');
        this.inSocket = false;
    }
}

class DeckLamp extends ElectricalAppliance {
    constructor(name, brand, power, color) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.color = color;
        this.inSocket = false;
    }
}

class ElectricKettle extends ElectricalAppliance {
    constructor(name, brand, power, color) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.color = color;
        this.inSocket = true;
    }
}

const smartDeckLamp = new DeckLamp('ChinaTown','LG', 220, 'yellow');

const smartKettle = new ElectricKettle('EcoHome', 'Tefal', 220, 'white');

smartDeckLamp.socketOff();
smartKettle.socketOn();

console.log(smartDeckLamp);
console.log(smartKettle);