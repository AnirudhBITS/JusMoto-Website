/**
 * JusMoto Authentication Utilities
 * Handles API communication, token storage, and session management.
 */

const AUTH_CONFIG = {
    API_BASE_URL: 'https://jusmoto.blackitechs.in/api/v1',
    DASHBOARD_URL: 'account.html',
    TOKEN_KEY: 'token',
    USER_KEY: 'user'
};

class AuthService {
    /**
     * Store authentication data in localStorage
     */
    static setSession(token, user, redirect = false) {
        localStorage.setItem(AUTH_CONFIG.TOKEN_KEY, token);
        localStorage.setItem(AUTH_CONFIG.USER_KEY, JSON.stringify(user));

        if (redirect) {
            // Redirect to home page as requested
            window.location.href = 'home.html';
        }
    }

    /**
     * Clear authentication data
     */
    static clearSession() {
        localStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
        localStorage.removeItem(AUTH_CONFIG.USER_KEY);
    }

    /**
     * Check if user is authenticated
     */
    static isAuthenticated() {
        return !!localStorage.getItem(AUTH_CONFIG.TOKEN_KEY);
    }

    /**
     * Get the stored token
     */
    static getToken() {
        return localStorage.getItem(AUTH_CONFIG.TOKEN_KEY);
    }

    /**
     * Get the stored user
     */
    static getUser() {
        const user = localStorage.getItem(AUTH_CONFIG.USER_KEY);
        return user ? JSON.parse(user) : null;
    }

    /**
     * Login user
     */
    static async login(email, password) {
        try {
            const response = await fetch(`${AUTH_CONFIG.API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // credentials: 'include',
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.message || 'Login failed');
            }

            // Backend returns data: { user, accessToken, refreshToken }
            const { accessToken, user } = result.data || result;

            return { success: true, accessToken, user };
        } catch (error) {
            console.error('Login Error:', error);
            throw error;
        }
    }

    /**
     * Register user
     */
    static async register(userData) {
        try {
            const response = await fetch(`${AUTH_CONFIG.API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // credentials: 'include',
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.message || 'Registration failed');
            }

            return { success: true, message: result.message || 'Registration successful' };
        } catch (error) {
            console.error('Registration Error:', error);
            throw error;
        }
    }

    /**
     * Redirect to home if already authenticated (used on login/register pages)
     */
    static checkAndRedirect() {
        if (this.isAuthenticated()) {
            window.location.href = 'home.html';
        }
    }

    /**
     * Logout user - Clear session and redirect to home page
     */
    static async logout() {
        try {
            await fetch(`${AUTH_CONFIG.API_BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`
                },
                credentials: 'include'
            });
        } catch (e) {
            console.error('Logout API error:', e);
        }
        // Clear local storage
        this.clearSession();
        // Redirect to home page
        window.location.href = 'home.html';
    }

    /**
     * Check if a session exists on the server (via cookies)
     * and synchronize with localStorage
     */
    static async checkSession() {
        try {
            const response = await fetch(`${AUTH_CONFIG.API_BASE_URL}/auth/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success && result.data.user) {
                    // Update session if it matches a valid user
                    // We don't have the token here easily from cookies, but we have the user
                    // On the website, we still use localStorage for UI responsiveness
                    const user = result.data.user;
                    localStorage.setItem(AUTH_CONFIG.USER_KEY, JSON.stringify(user));
                    // If no token in localStorage but session exists on server, 
                    // we might want to flag it as authenticated
                    if (!this.isAuthenticated()) {
                        localStorage.setItem(AUTH_CONFIG.TOKEN_KEY, 'session_active');
                    }
                    return true;
                }
            } else {
                // If /me fails, it means no valid session
                if (this.isAuthenticated()) {
                    this.clearSession();
                    this.updateAuthUI();
                }
            }
        } catch (error) {
            console.error('Session check error:', error);
        }
        return false;
    }

    /**
     * Update UI elements based on auth state
     * Handles switching between Sign In/Register and Account/Logout
     */
    static updateAuthUI() {
        const isAuthenticated = this.isAuthenticated();
        const userMenus = document.querySelectorAll('.user-menu ul li ul');

        userMenus.forEach(menu => {
            if (isAuthenticated) {
                menu.innerHTML = `
                    <li><a href="account.html">My Account</a></li>
                    <li><a href="#" id="logout-link">Sign out</a></li>
                `;
                const logoutLink = menu.querySelector('#logout-link');
                if (logoutLink) {
                    logoutLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.logout();
                    });
                }
            } else {
                menu.innerHTML = `
                    <li><a href="login.html">Sign in</a></li>
                    <li><a href="register.html">Register</a></li>
                `;
            }
        });
    }

    /**
     * Populate profile data on account.html
     */
    static populateAccountPage() {
        if (!this.isAuthenticated()) {
            window.location.href = 'login.html';
            return;
        }

        const user = this.getUser();
        if (!user) return;

        // Update greeting name
        const accountName = document.getElementById('account-name');
        if (accountName) {
            accountName.textContent = user.first_name || user.name || 'User';
        }

        // Update Account Details Form
        const firstNameInput = document.querySelector('input[name="ltn__name"]');
        const lastNameInput = document.querySelector('input[name="ltn__lastname"]');
        const emailInput = document.querySelector('input[type="email"]');
        const displayNameInput = document.querySelector('input[placeholder="Ethan"]');

        if (firstNameInput) firstNameInput.value = user.first_name || '';
        if (lastNameInput) lastNameInput.value = user.last_name || '';
        if (emailInput) emailInput.value = user.email || '';
        if (displayNameInput) displayNameInput.value = user.first_name || '';

        // Wire up logout buttons
        const logoutBtn = document.getElementById('account-logout-btn');
        const inlineLogout = document.getElementById('account-inline-logout');

        const handleLogout = (e) => {
            e.preventDefault();
            AuthService.logout();
        };

        if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
        if (inlineLogout) inlineLogout.addEventListener('click', handleLogout);
    }
}

// Automatically update UI on page load
document.addEventListener('DOMContentLoaded', async () => {
    // First check session with server
    await AuthService.checkSession();
    // Then update UI
    AuthService.updateAuthUI();

    // Redirect if already logged in on login/register pages
    if (window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('register.html')) {
        if (AuthService.isAuthenticated()) {
            window.location.href = 'home.html';
        }
    }
});
