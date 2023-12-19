import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

export const GraphQLProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
