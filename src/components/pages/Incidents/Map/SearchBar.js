import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  return <Search placeholder="Location" enterButton="Search" size="medium" />;
};

export default SearchBar;
