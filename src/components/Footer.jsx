import React from 'react'

const Footer = () => {
    return (
        <footer className=" bg-black text-slate-200">
            <div className="relative overflow-hidden px-6 py-12 sm:px-8 lg:px-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,180,0,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_20%)]" />
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
                        <div className="space-y-5">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Kojo Addo</h2>
                            <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">Helping you find the right home, investment, or commercial space with confidence, clarity, and care.  </p>

                            <div className="inline-flex rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-amber-500/20 transition hover:bg-amber-300">Let's make your next move memorable </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-5">Explore</h3>
                            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
                                <li> <a href="#services" className="transition-colors duration-300 hover:text-amber-400">Selling your property</a></li>
                                <li><a href="#listings" className="transition-colors duration-300 hover:text-amber-400"> Browse listings</a></li>
                                <li><a href="#reviews" className="transition-colors duration-300 hover:text-amber-400">Client success stories</a></li>
                                <li><a href="#contact" className="transition-colors duration-300 hover:text-amber-400">Book a consultation</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-5">Contact</h3>
                            <div className="space-y-4 text-sm sm:text-base text-slate-300">
                                <div>
                                    <p className="font-medium text-slate-100">Office</p>
                                    <p>Accra, Ghana</p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-100">Phone</p>
                                    <a href="tel:+233501234567" className="inline-block transition-colors duration-300 hover:text-amber-400">+233 50 123 4567</a>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-100">Mail</p>
                                    <a href="mailto:hello@kojoaddo.com" className="inline-block transition-colors duration-300 hover:text-amber-400">hello@kojoaddo.com</a>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-100">Hours</p>
                                    <p>Mon - Fri, 9:00 AM – 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-5">Follow Us</h3>
                            <p className="text-sm sm:text-base text-slate-400 mb-6 max-w-sm">
                                Stay connected for property updates, local market tips, and new listings.
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="#" aria-label="Twitter" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-slate-300 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-slate-950">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="YouTube" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-slate-300 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-slate-950">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-slate-300 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-slate-950">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 Kojo Addo. All rights reserved.</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <a href="#" className="transition-colors duration-300 hover:text-amber-400">Privacy Policy</a>
                            <a href="#" className="transition-colors duration-300 hover:text-amber-400">Terms of Service</a>
                            <a href="#" className="transition-colors duration-300 hover:text-amber-400">Cookie Notice</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
