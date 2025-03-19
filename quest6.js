

// const calculator = {
//     num: 0,
//     add(num) {
//         this.num = this.num + num;
//         return this;
//     },
//     multiply(num) {
//         this.num = this.num * num;
//         return this;
//     },
//     subtract(num) {
//         this.num = this.num - num;
//         return this;
//     },
//     value() {
//         return this.num;
//     }
// }
// const result = calculator.add(5).multiply(2).subtract(1).add(10).value();
// console.log(result);


class User {
    constructor(username) {
        this.username = username;
    }

    hasAccess() {
        return this.username === "admin";
    }
}

class Admin extends User {
    constructor(username) {
        super(username);
        this.isAdmin = true;
    }

    hasAccess() {
        return true;
    }
}

const regularUser = new User("regular");
console.log(regularUser.hasAccess());

const adminUser = new Admin("superadmin");
console.log(adminUser.hasAccess());
