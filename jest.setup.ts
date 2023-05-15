import '@testing-library/jest-dom';
import { setupServer, SetupServer } from 'msw/node';

import { getMockHandler } from './services/spacex/getLaunches';

jest.mock('next/config', () => () => ({
  serverRuntimeConfig: { spacexApiUrl: 'https://api.spacexdata.com/v5' },
}));

declare global {
  var server: SetupServer;
}

global.server = setupServer(getMockHandler());

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
