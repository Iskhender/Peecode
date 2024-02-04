import React from 'react'
import './Navbar.css'
import Logo from '../assets/image/Logo.svg'
import Ukraine from '../assets/image/Ukraine.svg'
import yasil from '../assets/image/yasil.svg'
import { FaBars } from "react-icons/fa";
import { useRef } from 'react'
import { FaXmark } from "react-icons/fa6";



const Navbar = () => {
    const overlaycesus = useRef();
    const overlayiac = () => {
        overlaycesus.current.classList.add("aktiv")
    }
    const overlayibagla = () => {
        overlaycesus.current.classList.remove("aktiv")
    }

    return (
        <>
            <div className=" overlay mt-1" ref={overlaycesus}>
                <img src={Logo} alt="" className='ms-2' />
                <button className='btn fs-1 position-absolute end-0 x-ovarlay' onClick={overlayibagla}>
                    <FaXmark />
                </button>
                <div className='link-ovarlay d-flex flex-column justify-content-center align-items-center gap-4 mt-3'>
                    <div className='d-flex mb-3'>
                        <img src={Ukraine} alt="" className='me-2 ' />
                        <a href="#"><span className='text-dark text-decoration-underline navbar-a'>Stand with</span> Ukraine</a>
                    </div>
                    <a className="nav-link navbar-a" href="#">What we do</a>
                    <a className="nav-link text-success navbar-a " href="#">Career</a>
                    <a className="nav-link navbar-a" href='#'>Contact</a>
                    <div>
                        <a href="#" className="nav-link navbar-a-blog">Blog</a>
                        <img src={yasil} alt="" className='ms-2 mt-2' />
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg pt-2">
                <div className="container">
                    <a className=" navbar-a" href="#">
                        <img src={Logo} alt="" />
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={overlayiac} >
                        <FaBars />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='d-flex'>
                            <img src={Ukraine} alt="" className='me-2 Ukraine-navbar' />
                            <a href="#"><span className='text-dark text-decoration-underline navbar-a'>Stand with</span> Ukraine</a>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-c">
                            <li className="nav-item">
                                <a className="nav-link navbar-a" href="#">What we do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success navbar-a " href="#">Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-a" href='#'>Contact</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className="nav-link navbar-a-blog">Blog</a>
                                <img src={yasil} alt="" className='ms-3' />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar