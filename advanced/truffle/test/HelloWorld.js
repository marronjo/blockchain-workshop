const helloWorld = artifacts.require("./HelloWorld.sol");

contract("Hello World", accounts => {
  it("Should return correct value and change correctly", async () => {
    const hello = await helloWorld.deployed();

    // Set return "Hello World"
    const hi = await hello.sayHello();
    assert.equal("Hello World", hi, "incorrect value stored");
    
    const newHello = "Hi there";
    await hello.setHello(newHello);

    const newHi = await hello.sayHello();

    assert.equal(newHello, newHi, "incorrect value stored");
  });
});