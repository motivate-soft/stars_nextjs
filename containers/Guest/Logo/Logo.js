import React from 'react'
import logoDefault from '@iso/assets/images/logo-horizontal.png';
import logoWhite from '@iso/assets/images/logo-white.png';
import PropTypes from 'prop-types';
import LogoNext from "@iso/ui/Logo/LogoNextJs";

const Logo = (props) => {
    const {className, white} = props
    return (
        white
            ? <LogoNext withLink linkTo="/" src={logoWhite} className={className}/>
            : <LogoNext withLink linkTo="/" src={logoDefault} className={className}/>
    )
}

Logo.prototype = {
    white: PropTypes.bool,
    className: PropTypes.string
}

Logo.defaultProps = {
    white: false
}

export default Logo
