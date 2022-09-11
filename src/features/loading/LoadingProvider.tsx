import React, { FC, ReactNode } from "react";
import { useAppSelector } from "../../app/store/store-hooks";
import { selectIsLoadingActive } from "./loading-state";
import LoadingModule from "./LoadingModule";

interface Props {
  children?: ReactNode;
}

const LoadingProvider: FC<Props> = ({ children }) => {
  const isLoadingActive = useAppSelector(selectIsLoadingActive);

  if (isLoadingActive) {
    return <LoadingModule />;
  }

  return <>{children}</>;
};

export default LoadingProvider;
