import { store } from "../stores/store";

const resetStore = () => {
  const { userStore } = store;
  userStore.reset();
};

export default resetStore;
