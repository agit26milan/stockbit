import React from 'react'
import {Spinner} from 'reactstrap'

const CenterLoading = () => {

    return (
        <div className="w-100 flex center-flex mt-4" >
            <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
    )
}


export default CenterLoading