import React from 'react'
import PropTypes from 'prop-types';

const AutoComplete = (props) => {
    const {data, onClick} = props
    return (
        <div className='mt-3 p-2 autocomplete-container' >
            {data.length > 0 ? 
            <>
            {data.map((x, index) => (
                <div className='pointer' onClick={() => onClick(x)} key={index} >
                    <p>{x} </p>
                </div>
            ))}
            </> : <div> <p> No Record Found </p> </div>}
        </div>
    )
}

AutoComplete.propTypes = {
    data: PropTypes.array,
    onClick: PropTypes.func
}

export default AutoComplete