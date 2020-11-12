import React from 'react'
import PublicNavbar from "PublicSite/PublicNavbar"
import LoginModal from 'PublicSite/LoginModal'

const VisitorPage = () => {
    return (
        <div className="visitor-page">
            <PublicNavbar />
            <LoginModal/>
            <div className="vistor-page-background"></div>
        </div>
    )
}

export default VisitorPage
