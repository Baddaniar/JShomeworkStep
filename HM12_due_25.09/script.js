//1
class User{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    getFullname(){
        console.log(`${this.name} ${this.surname}`)
    }
}

class Student extends User{
    constructor(name,surname,year){
        super(name,surname);
        this.year = year;
    }

    getCourse(){
        const date = new Date
        console.log(`студент на ${date.getFullYear() - this.year} курсе`)
    }
}

let me = new Student('Dan','Baden',2018)

//2
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    get height(){
        return this.height;
    }
    get width(){
        return this.width
    }

    set height(value){
        this.height = value;
    }
    set width(value){
        this.width = value;
    }
}