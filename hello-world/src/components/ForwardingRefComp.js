import React from 'react'

const ForwardingRefComp = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default ForwardingRefComp

