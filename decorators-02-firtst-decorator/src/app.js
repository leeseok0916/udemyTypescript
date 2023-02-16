function Logger() {
    console.log('Loading....');
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
    return Person;
}());
var persone = new Person();
