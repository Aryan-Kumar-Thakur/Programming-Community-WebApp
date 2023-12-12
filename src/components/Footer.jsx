import React from 'react'
import '../styles/footer.css'
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <h1>Thanks for visiting us 😍</h1>
                <ul className='social-media'>
                    <a href="https://fontawesome.com/search?q=edit&o=r" target='_blanc'><li className='instagram'><FaInstagramSquare /></li></a>
                    <a href="https://www.youtube.com/" target='_blanc'><li className='whatsapp'><FaWhatsappSquare /></li></a>
                </ul>
        </footer>
    )
}

export default Footer