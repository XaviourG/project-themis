import throwError from '@/utils/errors';
import { initializeApp } from 'firebase/app';

const init = () => {
  // validate env keys
  if (
    !process.env.FIREBASE_API_KEY ||
    !process.env.FIREBASE_AUTH_DOMAIN ||
    !process.env.FIREBASE_PROJECT_ID ||
    !process.env.FIREBASE_STORAGE_BUCKET ||
    !process.env.FIREBASE_MESSAGE_ID ||
    !process.env.FIREBASE_APP_ID
  ) {
    throwError('missing firebase env var(s)');
  }

  // format config
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
};

init();
