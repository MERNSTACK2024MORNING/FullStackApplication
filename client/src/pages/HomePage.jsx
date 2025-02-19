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
                  <div className="fixed right-8 top-1/2 transform translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4 dot-nav">
                  <button 
                  onClick={()=> window.scrollTo({top:0, behavior:smooth})}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeSection === 'hero'? 'bg-primary-600 w-4 h-4': 'bg-gray-400 hover:bg-primary-400'
                        }`}
                        title='Top'
                  >
                  </button>
                  <button
                  onClick={()=> scrollToSection(featureRef)}
                  className={`w-3 h-4 rounded-full transition-all duration-300 ${
                        activeSection === 'features'? 'bg-primary-600 w-4 h-4':'bg-gray-400 hover:bg-primary-400'
                        }`}
                        title='Features'
                  >

                  </button>
                  <button
                  onClick={()=> scrollToSection(techStackRef)}
                  className={`w-3 h-4 rounded-full transition-all duration-300 ${
                        activeSection === 'techstack'? 'bg-primary-600 w-4 h-4':'bg-gray-400 hover:bg-primary-400'
                        }`}
                        title='Tech Stack'
                  >

                  </button>
                  <button
                  onClick={()=> scrollToSection(testimonialsRef)}
                  className={`w-3 h-4 rounded-full transition-all duration-300 ${
                        activeSection === 'testimonials'? 'bg-primary-600 w-4 h-4':'bg-gray-400 hover:bg-primary-400'
                        }`}
                        title='Testimonials'
                  >

                  </button>
                  <button
                  onClick={()=> scrollToSection(contactRef)}
                  className={`w-3 h-4 rounded-full transition-all duration-300 ${
                        activeSection === 'contact'? 'bg-primary-600 w-4 h-4':'bg-gray-400 hover:bg-primary-400'
                        }`}
                        title='contact'
                  >
                  </button>
                  </div>
                  {/* Add pt-16 to account for fixed navbar */}
                  <div className="pt-1">
                        {/* hero Section with animation */}
                        <motion.section
                        initial = 'hidden'
                        animate = 'visible'
                        variants={fadeInUp}
                        transition={{duration:0.6}}
                        className='hero-section relative bg-gradient-to-b from-primary-900 to-primary-700 text-white py-32'
                        >
                              <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="text-center">
                                          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wlecome to Muumin Academy Technology</h1>
                                          <p className='text-xl md:text-2xl mb-8 text-gray-200'>
                                                Empowering students with cutting-edge technology education
                                          </p>
                                          <Link
                                          to='/login'
                                          className='inline-flex items-center px-6 py-3 text-lg font-medium rounded-md bg-white text-primary-900 hover:bg-gray-100'
                                          >
                                        Get Started
                                        <ArrowRightIcon className='ml-2 h-5 w-5'/>
                                          </Link>
                                    </div>
                              </div>
                        </motion.section>

                        {/* Tech stack Section with scroll Reveal */}
                        <motion.section
                        initial = 'hidden'
                        whileInView="visible"
                        viewport={{once:true, margin:'-100px'}}
                        variants={fadeInUp}
                        transition={{duration:0.6}}
                        id='techStack'
                        ref={techStackRef}
                        className='py-20 bg-gray-100 scroll-mt-16'
                        >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <h2 className="text-3xl font-bold text-center mb-12">
                                    Our Technology Stack
                              </h2>
                              <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                                    {
                                          techStack.map((tech)=>(
                                                <motion.div
                                                key={tech.name}
                                                whileHover={{scale:1.05}}
                                                className='flex flex-col items-center p-4 bg-white shadow-md transition-all duration-300 hover:shadow-lg'
                                                >
                                                 <div className="relative w-16 h-16 mb-4">
                                                      <img src={tech.icon} alt=""
                                                      className='w-full h-full object-contain'
                                                      style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'}}
                                                      />
                                                 </div>
                                                 <span className='text-sm font-medium' style={{color:tech.color}}>{tech.name}</span>
                                                </motion.div>
                                          ))
                                    }
                              </div>
                        </div>
                        </motion.section>

                        {/* Testimonials */}
                        <motion.section
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once:true, margin:'-100px'}}
                        variants={fadeInUp}
                        transition={{duration:0.6}}
                        id='testimonials'
                        ref={testimonialsRef}
                        className='py-20 scroll-mt-16'
                        >
                              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <h2 className="text-3xl font-bold text-center mb-12">What our student Say</h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-">
                                    {
                                          testimonals.map((testimonal)=>(
                                                <div className="p-6 bg-white rounded-lg shadow-md"
                                                key={testimonal.name}
                                                >
                                                <div className="flex items-center mb-4">
                                                      <img src={testimonal.image} alt={testimonal.name} className='h-12 w-12 rounded-full mr-4' />
                                                      <div className="">
                                                            <h4 className="font-semibold">{testimonal.name}</h4>
                                                            <p className='text-sm text-gray-600'>{testimonal.role}</p>
                                                      </div>
                                                </div>
                                                <p className='text-gray-600'>{testimonal.quote}</p>
                                                </div>
                                          ))
                                    }
                              </div>
                              </div>
                        </motion.section>

                        {/* Footer Section */}
                  </div>
            </div>
      )
}

export default HomePage;