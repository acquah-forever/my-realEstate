import React from 'react'

const Footer = () => {
    return (
        <div className="mt-16">
            <footer className="footer bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <h6 className="footer-title text-white text-lg sm:text-xl mb-4">RealEstate Pro</h6>
                            <p className="text-sm sm:text-base leading-relaxed mb-4">
                                Your trusted partner in finding the perfect property. We make real estate dreams come true.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <nav className="lg:col-span-1">
                            <h6 className="footer-title text-white text-base sm:text-lg mb-4">Services</h6>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">Selling</a>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">Buying</a>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">Investing</a>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">Leasing</a>
                        </nav>

                        {/* Company */}
                        <nav className="lg:col-span-1">
                            <h6 className="footer-title text-white text-base sm:text-lg mb-4">Company</h6>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">About us</a>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">Contact</a>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">Jobs</a>
                            <a className="link link-hover text-sm sm:text-base hover:text-white transition-colors duration-300 block mb-2">Press kit</a>
                        </nav>

                        {/* Contact Info */}
                        <nav className="lg:col-span-1">
                            <h6 className="footer-title text-white text-base sm:text-lg mb-4">Get In Touch</h6>
                            <p className="text-sm sm:text-base mb-2">📧 info@realestatepro.com</p>
                            <p className="text-sm sm:text-base mb-2">📞 +1 (555) 123-4567</p>
                            <p className="text-sm sm:text-base mb-4">📍 123 Real Estate Ave, City, State</p>
                            <button className="btn btn-primary btn-sm sm:btn-md w-full sm:w-auto">Contact Us</button>
                        </nav>
                    </div>

                    {/* Bottom Section */}
                    <div className="divider my-8"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs sm:text-sm text-slate-400">
                            © 2024 RealEstate Pro. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <a className="link link-hover text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a className="link link-hover text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
