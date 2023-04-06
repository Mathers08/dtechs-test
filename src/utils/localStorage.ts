import { CombinedState } from '@reduxjs/toolkit';

export const loadState = () => {
  try {
    const savedState = localStorage.getItem('users');
    if (savedState === null) return undefined;
    return JSON.parse(savedState);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const saveState = (state: CombinedState<any>) => {
  try {
    const workingState = JSON.stringify(state);
    localStorage.setItem('users', workingState);
  } catch (error) {
    console.error(error);
  }
};
