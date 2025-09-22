// Low-level module
class MySQLDatabase {
    connect() {
        console.log('Connecting to MySQL');
    }
}

// High-level module
class UserService {
    constructor() {
        this.database = new MySQLDatabase(); // Direct dependency on low-level module
    }

    getUser() {
        this.database.connect();
        console.log('Fetching user');
    }
}

// Usage
const userService = new UserService();
userService.getUser();