import React, { FC, HTMLAttributes, useEffect } from 'react';
import { Provider } from './components';
import { useNFTMetadata } from './hooks';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: React.ReactNode;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({}) => {
  return (
    <Provider>
      <TestComponent />
    </Provider>
  );
};

const TestComponent = () => {
  const { data, error, isLoading } = useNFTMetadata({
    blockchain: 'eth',
    contractAddress: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
    tokenId: '1',
  });

  useEffect(() => {
    console.log({ data, error, isLoading });
  }, [data, error, isLoading]);

  return null;
};

export * from './hooks';
export * from './components';
