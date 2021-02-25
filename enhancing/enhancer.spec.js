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

describe("success class", ()=>{
    it("success", ()=>{
        const item = {
            name: "sword",
            durability: 100,
            enhancement: 1
        }
        const expectedItem = {
            name: "sword",
            durability: 100,
            enhancement: 2
        }
        const newItem = enhancer.success(item)
        expect(newItem.enhancement).toBe(expectedItem.enhancement)
        expect(newItem.durability).toBe(expectedItem.durability)
    })
});