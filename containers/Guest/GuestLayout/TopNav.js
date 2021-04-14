import React, {useState} from 'react'
import Link from 'next/link';
import styled from "styled-components";
import {palette} from "styled-tools";
import classNames from 'classnames';
import Container from "@iso/ui/UI/Container/Container";
import Logo from "@containers/Guest/Logo/Logo";
import useIsScrolled from "@iso/lib/hooks/useIsScrolled";
import CovidBanner from "@containers/Guest/GuestLayout/CovidBanner";


const TopNavWrapper = styled.div`
  .navbar {
    margin: 0 auto;
    background-color: transparent !important;
    padding: 0 !important;
    display: flex;

    &.fixed {
      z-index: 1000;
      position: fixed;
      left: 0;
      right: 0;
      opacity: 1;
      transition: all ease-in-out 500ms;
    }

    &.sticky {
      top: 0;
      background-color: #fff !important;
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.14);
      padding: 15px 0;
    }

    .nav-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      .navbar-brand {
        img {
          margin-right: auto;
          max-width: 250px !important;
          min-width: 150px !important;
        }
      }

      .navbar-collapse {
        height: auto !important;
        flex-grow: 0;

        .navbar-nav {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 30px;

          .nav-item {
            margin: 0;

            a {
              margin: 0;
              padding: 8px;
              font-weight: bold;
              line-height: normal;
              color: ${palette('primary', 0)} !important;
              position: relative;
              text-transform: uppercase;
              text-decoration: none;

              &:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 3px;
                bottom: -3px;
                left: 0;
                background-color: ${palette('primary', 0)};
                visibility: hidden;
                transform: scaleX(0);
                transition: all 0.3s ease-in-out 0s;
              }

              &:hover,
              &.active {
                &:after {
                  visibility: visible;
                  transform: scaleX(1);
                }
              }
            }
          }
        }
      }

      .navbar-toggler {
        z-index: 1000;
        position: absolute;
        top: 0;
        right: 10px;
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        padding: 0;
        border: 0;
        background: transparent;
        outline: 0;
        box-shadow: none;

        > span {
          position: absolute;
          top: 0;
          display: block;
          width: 100%;
          height: 4px;
          background: ${palette('primary', 0)} none repeat scroll 0 0;
          opacity: 1;
          transition: all 600ms cubic-bezier(0.62, 0.04, 0.3, 1.56);
          transition-delay: 100ms;
          transform: rotate(0deg);

          &:nth-child(1) {
            transform: rotate(135deg);
            margin-top: 10px;
          }

          &:nth-child(2) {
            opacity: 0;
            // left: -30px * 3;
          }

          &:nth-child(3) {
            transform: rotate(-135deg);
            margin-top: 10px;
          }
        }

        &.sticky {
          top: 30px;
        }

        &.collapsed {
          span {
            position: absolute;
            top: 10px;
            display: block;
            width: 100%;
            height: 4px;
            background: ${palette('primary', 0)} none repeat scroll 0% 0%;
            opacity: 1;
            transition: all 600ms cubic-bezier(0.62, 0.04, 0.3, 1.56);
            transition-delay: 100ms;
            transform: rotate(0deg);

            &:nth-child(1) {
              margin-top: 0px;
              color: ${palette('primary', 0)};
            }

            &:nth-child(2) {
              margin-top: 10px;
              margin-right: 0px;
              color: ${palette('primary', 0)};
            }

            &:nth-child(3) {
              margin-top: 20px;
              color: ${palette('primary', 0)};
            }
          }
        }
      }

      @media (max-width: 768px) {
        .navbar-brand {
          img {
            width: 200px;
          }
        }
      }

      @media (max-width: 992px) {
        max-height: 9rem;
        .navbar-toggler {
          display: flex;
        }

        .navbar-collapse {
          background: ${palette('secondary', 0)};
          padding: 83px 0 20px;
          position: fixed;
          top: 0;
          right: 0;
          height: auto;
          max-width: 500px;
          width: 0;
          opacity: 0;
          transition: all 600ms cubic-bezier(0.62, 0.04, 0.3, 1.56);
          transition-delay: 100ms;

          .navbar-nav {
            .nav-item {
              a {
                display: block;
                padding: 20px;
                text-align: center;

                &:after {
                  content: "";
                  width: 0;
                }

                &:hover {
                  background-color: ${palette('primary', 1)};

                  &:after {
                    content: "";
                    width: 0;
                  }
                }
              }
            }
          }

          &.show {
            max-width: 500px;
            width: 100%;
            opacity: 1;
          }
        }
      }

      @media (min-width: 992px) {
        .navbar-toggler {
          display: none;
        }

        .navbar-collapse {
          .navbar-nav {
            flex-direction: row;

            .nav-item {
              padding: 0;
            }
          }
        }
      }

      @media (min-width: 1176px) {
        .navbar-collapse {
          .navbar-nav {
            .nav-item {
              padding: 0 8px;
            }
          }
        }
      }

      @media (min-width: 1176px) {
        .navbar-collapse {
          .navbar-nav {
            .nav-item {
              padding: 0 12px;
            }
          }
        }
      }
    }

  }
`
const navLinks = [
    {
        path: '/listing',
        label: 'Apartments',
    },
    {
        path: '/locations',
        label: 'Locations',
    },
    {
        path: '/medical',
        label: 'Medical/Corporate',
    },
    {
        path: '/services',
        label: 'Services',
    },
    {
        path: '/blog',
        label: 'Blog',
    },
    {
        path: '/about',
        label: 'About',
    },
    {
        path: '/contact',
        label: 'Contact',
    },
]

const TopNavigation = () => {
    const [show, setShow] = useState(false)
    const isScrolled = useIsScrolled()

    return (
        <TopNavWrapper>
            <CovidBanner isScrolled={isScrolled}/>
            <nav className={classNames('navbar fixed', {sticky: isScrolled})}>
                <Container className="nav-container">
                    <Logo className="nav-logo"/>
                    <button className={classNames("navbar-toggler", {collapsed: !show, sticky: isScrolled})}
                            onClick={() => setShow(!show)}>
                        <span className="nav-span"/>
                        <span/>
                        <span/>
                    </button>
                    <div className={classNames("navbar-collapse", {show: show})}>
                        <div className="navbar-nav">
                            {
                                navLinks.map((item, index) => (
                                    <div key={index} className="nav-item">
                                        <Link href={item.path}>{item.label}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </nav>
        </TopNavWrapper>
    );
}

export default TopNavigation
