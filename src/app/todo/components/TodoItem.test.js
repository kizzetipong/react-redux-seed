/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem.js';

describe('With React Testing Library', () => {
  it('Have correct TODO list', () => {
    const { getByText } = render(<TodoItem todo={{ title: 'AAA' }} />);
    const elem = getByText('AAA');
    expect(elem.innerHTML).toBe('AAA');
  });
});
