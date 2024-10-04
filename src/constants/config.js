const ENV = import.meta.env || window.process.env || {};
export const FIREBASE = JSON.parse(ENV.VITE_FIREBASE_CONFIG || '{}');
export const API_URL = ENV.VITE_API_URL || '';