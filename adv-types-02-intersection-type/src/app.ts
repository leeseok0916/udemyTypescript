interface Admin {
  name: string;
  privilige: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

// interface ElvevatedEmployee extends Employee, Admin {}
type ElvevatedEmployee = Admin & Employee;

const e1: ElvevatedEmployee = {
  name: 'First',
  privilige: ['master'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;