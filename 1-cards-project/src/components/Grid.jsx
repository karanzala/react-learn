import React from 'react'

const Grid = ({ children, columns }) => {
    // `children` contains any JSX nested inside <Grid>...</Grid>
    console.log(children); // This will log the nested JSX elements (the Card components)
    return (
        <div className='grid' style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {children}
        </div>
    )
}

export default Grid
