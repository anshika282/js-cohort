Your implementation here
const loggable = (obj) => {
    obj.log = () => {
        console.log(`the state is : ${obj.score}`);
    };
    obj.startLogging = () => {
        setInterval(() => {
            console.log(`the state chnge is : ${obj.score}`);
        }, 5 * 1000);
    };
};

const loggable = {
    log() {
        console.log(`the state is : ${this.score}`);
    },

    startLogging() {
        setInterval(function () {
            console.log(`the state change is: ${this.score}`);
        }.bind(this), 5 * 1000);
    }
}


const user = {
    name: "Alice",
    score: 0,
    incrementScore() {
        this.score++;
    }
};

Object.assign(user, loggable);

// Apply your mixin
// loggable(user);

// This should log the user's current state
user.log();

// This should start periodic logging
user.startLogging();

// This should be captured in the next log
user.incrementScore();
user.incrementScore();
