class Student{
    #secret = "hee";
    constructor(name,grid,marks){
        this.name = name;
        this.grid = grid;
        this.marks = marks
    }


    getInfo(){
        console.log(`Name : ${this.name} Grid : ${this.grid} Marks : ${this.marks}`);
    }

    cleanUp(){
        console.log("cLENNING");
        this.marks = null;  
    }
}

let s1  = new Student("Aryan",7846,[99,98,97])
s1.getInfo()
s1.cleanUp()
s1.getInfo()

