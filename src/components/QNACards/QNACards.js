import React from 'react';

const QNACards = ({ qa }) => {
    const { answer, question } = qa;
    return (
        <div className='mb-8'>
            <h3 className='text-2xl font-bold mb-2'>{question}</h3>
            <p>{ answer }</p>
        </div>
    );
};

export default QNACards;