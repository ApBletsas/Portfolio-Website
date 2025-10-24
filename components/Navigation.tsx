// This line tells Next.js that this component uses client-side features like useState
'use client'

// Import useState hook for managing component state (menu open/closed, theme, etc.)
// Import useEffect hook for side effects (checking theme on load, scroll events, etc.)
import { useState, useEffect } from 'react'
// Import motion components from framer-motion for smooth animations
import { motion, AnimatePresence } from 'framer-motion'
// Import icons from react-icons library for visual elements
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

// Main Navigation component - displays header/navbar at top of page
const Navigation = () => {
  // State to track if mobile menu is open (true) or closed (false)
  // Default is false (menu starts closed)
  const [isOpen, setIsOpen] = useState(false)
  
  // State to track if page has been scrolled down
  // Used to change navbar appearance when scrolling
  // Default is false (page starts at top)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // State to track current theme: 'light' or 'dark'
  // Default is 'light' mode
  const [theme, setTheme] = useState('light')

  // useEffect runs when component first loads (empty dependency array [])
  // This checks what theme was saved in browser and applies it
  useEffect(() => {
    // Get saved theme from browser's localStorage
    // If no theme is saved, default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light'
    // Update theme state with saved value
    setTheme(savedTheme)
    // Apply theme to HTML document
    // If theme is 'dark', add 'dark' class to <html> element
    // If theme is 'light', remove 'dark' class from <html> element
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, []) // Empty array means this only runs once when component loads

  // useEffect runs when component loads and sets up scroll detection
  useEffect(() => {
    // Function that checks if page has been scrolled
    const handleScroll = () => {
      // window.scrollY is how many pixels the page has scrolled down
      // If scrolled more than 50 pixels, set isScrolled to true
      // Otherwise, set it to false
      setIsScrolled(window.scrollY > 50)
    }

    // Add scroll event listener to window
    // Every time user scrolls, handleScroll function runs
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup function that runs when component unmounts
    // Removes the scroll event listener to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty array means this only runs once when component loads

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    // If current theme is 'light', switch to 'dark', otherwise switch to 'light'
    const newTheme = theme === 'light' ? 'dark' : 'light'
    // Update theme state with new value
    setTheme(newTheme)
    // Save new theme to browser's localStorage so it persists after page reload
    localStorage.setItem('theme', newTheme)
    // Apply theme to HTML document by toggling 'dark' class
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Function to close mobile menu
  const closeMenu = () => {
    // Set isOpen to false, which hides the mobile menu
    setIsOpen(false)
  }

  // Function to smoothly scroll to a specific section on the page
  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first (so menu doesn't stay open after clicking link)
    closeMenu()
    // Find the HTML element with the given id (e.g., 'about', 'projects')
    const element = document.querySelector(sectionId)
    // If element exists on the page
    if (element) {
      // Scroll to that element with smooth animation
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Array of navigation links with their display text and target sections
  const navLinks = [
    { name: 'About', href: '#about' },           // Links to About section
    { name: 'Projects', href: '#projects' },     // Links to Projects section
    { name: 'Experience', href: '#experience' }, // Links to Experience section
    { name: 'Skills', href: '#skills' },         // Links to Skills section
    { name: 'Contact', href: '#contact' }        // Links to Contact section
  ]

  return (
    // Main navigation element, fixed to top of page
    // fixed keeps it at top even when scrolling
    // w-full makes it span full width of screen
    // z-50 ensures it stays above other content (higher z-index = on top)
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Container div with dynamic styling based on scroll position */}
      {/* If scrolled, add background color and shadow, otherwise transparent */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white dark:bg-dark-900 shadow-lg'  // Scrolled: white background with shadow
            : 'bg-transparent'                        // Not scrolled: transparent
        }`}
      >
        {/* Inner container that centers content and adds max width */}
        <div className="container-custom">
          {/* Flex container for logo and navigation items */}
          {/* justify-between pushes logo left and nav items right */}
          {/* items-center vertically centers everything */}
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand Section */}
            <motion.div
              // Start invisible and moved 20px to the left
              initial={{ opacity: 0, x: -20 }}
              // Animate to visible and normal position
              animate={{ opacity: 1, x: 0 }}
              // Animation takes 0.6 seconds
              transition={{ duration: 0.6 }}
            >
              {/* Clickable logo that scrolls to top of page */}
              <button
                // When clicked, scroll to very top (0 pixels from top)
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                // Large, bold text with theme-aware colors
                className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Apostolos Bletsas
              </button>
            </motion.div>

            {/* Desktop Navigation Links */}
            {/* hidden means invisible on mobile */}
            {/* md:flex means visible (flex layout) on medium screens and up */}
            <motion.div
              // Start invisible and moved 20px to the right
              initial={{ opacity: 0, x: 20 }}
              // Animate to visible and normal position
              animate={{ opacity: 1, x: 0 }}
              // Animation takes 0.6 seconds with 0.2s delay
              transition={{ duration: 0.6, delay: 0.2 }}
              // Hide on mobile, show as flex on desktop
              className="hidden md:flex items-center space-x-8"
            >
              {/* Loop through navigation links and create buttons */}
              {navLinks.map((link, index) => (
                <motion.button
                  // Use link name as unique key for React
                  key={link.name}
                  // When clicked, scroll to corresponding section
                  onClick={() => scrollToSection(link.href)}
                  // Scale up slightly on hover
                  whileHover={{ scale: 1.05 }}
                  // Scale down slightly when clicked
                  whileTap={{ scale: 0.95 }}
                  // Text styling with hover effects
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {/* Display link text (e.g., "About", "Projects") */}
                  {link.name}
                </motion.button>
              ))}

              {/* Theme Toggle Button (Sun/Moon) */}
              <motion.button
                // Scale up on hover
                whileHover={{ scale: 1.1 }}
                // Scale down when clicked
                whileTap={{ scale: 0.9 }}
                // When clicked, toggle between light and dark theme
                onClick={toggleTheme}
                // Circular button with padding and theme-aware colors
                className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors duration-200"
                // Accessibility label for screen readers
                aria-label="Toggle theme"
              >
                {/* Show sun icon in dark mode, moon icon in light mode */}
                {theme === 'dark' ? (
                  <FaSun className="w-5 h-5" />      // Sun icon for switching to light mode
                ) : (
                  <FaMoon className="w-5 h-5" />     // Moon icon for switching to dark mode
                )}
              </motion.button>
            </motion.div>

            {/* Mobile Menu Controls (Hamburger/Close button and Theme toggle) */}
            {/* md:hidden means visible on mobile, hidden on desktop */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Theme Toggle Button for Mobile */}
              <motion.button
                // Scale up on hover
                whileHover={{ scale: 1.1 }}
                // Scale down when clicked
                whileTap={{ scale: 0.9 }}
                // When clicked, toggle theme
                onClick={toggleTheme}
                // Circular button styling
                className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
                // Accessibility label
                aria-label="Toggle theme"
              >
                {/* Show sun or moon icon based on current theme */}
                {theme === 'dark' ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </motion.button>

              {/* Mobile Menu Toggle Button (Hamburger/X) */}
              <motion.button
                // Scale up on hover
                whileHover={{ scale: 1.1 }}
                // Scale down when clicked
                whileTap={{ scale: 0.9 }}
                // When clicked, toggle menu open/closed
                onClick={() => setIsOpen(!isOpen)}
                // Button styling
                className="p-2 text-gray-700 dark:text-gray-300"
                // Accessibility label
                aria-label="Toggle menu"
              >
                {/* Show X icon when menu is open, hamburger icon when closed */}
                {isOpen ? (
                  <FaTimes className="w-6 h-6" />    // X icon to close menu
                ) : (
                  <FaBars className="w-6 h-6" />     // Hamburger icon to open menu
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* AnimatePresence allows exit animations when menu closes */}
      <AnimatePresence>
        {/* Only render mobile menu when isOpen is true */}
        {isOpen && (
          <motion.div
            // Fade in from transparent (0) to semi-transparent (0.5)
            initial={{ opacity: 0 }}
            // Animate to visible
            animate={{ opacity: 1 }}
            // Fade out when closing
            exit={{ opacity: 0 }}
            // Animation takes 0.3 seconds
            transition={{ duration: 0.3 }}
            // Dark overlay that covers entire screen
            // fixed positions it over everything
            // inset-0 means top:0, right:0, bottom:0, left:0 (covers full screen)
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            // When clicking overlay (outside menu), close menu
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      {/* AnimatePresence enables exit animations */}
      <AnimatePresence>
        {/* Only render menu panel when isOpen is true */}
        {isOpen && (
          <motion.div
            // Start off-screen to the right (100% width)
            initial={{ x: '100%' }}
            // Slide in from right to normal position
            animate={{ x: 0 }}
            // Slide out to right when closing
            exit={{ x: '100%' }}
            // Animation takes 0.3 seconds with ease-in-out easing
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // Fixed position on right side of screen
            // w-64 makes panel 256px wide
            // h-full makes it full viewport height
            // Overflow-y-auto allows scrolling if content is too tall
            className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-dark-900 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Menu content container with padding */}
            <div className="p-6">
              {/* Close button at top of menu */}
              <div className="flex justify-end mb-8">
                <motion.button
                  // Scale up on hover
                  whileHover={{ scale: 1.1 }}
                  // Scale down when clicked
                  whileTap={{ scale: 0.9 }}
                  // Close menu when clicked
                  onClick={closeMenu}
                  // Button styling
                  className="p-2 text-gray-700 dark:text-gray-300"
                  // Accessibility label
                  aria-label="Close menu"
                >
                  {/* X icon to close menu */}
                  <FaTimes className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Navigation Links in Mobile Menu */}
              {/* space-y-4 adds vertical spacing between links */}
              <div className="space-y-4">
                {/* Loop through navigation links */}
                {navLinks.map((link, index) => (
                  <motion.button
                    // Use link name as unique key
                    key={link.name}
                    // Start invisible and moved up 20px
                    initial={{ opacity: 0, y: -20 }}
                    // Animate to visible, staggered based on index
                    animate={{ opacity: 1, y: 0 }}
                    // Each link delays slightly more (index * 0.1 seconds)
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    // When clicked, scroll to section
                    onClick={() => scrollToSection(link.href)}
                    // Full width button with padding and hover effects
                    className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {/* Display link text */}
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Export component so it can be imported and used in other files
export default Navigation