import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Wrapper = styled.li`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;

  &:first-child {
    border-top: none;
  }
`;

function ListItem({ item, type }) {
  return (
    <Wrapper>
      <Item>
        {type === 'repos'
          ? `${item.owner.login}/${item.name}`
          : `${item.login}`}
      </Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
  type: PropTypes.string,
};

export default ListItem;
