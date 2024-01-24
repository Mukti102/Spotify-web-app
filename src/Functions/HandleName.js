import React from 'react'

function HandleName(name,length = 15) {
    const names = name;
    if (names.length > length) {
      return `${names.slice(0, length)}...`;
    } else {
      return names;
    }
}

export default HandleName