class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy === true){
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages(){
        console.log(`${this.languages} are all the languages ${this.name} knows`);
    }
}

const dre = new Person ("D'Andre", "Coder", 20);

dre.exercise();

dre.fetchJob();

const dre2 = new Programmer ("D'Andre", "Coder", 20, ["html", "css", "javascript"]);

dre2.completeTask();
dre2.offerNewTask();
dre2.acceptNewTask();
dre2.offerNewTask();

dre2.listLanguages();
dre2.learnLanguage("react");
dre2.listLanguages();