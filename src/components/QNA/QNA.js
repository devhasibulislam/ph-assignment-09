import React from 'react';
import useQNA from '../../hooks/useQNA';
import QNACards from '../QNACards/QNACards';

const QNA = () => {
    const [qna] = useQNA([]);
    return (
        <div>
            <h1 className='text-3xl'>Following cards illustrate the answers of questions which provided:</h1>
            <div className='mt-12'>
                {
                    qna.map(qa => <QNACards
                        key={qa.id}
                        qa={qa}
                    ></QNACards>)
                }
            </div>
        </div>
    );
};

export default QNA;