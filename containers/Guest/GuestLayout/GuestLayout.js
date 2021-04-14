import React from 'react';
import TopNavigation from "./TopNav";
import Footer from "./Footer";
import GuestAppHolder from "./GuestLayout.styles";
import WithGATracker from "@components/HOC/WithGATracker";
import WithPixel from "@components/HOC/WithPixel";


function GuestLayout({children}) {
    return (
        <GuestAppHolder>
            <div>
                <TopNavigation/>
                {children}
                <Footer/>
            </div>
        </GuestAppHolder>
    );
}


export default WithGATracker(WithPixel(GuestLayout))
