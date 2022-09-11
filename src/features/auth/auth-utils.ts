import type { User } from "firebase/auth";
import type { AuthUser } from "./auth-types";

export const transformFirebaseUser = (user: User): AuthUser => ({
  email: user.email as string,
  displayName: user.displayName as string,
  photoURL: user.photoURL,
});
