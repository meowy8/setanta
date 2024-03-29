import React, { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

const SuspenseBoundary = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};

export default SuspenseBoundary;
