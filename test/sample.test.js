const { removeElementFromArray } = require('../src/utils/arrayUtils');


describe("Sample Test", () => {
    it('should test that true == true', () => {
        expect(true).toBe(true)
    })
});

describe("Sample Test 2", () => {
    it('should test that true == true', () => {
        expect(true).toBe(true)
    })
});

describe("Test Array Utils", () => {
    it('It should do nothing if the element is not in the array', () =>{
        const result = removeElementFromArray("hola", ["chao"]);
        
        expect(result.length).toBe(1);
        expect(result[0]).toBe("chao");
    })

    it('It should remove the element in the array', () =>{
        const result = removeElementFromArray("hola", ["chao", "hola"]);
        
        expect(result.length).toBe(1);
        expect(result[0]).toBe("chao");
    })

    // it('It should remove the element in the array', () =>{
    //     const result = removeElementFromArray("hola", ["chao", "hola"]);
        
    //     expect(result.length).toBe(1);
    //     expect(result[0]).toBe("chao");
    // })
})

