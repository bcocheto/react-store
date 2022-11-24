/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HomeAlt, StoreAlt } from '@styled-icons/boxicons-regular';
import { TabWrapper } from './style';

const TabBarComponent = () => {
  return (
    <TabWrapper>
      <div className='nav'>
        <input type='checkbox' />
        <span></span>
        <span></span>
        <div className='menu'>
          <li>
            <HomeAlt />
            <a href='#'>home</a>
          </li>
          <li>
            <StoreAlt />
            <a href='#'>about</a>
          </li>
          <li>
            <a href='#'>cursos</a>
          </li>
        </div>
      </div>
    </TabWrapper>
  );
};

export default TabBarComponent;
