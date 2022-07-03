import React, {useContext} from 'react';

// Components
import {AuthContext} from '../Context/context';
import en from '../Helper/en';
import mm from '../Helper/mm';

const useLocal = () => {
  const {lang} = useContext(AuthContext);
  if (lang === 'en') {
    return en;
  } else {
    return mm;
  }
};

export default useLocal;
