import React from 'react'

function HandleName(name) {
    const names = name;
    if (names.length > 15) {
      return `${names.slice(0, 14)}...`;
    } else {
      return names;
    }
}

export default HandleName