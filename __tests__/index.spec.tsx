import { render, screen } from '@testing-library/react';
import httpMocks from 'node-mocks-http';
import Home, { getServerSideProps } from '../pages/index';
import { launchMock } from '../services/spacex/getLaunches';

describe('Index Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockPageContext = (path: string) => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: path,
      cookies: {},
      headers: {},
    });

    const res = httpMocks.createResponse();

    return {
      req,
      res,
      resolvedUrl: path,
      pathname: '',
      query: {},
      AppTree: () => null,
    };
  };

  it('GetServerSideProps calls correct url and returns data to the props', async () => {
    const response = await getServerSideProps(mockPageContext('/'));

    expect(response).toEqual({ props: { launches: launchMock } });
  });

  it('renders a list of launches onto to the page', async () => {
    render(
      <Home
        launches={{
          docs: [launchMock],
          totalDocs: 2,
          offset: 3,
          limit: 3,
          totalPages: 1,
          page: 1,
          pagingCounter: 1,
          hasPrevPage: false,
          hasNextPage: false,
          prevPage: null,
          nextPage: null,
        }}
      />
    );

    expect(screen.getByText('FalconSat')).toBeInTheDocument();

    expect(screen.getByText('5e9e289df35918033d3b2623')).toBeInTheDocument();
  });
});
