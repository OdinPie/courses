import React from 'react';

const List = ({courses}) => {
    return (
        <div className='w-1/5 text-left'>
            <h2 className='font-semibold text-blue-600 text-2xl'>Credit hour remaining: </h2>
            <hr />
            <h2  className='font-semibold text-2xl'>Course Name: </h2>
            {courses.map(course=><li itemType='number'>{course.title}</li>)}
        </div>
    );
};

export default List;