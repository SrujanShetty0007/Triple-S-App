// Secure Logger - Only logs in development, sanitizes in production
const isDev = import.meta.env.DEV;

export const secureLog = {
    info: (message, data = null) => {
        if (isDev) {
            console.log(`[INFO] ${message}`, data);
        }
    },

    error: (message, error = null) => {
        if (isDev) {
            console.error(`[ERROR] ${message}`, error);
        } else {
            // In production, only log sanitized errorsmessage  
            console.error(`[ERROR] ${message}`, {
                message: error?.message || 'An error occurred',
                code: error?.code || 'UNKNOWN'
            });
        }
    },

    warn: (message, data = null) => {
        if (isDev) {
            console.warn(`[WARN] ${message}`, data);
        }
    },

    auth: (message, userId = null) => {
        if (isDev) {
            console.log(`[AUTH] ${message}`, { userId });
        }
        // Never log auth details in production
    }
};

export default secureLog;
