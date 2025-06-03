import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import React from "react";

type MockRouterProps = {
  children: React.ReactNode;
  pathname?: string;
  route?: string;
  query?: Record<string, string>;
  asPath?: string;
};

const MockRouter: React.FC<MockRouterProps> = ({
  children,
  pathname = "/",
  route = "/",
  query = {},
  asPath = "/",
}) => {
  const mockRouter = {
    pathname,
    route,
    query,
    asPath,
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    reload: () => {},
    back: () => {},
    prefetch: () => Promise.resolve(),
    beforePopState: () => {},
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    isFallback: false,
    basePath: "",
    isLocaleDomain: false,
    forward: () => {},
    isReady: true,
    isPreview: false,
  };

  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  );
};

export default MockRouter;
