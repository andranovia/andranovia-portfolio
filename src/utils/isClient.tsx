
import React from 'react';
import { useIsClient } from "@uidotdev/usehooks"

type ClientOnlyProps = {
  children: React.ReactNode;
};

export const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const isClient = useIsClient();

  return isClient ? <>{children}</> : null;
};