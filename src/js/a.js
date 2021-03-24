import b from './b';

console.log(b);

const a = 5; 

class User {
    constructor (name) {
        this._name = name;
    }

    showName () {
        console.log(this._name);
    }
}

new User('Coco').showName();

export default a;