import create from 'zustand';
// import {persist} from 'zustand/middleware';

let sessionStore = set => ({
  userSession: {},
  setSession: session => set(state => ({userSession: session})),
});

// sessionStore = persist(sessionStore, {name: 'user_session'});

export const useSessionStore = create(sessionStore);
