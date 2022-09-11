export interface AuthUser {
  email: string;
  displayName: string;
  photoURL: string | null;
}

export interface AuthSignInWithEmailAndPasswordRequest {
  email: string;
  password: string;
}

export interface AuthCreateUserWithEmailAndPasswordRequest {
  displayName: string;
  email: string;
  password: string;
}
