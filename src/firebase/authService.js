// Firebase Authentication Service
// Handles all authentication operations

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence
} from 'firebase/auth';
import { auth } from './config';
import secureLog from '../utils/secureLog';

// Set persistence to LOCAL (persists even when browser is closed)
setPersistence(auth, browserLocalPersistence)
    .then(() => secureLog.info("Auth persistence set to LOCAL"))
    .catch((error) => secureLog.error("Error setting persistence", error));

// Sign up with email and password
export const signUpWithEmail = async (email, password, displayName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (displayName) {
            await updateProfile(user, { displayName });
        }

        secureLog.auth("User signed up successfully", user.uid);
        return { success: true, user };
    } catch (error) {
        secureLog.error("Sign up error", error);

        const errorMessages = {
            'auth/email-already-in-use': "This email is already registered.",
            'auth/weak-password': "Password is too weak. Use at least 6 characters.",
            'auth/invalid-email': "Invalid email address."
        };

        return {
            success: false,
            error: errorMessages[error.code] || "Sign up failed. Please try again."
        };
    }
};

// Sign in with email and password
export const signInWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        secureLog.auth("User signed in successfully", userCredential.user.uid);
        return { success: true, user: userCredential.user };
    } catch (error) {
        secureLog.error("Sign in error", error);

        const errorMessages = {
            'auth/wrong-password': "Incorrect password. Please try again.",
            'auth/user-not-found': "No account found with this email.",
            'auth/invalid-credential': "Invalid login credentials."
        };

        return {
            success: false,
            error: errorMessages[error.code] || "Sign in failed. Please try again."
        };
    }
};

// Sign in with Google
export const signInWithGoogle = async () => {
    try {
        const googleProvider = new GoogleAuthProvider();
        googleProvider.addScope('email');

        const result = await signInWithPopup(auth, googleProvider);
        secureLog.auth("Google sign in successful", result.user.uid);
        return { success: true, user: result.user };
    } catch (error) {
        secureLog.error("Google sign in error", error);
        return { success: false, error: "Google sign in failed. Please try again." };
    }
};

// Sign out
export const logOut = async () => {
    try {
        await signOut(auth);
        secureLog.auth("User signed out");
        return { success: true };
    } catch (error) {
        secureLog.error("Sign out error", error);
        return { success: false, error: "Failed to sign out. Please try again." };
    }
};

// Listen to auth state changes
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

// Get current user
export const getCurrentUser = () => auth.currentUser;

export default auth;
