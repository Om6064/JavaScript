class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color
    }

    getInfo(){
        console.log(`Name : ${this.name} Color : ${this.color} Type : ${this.type}`);
    }

    cleanUp(){
        console.log("Cleningggggg.......");
    }
}

class Dog extends Animal{
    constructor(name,color,type){
        super(name,color)
        this.type= type
    }

    

}

let d1 = new Dog("Sheru","black","chalu")
d1.getInfo()