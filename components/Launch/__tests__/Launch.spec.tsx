import React from 'react';
import { render, screen } from '@testing-library/react';
import { launchMock } from '../../../services/spacex/getLaunches';
import { Launch } from '../Launch';

describe('Launch', () => {
  it('should render name of the launch', () => {
    render(<Launch launch={launchMock} />);

    expect(screen.getByText('FalconSat')).toBeInTheDocument();
  });

  it('should render name of the date as a human readable string', () => {
    render(<Launch launch={launchMock} />);

    expect(screen.getByText('2006-03-24 22:30:00')).toBeInTheDocument();
  });

  it('should render name of the first core serial', () => {
    render(<Launch launch={launchMock} />);

    expect(screen.getByText('5e9e289df35918033d3b2623')).toBeInTheDocument();
  });

  it('should render image from links.patch.small', () => {
    render(<Launch launch={launchMock} />);
  });

  it('should render a success chip if successful', () => {
    render(<Launch launch={{ ...launchMock, success: true }} />);

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.queryByText('Failure')).not.toBeInTheDocument();
  });

  it('should render a failure chip if not successful', () => {
    render(<Launch launch={{ ...launchMock, success: false }} />);

    expect(screen.getByText('Failure')).toBeInTheDocument();
    expect(screen.queryByText('Success')).not.toBeInTheDocument();
  });
});
