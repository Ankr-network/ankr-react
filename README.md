# ankr-react

React hooks and components built on top of Ankr's Advanced APIs and Ankr.js

## Usage

1. Install the package

```bash
npm install ankr-react

yarn add ankr-react
```

2. Wrap your app with the `<Provider />` component

```tsx
import { Provider } from 'ankr-react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
```

3. Use the hooks

```tsx
import { useNFTsByOwner } from 'ankr-react';

const Page = () => {
  const {data, error, isLoading} = useNFTsByOwner({
    walletAddress: '0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106',
    blockchain: ['eth', 'polygon'],
  })

  return (
    ...
  )
}
```
