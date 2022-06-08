interface Foo {
    bar(x: number, y: string): boolean;
  }
  
  class MyClass implements Foo {
    private name: string = "null";
  
    bar(x: number, y: string): boolean {
      return true;
    }
  }
  