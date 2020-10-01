import {IPerson} from './iperson.interface';

class NamedItem{
    name: string;
}

class Person implements IPerson{

    name: string;

    constructor(name:string){
        this.name = `${name}`;
    }

    static sayhello(name:string):void{
        console.log(`Hello from ${name}`);
    }

    sayhello(){
        Person.sayhello(this.name);
    }
}

export const tyler = new Person("Tyler");