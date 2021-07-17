import React from 'react';
import { useState } from '@hookstate/core';
import { Text } from 'react-native';

export default function Test() {
  const foobar = useState(true);

  return (
    <Text>foobar</Text>
  );
}