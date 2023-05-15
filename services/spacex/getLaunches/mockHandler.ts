import { rest } from 'msw';

import getConfig from 'next/config';
import { launchMock } from './__mocks__';

const config = getConfig();
const baseUrl = config.serverRuntimeConfig.spacexApiUrl;

export const getMockHandler = () => {
  return rest.post(`${baseUrl}/launches/query`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(launchMock));
  });
};
