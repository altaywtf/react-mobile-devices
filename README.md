# React Mobile Devices

Stateless React component versions of [devices.css](https://github.com/marvelapp/devices.css) by [Marvel](https://github.com/marvelapp/devices.css).

## Ready to Use Devices
* Nexus 5

## Installation

```bash
$ npm install react-mobile-devices --save

```

## Usage
```jsx
import 'react-mobile-devices/dist/style.css';
import { Nexus } from 'react-mobile-devices';

const NexusWrapper = props => (
  <Nexus>
    Test!
  </Nexus>
);

```

## Development

### Development Flow

```bash
$ git clone git@github.com:altayaydemir/react-mobile-devices.git
 
$ cd react-mobile-devices
 
$ npm install 

# run this while developing your component
$ npm run start

# run documentation project (separately from first one)
$ npm run start:docs
```

### Production Build

```bash
# build the library
$ npm run build:lib

# build the docs
$ npm run build:docs

# build'em all!
$ npm run build
```

### Testing

```bash
# run tests in watch mode
$ npm run test:watch

# run tests and generate code coverage
$ npm run test
```
