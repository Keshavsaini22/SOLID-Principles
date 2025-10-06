class Professor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class Department {
  private name: string;
  private professors: Professor[];

  constructor(name: string, professors: Professor[]) {
    this.name = name;
    this.professors = professors;
  }

  printProfessors(): void {
    console.log(`Professors in ${this.name} Department:`);
    this.professors.forEach((professor) => {
      console.log(professor.getName());
    });
  }
}

function main(): void {
  const p1 = new Professor("Dr. Smith");
  const p2 = new Professor("Dr. Johnson");

  const profs = [p1, p2];

  const csDept = new Department("Computer Science", profs);
  csDept.printProfessors();

  // csDept can be deleted or go out of scope...
  // but p1 and p2 still exist and can be used elsewhere.
}

main();

// Department ◇────→ Professor

