'use client'

// Import motion components from framer-motion for smooth animations
import { motion } from 'framer-motion'
// Import icons from react-icons library for visual elements
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp, FaCoffee } from 'react-icons/fa'

// Main Footer component - displays at the bottom of every page
const Footer = () => {
  // Function to scroll the page back to the top smoothly
  const scrollToTop = () => {
    // window.scrollTo is a browser API that controls page scrolling
    // top: 0 means scroll to the very top of the page
    // behavior: 'smooth' creates an animated scroll instead of instant jump
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Get the current year dynamically (so footer year updates automatically)
  // new Date() creates a date object with today's date
  // getFullYear() extracts just the year (e.g., 2025)
  const currentYear = new Date().getFullYear()

  // Array of social media links with custom hover colors
  const socialLinks = [
    {
      icon: FaGithub,                                       // GitHub icon component
      name: 'GitHub',                                       // Platform name for accessibility
      url: 'https://github.com/ApBletsas',                 // Link to GitHub profile
      color: 'hover:text-gray-900 dark:hover:text-white'   // Hover color: black in light mode, white in dark mode
    },
    {
      icon: FaLinkedin,                                     // LinkedIn icon component
      name: 'LinkedIn',                                     // Platform name for accessibility
      url: 'https://linkedin.com/in/apostolis-bletsas',    // Link to LinkedIn profile
      color: 'hover:text-blue-600 dark:hover:text-blue-500' // Hover color: blue in both modes
    },
    {
      icon: FaEnvelope,                                     // Email/envelope icon component
      name: 'Email',                                        // Platform name for accessibility
      url: 'mailto:apostolisbletsas14@gmail.com',          // Opens user's email client
      color: 'hover:text-red-600 dark:hover:text-red-500'   // Hover color: red in both modes
    }
  ]

  // Array of quick navigation links to different sections of the page
  const quickLinks = [
    { name: 'About', href: '#about' },           // Link to About section
    { name: 'Projects', href: '#projects' },     // Link to Projects section
    { name: 'Experience', href: '#experience' }, // Link to Experience section
    { name: 'Skills', href: '#skills' },         // Link to Skills section
    { name: 'Contact', href: '#contact' }        // Link to Contact section
  ]

  // Function to smoothly scroll to a specific section on the page
  const scrollToSection = (href: string) => {
    // querySelector finds the HTML element with the given id (e.g., #about finds <section id="about">)
    const element = document.querySelector(href)
    // If the element exists on the page
    if (element) {
      // Scroll to that element with smooth animation
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // Main footer element with dark background colors
    // bg-dark-900 is the primary dark background color
    // dark:bg-gray-900 is an alternative dark color when dark mode is active
    <footer className="bg-dark-900 dark:bg-gray-900 text-gray-300">
      {/* Container that centers content and adds max width */}
      <div className="container-custom">
        {/* Main Footer Content Section */}
        {/* py-16 adds vertical padding (top and bottom) */}
        <div className="py-16">
          {/* Grid layout that changes based on screen size */}
          {/* 1 column on mobile, 2 on tablet (md), 4 on desktop (lg) */}
          {/* gap-8 adds spacing between grid items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand/About Section - takes 2 columns on large screens */}
            <motion.div
              // Start invisible and moved down 20px
              initial={{ opacity: 0, y: 20 }}
              // Animate to visible when scrolled into view
              whileInView={{ opacity: 1, y: 0 }}
              // Animation takes 0.6 seconds
              transition={{ duration: 0.6 }}
              // once: true means animation only happens once (doesn't repeat on scroll)
              viewport={{ once: true }}
              // This section spans 2 columns on large screens
              className="lg:col-span-2"
            >
              {/* Name/brand heading in white color */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Apostolos Bletsas
              </h3>
              {/* Brief description/tagline */}
              {/* max-w-md limits text width for better readability */}
              <p className="text-gray-400 mb-6 max-w-md">
                Passionate software developer creating innovative solutions 
                with modern technologies. Let&apos;s build something amazing together.
              </p>
              
              {/* Social Media Links Row */}
              {/* flex makes items display horizontally */}
              {/* gap-4 adds spacing between icons */}
              <div className="flex gap-4">
                {/* Loop through each social media link and create an icon button */}
                {socialLinks.map((social, index) => (
                  <motion.a
                    // Use social platform name as unique key for React
                    key={social.name}
                    // Start invisible and scaled down
                    initial={{ opacity: 0, scale: 0.8 }}
                    // Animate to visible and full size when scrolled into view
                    whileInView={{ opacity: 1, scale: 1 }}
                    // Stagger animation based on index position (each delays 0.1s more)
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    // Animation only happens once
                    viewport={{ once: true }}
                    // Scale up and move up slightly on hover
                    whileHover={{ scale: 1.1, y: -2 }}
                    // Scale down when clicked for tactile feedback
                    whileTap={{ scale: 0.9 }}
                    // Link to social media profile
                    href={social.url}
                    // Open link in new tab
                    target="_blank"
                    // Security attribute for external links (prevents access to window.opener)
                    rel="noopener noreferrer"
                    // Square icon container with rounded corners and custom hover color
                    // The ${social.color} applies the custom hover color from the array
                    className={`p-3 bg-dark-800 dark:bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-dark-700 dark:hover:bg-gray-700`}
                    // Accessibility label for screen readers
                    aria-label={social.name}
                  >
                    {/* Display the social media icon */}
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              // Start invisible and moved down 20px
              initial={{ opacity: 0, y: 20 }}
              // Animate to visible when scrolled into view
              whileInView={{ opacity: 1, y: 0 }}
              // Animation takes 0.6 seconds with 0.2s delay (appears after brand section)
              transition={{ duration: 0.6, delay: 0.2 }}
              // Animation only happens once
              viewport={{ once: true }}
            >
              {/* Section heading */}
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              {/* Unordered list with vertical spacing between items */}
              <ul className="space-y-2">
                {/* Loop through each navigation link and create a list item */}
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {/* Button instead of anchor for smooth scroll (doesn't change URL) */}
                    <motion.button
                      // Slide right 5px on hover
                      whileHover={{ x: 5 }}
                      // When clicked, scroll to the section
                      onClick={() => scrollToSection(link.href)}
                      // Left-aligned button that changes color on hover
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {/* Link text (e.g., "About", "Projects") */}
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information Section */}
            <motion.div
              // Start invisible and moved down 20px
              initial={{ opacity: 0, y: 20 }}
              // Animate to visible when scrolled into view
              whileInView={{ opacity: 1, y: 0 }}
              // Animation takes 0.6 seconds with 0.4s delay (appears last)
              transition={{ duration: 0.6, delay: 0.4 }}
              // Animation only happens once
              viewport={{ once: true }}
            >
              {/* Section heading */}
              <h4 className="text-lg font-semibold text-white mb-4">
                Get In Touch
              </h4>
              {/* Container with vertical spacing between contact items */}
              <div className="space-y-3">
                {/* Email contact information */}
                <p className="text-gray-400">
                  {/* Label in white color */}
                  <span className="text-white">Email:</span><br />
                  {/* Email address on new line */}
                  apostolisbletsas14@gmail.com
                </p>
                {/* Location information */}
                <p className="text-gray-400">
                  <span className="text-white">Location:</span><br />
                  Greece
                </p>
                {/* Availability status */}
                <p className="text-gray-400">
                  <span className="text-white">Available:</span><br />
                  Open to opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Back to Top */}
        {/* Border on top separates from main footer content */}
        <div className="border-t border-dark-700 dark:border-gray-700 py-6">
          {/* Flex container that stacks on mobile, side-by-side on desktop */}
          {/* justify-between pushes items to opposite ends */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright Notice */}
            <motion.div
              // Start invisible
              initial={{ opacity: 0 }}
              // Fade in when visible
              whileInView={{ opacity: 1 }}
              // Animation takes 0.6 seconds
              transition={{ duration: 0.6 }}
              // Animation only happens once
              viewport={{ once: true }}
              // Center text on mobile, left-aligned on desktop
              className="text-center md:text-left"
            >
              {/* Copyright text with current year */}
              <p className="text-gray-400 mb-1">
                {/* Display copyright symbol, year, and name */}
                © {currentYear} Apostolos Bletsas.
              </p>
              {/* Tagline with coffee icon */}
              {/* flex centers items horizontally */}
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <span>Made with the help of some</span>
                {/* Coffee cup icon in amber/brown color */}
                <FaCoffee className="w-4 h-4 text-amber-500" />
                {/* Period at the end */}
                <span>.</span>
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              // Start invisible and scaled down
              initial={{ opacity: 0, scale: 0.8 }}
              // Animate to visible and full size when scrolled into view
              whileInView={{ opacity: 1, scale: 1 }}
              // Animation takes 0.6 seconds with 0.2s delay
              transition={{ duration: 0.6, delay: 0.2 }}
              // Animation only happens once
              viewport={{ once: true }}
              // Scale up and move up slightly on hover
              whileHover={{ scale: 1.1, y: -2 }}
              // Scale down when clicked
              whileTap={{ scale: 0.9 }}
              // When clicked, scroll to top of page
              onClick={scrollToTop}
              // Primary colored button with icon and text
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              // Accessibility label for screen readers
              aria-label="Back to top"
            >
              {/* Up arrow icon */}
              <FaArrowUp className="w-4 h-4" />
              {/* Button text */}
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Export component so it can be imported and used in other files
export default Footer
