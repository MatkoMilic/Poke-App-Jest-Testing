import React, {FC} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

interface QueryClientProviderProps {
  children?: React.ReactNode;
}

export const RQClientProvider: FC<QueryClientProviderProps> = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

RQClientProvider.defaultProps = {
  children: undefined,
};
