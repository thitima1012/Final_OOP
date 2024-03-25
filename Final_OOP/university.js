class University {
    name = "";
    location = "";
    constructor(name, location) {
        this.name = name;
        this.location = location; 
    }
    addDepartment(department){
        this.departments.push(department);
    }
    addStudent(student){
        this.student.push(student);
    }
    addProfessor(professor){
        this.professor.push(professor);
    }
    removeDepartment(department){
        this.department.spilce(department);
    }
    removeStudent(student){
        this.student.splice(student);
    }
    removeProfessor(professor){
        this.professor.spilce(professor);
    }
    getDepartment(){
        return this.department;
    }
    getStudent(){
        return this.student;
    }
    getProfessors(){
        return this.professor;
    }
    getDepartment(){
        return this.departments;
    }
    toString(){
        return `University [name = ${this.name}, 
                location = ${this.location}`;
    }
    

}

class Department {
    name = "";
    constructor(name) {
        this.name = name;
    }
    addCourse(course){
        this.course.push(course);
    }
    removeCourse(course){
        this.course.spilce(course);
    }
    addStudent(student){
        this.student.push(student);
    }
    removeStudent(student){
        this.student.spilce(student);
    }
    addProfessor(professor){
        this.professor.push(professor);
    }
    removeProfessor(professor){
        this.professor.spilce(professor);
    }
    getCourses(){
        return this.course;
    }
    getStudent(){
        return this.student;
    }
    toString(){
        return `Department [name = ${this.name}]`;
    }
}

class Course   {
    code = "";
    title = "";
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }
    addStudent(student){
        this.student.push(student);
    }
    removeStudent(student){
        this.student.spilce(student);
    }
    setProfessor(professor){
        this.professor = professor;
    }
    getStudent(){
        return this.student;
    }
    toString(){
        return `Course [code = ${this.code}, 
                title = ${this.title}]`;
    }
}

class Professor  {
    name = "";
    staffId = "";
    constructor(name,staffId){
        this.name = name;
        this.staffId = staffId;
    }
    teachCourse(){}
    stopTeachingCourse(){}
    getCourses(){
        return this.course;
    }
    
    toString(){
        return `Professor [
            name = ${this.name},
            staffId = ${this.staffId}]`;
    }
}

class Person {
    name = "";
    address = "";
    email = "";
    constructor(name, address, email){
        this.name = name;
        this.address = address;
        this.email = email;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
    getEmail(){
        return this.email;
    }
    toString(){
        return `Person [name = ${this.name}, 
                address = ${this.address}, 
                email = ${this.email}]`;
    }
}

class Student {
    studentId = "";
    year =  "";
    constructor(studentId, year){
        this.studentId = studentId;
        this.year = year;
    }
    registerCourse(){}
    dropCourse(){}
    getCourses(){
        return this.Course;
    }
    toString(){
        return `Student [studentId = ${this.studentId}, 
                year = ${this.year}]`;
    }
}

const main = () => {
    const university = new University(
        'Nakhon Pathom Rajabhat University',
        '85 Malaiman Road, Nakhon Pathom, Thailand',);
    const department = new Department('Computer Science, Software Engineering');
    const course = new Course(
        'CS101',
        'Introduction to Programming');
    const person = new Person('Alice, Bob','Nakhon Pathom','A@gmail.com')
    const professor = new Professor('Dr. Worachet Uttha, Dr. Udsanee Pakdeetrakulwong','P001')
    const student = new Student('S001','1')

    console.log(university);
    console.log(department);
    console.log(course);
    console.log(person);
    console.log(professor);
    console.log(student);
}
main();

