class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "school";
    }
}

const student1 = new Student(12, "suzon" );
const student2 = new Student(14, "mahi" );
const student3 = new Student (15, "rabbi" );
console.log (student1, student2, student3);