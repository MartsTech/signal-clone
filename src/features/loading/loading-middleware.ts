import type { AppMiddleware } from "../../app/store/store-types";
import { authStateChanged } from "../auth/auth-state";
import { loadingStopped } from "./loading-state";

export const loadingMiddleware: AppMiddleware =
  (store) => (next) => (action) => {
    if (action.type === authStateChanged.type) {
      store.dispatch(loadingStopped());
    }
    return next(action);
  };
