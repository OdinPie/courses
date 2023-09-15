import PropTypes from 'prop-types';

const List = ({courses,totalCredit,remCredit}) => {
    return (
        <div className='w-1/5 text-left bg-white h-auto p-5 rounded-lg'>
            <h2 className='font-semibold text-blue-600 text-2xl'>Credit hour remaining: {remCredit}</h2>
            <br />
            <hr />
            <br />
            <h2  className='font-semibold text-2xl'>Course Name: </h2>
            <br />
            {courses.map(course=><li className='list-decimal' key={course.id}>{course.title}</li>)}
            <br />
            <hr />
            <br />
            <h2  className='text-xl'>Total Credit Hour: {totalCredit} </h2>
            
        </div>
    );
};
List.propTypes = {
    courses:PropTypes.object,
    totalCredit: PropTypes.any,
    remCredit: PropTypes.any
}
export default List;