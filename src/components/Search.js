import React from 'react'
import {Input} from 'reactstrap'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const SearchComponent = (props) => {
    const {className, onSearch, containerClassName, history, name, onKeyPress, defaultValue, searchLength, resetSearch, value} = props
    return (
        <div className={` mr-10-px ${containerClassName}`}>
                          <Input
                            type='text'
                            className={`form-control ${className}`}
                            name={name}
                            placeholder='Search'
                            onChange={onSearch}
                            onKeyPress={onKeyPress}
                            defaultValue={defaultValue}
                            value={value}
                          />
            {searchLength > 0 ? <div> <FontAwesomeIcon onClick={resetSearch} style={{marginRight: '5px', cursor: 'pointer'}} icon={faWindowClose} size='1x' /> </div> : null}
        </div>
    )
}

SearchComponent.propTypes = {
    className: PropTypes.string,
    onSearch: PropTypes.func,
    containerClassName: PropTypes.string,
    name: PropTypes.string,
    onKeyPress: PropTypes.func,
    defaultValue: PropTypes.string,
    resetSearch: PropTypes.func,
    searchLength: PropTypes.number,
    value: PropTypes.any
}

SearchComponent.defaultProps = {
    name: 'search',
    onKeyPress: () => null,
    resetSearch: () => null,
    searchLength: 0
}


export default SearchComponent