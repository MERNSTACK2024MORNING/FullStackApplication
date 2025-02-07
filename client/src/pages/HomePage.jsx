import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { AcademicCapIcon, UserGroupIcon, CodeBracketIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
      const featureRef = useRef(null);
      const techStackRef = useRef(null);
      const testimonialsRef = useRef(null);
      const contactRef = useRef(null);

      const scrollToSection = () => {
            ref.current?.scrollToSection({ behavior: 'smooth' })
      }

      const techStack = [
            {
                  name: 'HTML5',
                  icon: '/icons/html5.svg',
                  color: '#E34F26'
            },
            {
                  name: 'CSS3',
                  icon: '/icons/css3.svg',
                  color: '#1572B6'
            },
            {
                  name: 'javascript',
                  icon: '/icons/javascript.svg',
                  color: '#F7DF1E'
            },
            {
                  name: 'React',
                  icon: '/icons/react.svg',
                  color: '#61DAFB'
            },
            {
                  name: 'tailwind css',
                  icon: '/icons/tailwind.svg',
                  color: '#38B2AC'
            },
            {
                  name: 'Node.js',
                  icon: '/icons/nodejs.svg',
                  color: '#339933'
            },
            {
                  name: 'Express',
                  icon: '/icons/express.svg',
                  color: '#000000'
            },
            {
                  name: 'Prisma',
                  icon: '/icons/prisma.svg',
                  color: '#2D3748'
            },
            {
                  name: 'MySQL',
                  icon: '/icons/mysql.svg',
                  color: '#4479A1'
            },
      ];

      const testimonals = [
            {
                  name: 'Abdirahman Moumin',
                  role: 'student',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKb8dm7qNPXV9L9glKBef1BzFN-jnEudec8g&s',
                  quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

            }
      ]
      const [activeSection, setActiveSection] = useState('hero')
      const [scrollY, setScrollY] = useState(0)
      const [showScrollTop, setShowScrollTop] = useState(false)

      useEffect(() => {
            const handleScroll = () => {
                  setScrollY(window.scrollY)
                  setShowScrollTop(window.scrollY > 100)
            }
            const sections = ['hero', 'features', 'techStack', 'testimonials'];
            const sectionElements = sections.map(section => section === 'hero' ? document.querySelector('.hero-section') : document.getElementById(section))
            // current section Page 
            const currentSection = sectionElements.findIndex(element => {
                  if (!element) return false;
                  const rect = element.getBoundingClientRect();
                  return rect.top <= 100 && rect.bottom >= 100;
            })
            if (currentSection !== -1) {
                  setActiveSection(sections[currentSection]);
            }
            window.addEventListener('scroll', handleScroll);
            return () => window.addEventListener('scroll', handleScroll)
      }, [])

      // Scroll to top with smooth aniamtion
      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            })
      };

      // animation
      const fadeInUp = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
      }

      return (
            <div className='min-h-screen bg-gray-50'>
                  {/* Navbar */}
                  <nav className="fixed w-full bg-primary-900 text-white">
                        <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8">
                              <div className="flex items-center justfiy-between h-16">
                                    <div className="flex-shrink-0">
                                          <span className="text-xl font-bold">Moumin Academy</span>
                                    </div>
                                    <div className="hidden md:flex items-center space-x-4">
                                          <button onClick={() => scrollToSection(featureRef)}
                                                className='text-gray-300 hover:text-white px-3 py-2'
                                          >
                                                Features
                                          </button>
                                          <button onClick={() => scrollToSection(techStackRef)}
                                                className='text-gray-300 hover:text-white px-3 py-2'
                                          >
                                                Tech Stack
                                          </button>
                                          <button onClick={() => scrollToSection(testimonialsRef)}
                                                className='text-gray-300 hover:text-white px-3 py-2'
                                          >
                                                Testimonials
                                          </button>
                                          <button onClick={() => scrollToSection(contactRef)}
                                                className='text-gray-300 hover:text-white px-3 py-2'
                                          >
                                                Contact
                                          </button>
                                          <Link
                                                to='/login'
                                                className='ml-4 px-4 rounded-md text-sm font-medium bg-primary-700 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 '
                                          >Login</Link>
                                    </div>
                              </div>
                        </div>
                  </nav>

                  {/* Right side Nagivation to Dots with tooltips */}
            </div>
      )
}

export default HomePage;