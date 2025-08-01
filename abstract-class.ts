// abstract-class-example.ts

// 1. Abstract Class (Blueprint)
abstract class Vehicle {
  // Normal method (implementation undi)
  // Ee method ni anni child classes vaadukogalavu.
  public showBrand(brand: string): void {
    console.log(`Ee vehicle yokka brand: ${brand}`);
  }

  // Abstract method (implementation ledu, kevalam rule matrame)
  // Ee class ni extend chese prati class ee method ni rayali.
  abstract startEngine(): void;
}

// 2. Concrete Class (Blueprint ni vaadukuni nijaమైన class tayaru cheyadam)
class Car extends Vehicle {
  // Abstract method ni ikkada implement cheyali, lekapothe error vasthundi.
  public startEngine(): void {
    console.log("Car engine is starting with a key...");
  }
}

class Bike extends Vehicle {
  // Abstract method ni ikkada kuda implement cheyali.
  public startEngine(): void {
    console.log("Bike engine is starting with a kick...");
  }
}

// const myVehicle = new Vehicle(); // ERROR! Abstract class ki object create cheyalemu.

const myCar = new Car();
myCar.showBrand("Toyota"); // Parent class nunchi vachina method
myCar.startEngine();       // Child class lo raasina method

const myBike = new Bike();
myBike.showBrand("Honda");   // Parent class nunchi vachina method
myBike.startEngine();      // Child class lo raasina method



// Hey, nuvvu Vehicle anipinchukovali ante, neeku startEngine ane method tappakunda undali. 
// showBrand method nenu isthunna, daanni nuvvu vaaduko" ani cheppe oka pedda manishi (senior) lanti class.