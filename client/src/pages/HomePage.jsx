import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { AcademicCapIcon, UserGroupIcon, CodeBracketIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import {motion,AnimatePresence} from 'framer-motion';

const HomePage = () => {
      const featureRef = useRef(null);
      const techStackRef = useRef(null);
      const testimonialsRef = useRef(null);
      const contactRef = useRef(null);

      const scrollToSection = ()=>{
            ref.current?.scrollToSection({behavior: 'smooth'})
      }

      const techStack = [
            {
                  name: 'HTML5',
                  icon:'/icons/html5.svg',
                  color: '#E34F26'
            },
            {
                  name: 'CSS3',
                  icon:'/icons/css3.svg',
                  color: '#1572B6'
            },
            {
                  name: 'javascript',
                  icon:'/icons/javascript.svg',
                  color: '#F7DF1E'
            },
            {
                  name: 'React',
                  icon:'/icons/react.svg',
                  color: '#61DAFB'
            },
            {
                  name: 'tailwind css',
                  icon:'/icons/tailwind.svg',
                  color: '#38B2AC'
            },
            {
                  name: 'Node.js',
                  icon:'/icons/nodejs.svg',
                  color: '#339933'
            },
            {
                  name: 'Express',
                  icon:'/icons/express.svg',
                  color: '#000000'
            },
            {
                  name: 'Prisma',
                  icon:'/icons/prisma.svg',
                  color: '#2D3748'
            },
            {
                  name: 'MySQL',
                  icon:'/icons/mysql.svg',
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
      const [activeSection, setActiveSection]= useState('hero')
      const [scrollY, setScrollY]= useState(0)
      const [showScrollTop, setShowScrollTop]= useState(false)

      useEffect(()=>{
const handleScroll = ()=>{
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY >100)
}
            const sections = ['hero','features','techStack','testimonials'];
            const sectionElements = sections.map(section =>section === 'hero'? document.querySelector('.hero-section'):document.getElementById(section))
      })

      return (
            <div></div>
      )
}

export default HomePage;