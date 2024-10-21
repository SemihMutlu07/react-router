import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white p-4 fixed bottom-0 w-full">
            <div className="container mx-auto text-center">
                <p>© 2024 My Blog. All rights reserved.</p>
                <div className="flex justify-center mt-2">
                    <a href="https://www.instagram.com/semihmutsuz/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="fab fa-instagram h-6"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/semihmutsuz/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="fab fa-linkedin h-6"></i>
                    </a>
                    <a href="https://www.youtube.com/@semihmutlu6852" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="fab fa-youtube h-6"></i>
                    </a>
                    <a href="https://x.com/anlaki_u" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="fab fa-twitter h-6"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
