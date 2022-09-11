import React, { FC, ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store-hooks";
import { appMounted, selectAppMounted } from "./app-state";

interface Props {
  children?: ReactNode;
}

const AppProvider: FC<Props> = ({ children }) => {
  const mounted = useAppSelector(selectAppMounted);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!mounted) {
      dispatch(appMounted());
    }
  }, [mounted, dispatch]);

  return <>{children}</>;
};

export default AppProvider;
