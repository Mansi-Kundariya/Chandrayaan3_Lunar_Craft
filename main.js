const ps = require('prompt-sync');
const prompt = ps();

class Spacecraft {
    constructor(x, y, z, initialDirection) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = initialDirection;
    }

    moveForward() {
        switch (this.direction) {
            case 'N': this.y++; break;
            case 'S': this.y--; break;
            case 'E': this.x++; break;
            case 'W': this.x--; break;
            case 'Up': this.z++; break;
            case 'Down': this.z--; break;
        }
    }

    moveBackward() {
        switch (this.direction) {
            case 'N': this.y--; break;
            case 'S': this.y++; break;
            case 'E': this.x--; break;
            case 'W': this.x++; break;
            case 'Up': this.z--; break;
            case 'Down': this.z++; break;
        }
    }

    turnLeft() {
        switch (this.direction) {
            case 'N': this.direction = 'W'; break;
            case 'S': this.direction = 'E'; break;
            case 'E': this.direction = 'N'; break;
            case 'W': this.direction = 'S'; break;
            case 'Up': this.direction = 'W'; break; 
            case 'Down': this.direction = 'E'; break; 
        }
    }

    turnRight() {
        switch (this.direction) {
            case 'N': this.direction = 'E'; break;
            case 'S': this.direction = 'W'; break;
            case 'E': this.direction = 'S'; break;
            case 'W': this.direction = 'N'; break;
            case 'Up': this.direction = 'W'; break; 
            case 'Down': this.direction = 'E'; break;
        }
    }

    turnUp() {
        switch (this.direction) {
            case 'N': this.direction = 'Up'; break;
            case 'S': this.direction = 'Down'; break;
            case 'E': this.direction = 'Up'; break;
            case 'W': this.direction = 'Down'; break;
            case 'Up': break; 
            case 'Down': break; 
        }
    }

    turnDown() {
        switch (this.direction) {
            case 'N': this.direction = 'Down'; break;
            case 'S': this.direction = 'Up'; break;
            case 'Up': break;
            case 'Down': break;
        }
    }

    CommandsForMoveAndForword(commands) {
        for (let command of commands) {
            switch (command) {
                case 'f': this.moveForward(); break;
                case 'b': this.moveBackward(); break;
                case 'l': this.turnLeft(); break;
                case 'r': this.turnRight(); break;
                case 'u': this.turnUp(); break;
                case 'd': this.turnDown(); break;
                default: console.error("Invalid command: " + command);
            }
        }
    }

    printPositionAndDirection() {
        console.log(`Final Position: (${this.x}, ${this.y}, ${this.z})`);
        console.log(`Final Direction: ${this.direction}`);
    }
}

let initialDirection=prompt("Enter the initial Direction:");
const spacecraft = new Spacecraft(0, 0, 0, initialDirection);

const userInput = prompt('Enter commands separated by commas: ');
const commands = userInput.split(',').map(element => element.trim());
  
spacecraft.CommandsForMoveAndForword(commands);
spacecraft.printPositionAndDirection();

module.exports = Spacecraft;