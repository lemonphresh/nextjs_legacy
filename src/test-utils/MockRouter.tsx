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
  asPath = "/",
  children,
  pathname = "/",
  query = {},
  route = "/",
}) => {
  const mockRouter = {
    asPath,
    back: () => {},
    basePath: "",
    beforePopState: () => {},
    events: {
      emit: () => {},
      off: () => {},
      on: () => {},
    },
    forward: () => {},
    isFallback: false,
    isLocaleDomain: false,
    isPreview: false,
    isReady: true,
    pathname,
    prefetch: () => Promise.resolve(),
    push: () => Promise.resolve(true),
    query,
    reload: () => {},
    replace: () => Promise.resolve(true),
    route,
  };

  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  );
};

export default MockRouter;
