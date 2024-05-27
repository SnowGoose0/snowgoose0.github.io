import React from 'react';

interface TagProps {
    value: string;
}

const Tag: React.FC<TagProps> = ({ value }) => {
    return (
        <div
            className='m-1 bg-gray-800 rounded-xl
                    md:text-base text-sm'
        >
            <p className='p-2 font-light'>{value}</p>
        </div>
    );
};

export default Tag;
