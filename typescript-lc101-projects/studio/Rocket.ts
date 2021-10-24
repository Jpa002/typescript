import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";
export class Rocket{
    name:string;
    totalCapactiyKg; number;
    cargoItems: Cargo[] =[];
    astronauts: Astronaut[] =[];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapactiyKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number{
        let totalMass =0
        for(let i=0; i< items.length; i++){
            totalMass += items[i].massKg;
        }
        return totalMass;
    }
    currentMassKg(): number{
        let astronautMass = this.sumMass(this.astronauts)
        let cargoMass = this.sumMass(this.cargoItems); 
        return astronautMass + cargoMass; 
    }
    canAdd(item: Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapactiyKg;
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false
        } 
        }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    } 
 }

