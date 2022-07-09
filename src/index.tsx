import React, { FC, HTMLAttributes, ReactChild, useEffect } from 'react';
import { Provider } from './components/Provider/Provider';
import { useNFTs } from './hooks/useNfts';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
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
  const { data, error, isLoading } = useNFTs({
    walletAddress: 'old.dhaiwat.eth',
  });

  useEffect(() => {
    console.log({ data, error, isLoading });
  }, [data, error, isLoading]);

  return null;
};

export * from './hooks';
