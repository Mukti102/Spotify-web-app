import React from 'react'

function MilisecondToMinute(sm) {
    const minute = Math.floor(sm / 60000);
    const second = Math.floor((sm % 60000) / 1000).toFixed(0);
    return `${minute}:${second < 10 ? "0" : ""}${second}`;
}

export default MilisecondToMinute