// Request breakdown:
// - Create a Person constructor properties (name, job, age).
// - Create an 'exercise' method.
// - Create an 'fetchJob' method that console log name and job of the person.
// - Create a Programmer constructor that inherits all member from Person + languages and busy set to true.
// - Give the Programmer a 'completeTask' method that change busy to false + add 'acceptNewTask' method that update busy to true.
// - Give the Programmer an 'offerNewTask' method that print "Mark can't accept....." or "Mark can accept...."
// Give the Programmer 'learnLanguage' and 'listLanguages' method that add new language and list all language the programmer know

class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  //   Methods
  exercise() {
    console.log("Running is fun! - said no one ever");
  }

  getName() {
    console.log(`Person name: ${this.name}`);
  }

  getJob() {
    console.log(`Job Title: ${this.job}`);
  }

  getAge() {
    console.log(`Age: ${this.age}`);
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

class Programmer extends Person {
  //Extension of Person
  constructor(name, job, age, languages) {
    super(name, job, age); //super() allow to inherit info from the parent constructor Person
    this.languages = languages; //new property - this. make sure I use the correct property in the constructor (.....,....,languages)
    this.busy = true;
  }

  // Methods
  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy) {
      //Not necessary to do (this.busy === true), because is already a boolean.
      console.log(`${this.name} can't accept any new tasks right now`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility`);
    }
  }

  learnLanguage(language) {
    this.languages.push(language);
  }

  listLanguages() {
    console.log(` ${this.name} list of languages ${this.languages} `);
  }
}

const person1 = new Person("Elhadji", "Software Engineer", 24);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

person1.fetchJob();
person1.getName();
person1.getJob();
person1.getAge();
person1.exercise();

console.log("------------------------");

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1, c2, c3);

console.log("------------------------");

console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());

console.log("------------------------");

c1.offerNewTask();
c2.completeTask();
c2.offerNewTask();

console.log("------------------------");
