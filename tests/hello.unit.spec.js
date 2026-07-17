const assert = require('assert');

describe('Hello Module', () => {
    it('should return "Hello, World!"', () => {
        const hello = () => 'Hello, World!';
        assert.strictEqual(hello(), 'Hello, World!');
    });

    it('should return a greeting with a name', () => {
        const greet = (name) => `Hello, ${name}!`;
        assert.strictEqual(greet('Alice'), 'Hello, Alice!');
    });
});