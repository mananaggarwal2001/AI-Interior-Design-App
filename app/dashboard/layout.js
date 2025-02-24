

import Header from './_components/Header.js'
import React from 'react'
function Layout({ children }) {

    return (
        <div>
            <Header />
            <div className='pt-20 px-10 md:px-20 lg:px-40 xl:px-60'>
                {children}
            </div>
        </div>
    )
}

export default Layout
