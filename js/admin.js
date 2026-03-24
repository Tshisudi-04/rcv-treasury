// admin.js

// User management functionality
class UserManagement {
    constructor() {
        this.users = [];
    }

    createUser(user) {
        this.users.push(user);
        console.log('User created:', user);
    }

    updateUser(userId, updatedInfo) {
        const user = this.users.find(u => u.id === userId);
        Object.assign(user, updatedInfo);
        console.log('User updated:', user);
    }

    deleteUser(userId) {
        this.users = this.users.filter(u => u.id !== userId);
        console.log('User deleted:', userId);
    }

    getAllUsers() {
        return this.users;
    }
}

// Approval workflow functionality
class ApprovalWorkflow {
    constructor() {
        this.pendingApprovals = [];
    }

    requestApproval(item) {
        this.pendingApprovals.push(item);
        console.log('Approval requested for:', item);
    }

    approveItem(itemId) {
        this.pendingApprovals = this.pendingApprovals.filter(item => item.id !== itemId);
        console.log('Item approved:', itemId);
    }

    getPendingApprovals() {
        return this.pendingApprovals;
    }
}

// Audit log functionality
class AuditLog {
    constructor() {
        this.logs = [];
    }

    logAction(action) {
        const timestamp = new Date().toISOString();
        this.logs.push({ action, timestamp });
        console.log('Action logged:', action);
    }

    getLogs() {
        return this.logs;
    }
}

// System settings functionality
class SystemSettings {
    constructor() {
        this.settings = {};
    }

    updateSetting(key, value) {
        this.settings[key] = value;
        console.log(`Setting updated: ${key} = ${value}`);
    }

    getSettings() {
        return this.settings;
    }
}

// Initialization example
const userManager = new UserManagement();
const approvalManager = new ApprovalWorkflow();
const auditLog = new AuditLog();
const systemSettings = new SystemSettings();

// Sample usage
userManager.createUser({ id: 1, name: 'John Doe', role: 'admin' });
approvalManager.requestApproval({ id: 101, type: 'document' });
auditable.logAction('User John Doe created');
systemSettings.updateSetting('maxUsers', 100);
