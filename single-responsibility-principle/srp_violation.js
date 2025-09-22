class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
        return user;
    }

    logActivity(userId, action) {
        const timestamp = new Date().toISOString();
        console.log(`User with ID: ${userId} performed action: ${action} at ${timestamp}`);
    }

    fetchUser(userId) {
        const user = this.users.find(u => u.id === userId);
        this.logActivity(userId, 'fetchUser');
        return user;
    }
}

const userManager = new UserManager();
userManager.addUser({ id: 1, name: 'Alice' });
userManager.fetchUser(1);