import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../../components/Buttons/Button';
import Header from '../../components/Header/Header';

describe("Home Page Test's", () => {
  it('Render menu button', () => {
    render(<Button />);
    expect(fireEvent.click(screen.getByRole('button')));
  });
  it('Render search box', () => {
    expect(render(<Header />).getByPlaceholderText('Search'));
  });
  it('Render switch for theme mode', () => {
    render(<Header />);
    expect(screen.queryByRole('input'));
  });
  it('Render Avatar', () => {
    render(<Header />);
    expect(screen.queryByRole('img'));
  });
  it('Render Cards', () => {
    render(<Header />);
    expect(screen.getAllByRole('Card'));
  });
});
