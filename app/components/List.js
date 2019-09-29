import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 25em;
  overflow-y: auto;
  padding: 0 1em;
`;

function List({ items, type }) {
  return (
    <Wrapper>
      <Ul>
        {items.map(item => (
          <ListItem key={`item-${item.id}`} item={item} type={type} />
        ))}
      </Ul>
    </Wrapper>
  );
}

List.propTypes = {
  items: PropTypes.any,
  type: PropTypes.string,
};

export default List;
