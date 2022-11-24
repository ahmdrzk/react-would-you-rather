/* Action Types */
export const AUTH_SIGNIN = "auth/signIn";
export const AUTH_SIGNOUT = "auth/signOut";

/* Action Creators */
export const signInAction = (user) => ({ type: AUTH_SIGNIN, payload: { user } });
export const signOutAction = () => ({ type: AUTH_SIGNOUT });
