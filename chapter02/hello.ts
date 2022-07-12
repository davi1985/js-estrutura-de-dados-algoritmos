export let myName = "Davi Silva";

// console.log(myName);
interface Comparable<T> {
  comparable(b: T): number;
}

class MyObject implements Comparable<MyObject> {
  age: number;

  comparable(b: any): number {
    if (this.age === b.age) {
      return 0;
    }

    return this.age > b.age ? 1 : -1;
  }
}

let myVar = new MyObject();

console.log(myVar.comparable(3));

function getName({ label }: { label: string; }) {
  return label.toUpperCase();
}

const example = (value :number) =>  value + value;

const result = example(2);

console.log(result)
console.log(getName({
  label:'Davi'
}))
