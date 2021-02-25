const enhancer = require('./enhancer.js');
// test away!


describe("repair class", () =>{
    it("repairs", () => {
        const item = {
            name: "sword",
            durability: 20,
            enhancement: 15 
        }
        const expectedItem = {
            name: "sword",
            durability: 100,
            enhancement: 15 
        }
        const newItem = enhancer.repair(item)
        expect(newItem.durability).toBe(expectedItem.durability)

    })
});