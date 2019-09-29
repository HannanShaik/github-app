import React from 'react';
import { render } from 'react-testing-library';

import List from '../List';

describe('<List />', () => {
  it('should render list of items passed.', () => {
    const items = [
      { id: 1, name: 'Hello', owner: { login: 'some-owner' } },
      { id: 2, name: 'World', owner: { login: 'some-owner' } },
    ];

    const { container, getByText } = render(<List items={items} />);
    const elements = container.querySelectorAll('li');
    expect(elements).toHaveLength(2);
    expect(
      getByText(`${items[0].owner.login}/${items[0].name}`),
    ).not.toBeNull();
    expect(
      getByText(`${items[1].owner.login}/${items[1].name}`),
    ).not.toBeNull();
  });
});
