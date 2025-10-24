'use client'

// Import motion components from framer-motion for animations
import { motion } from 'framer-motion'
// Import useInView hook to detect when element is visible on screen
import { useInView } from 'framer-motion'
// Import React hooks: useRef for DOM references, useState for state management
import { useRef, useState } from 'react'
// Import icons from react-icons library for visual elements
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaPython, FaJava, FaPhp, FaBrain } from 'react-icons/fa'

// Main Projects component - displays all project cards
const Projects = () => {
  // Create a reference to the section element for scroll detection
  const ref = useRef(null)
  // Check if the section is visible on screen (with -100px margin for early trigger)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  // State to track which category filter is currently active (default is 'All')
  const [activeCategory, setActiveCategory] = useState('All')

  // Array of all project data - each object represents one project
  const projects = [
    {
      // Unique identifier for this project
      id: 1,
      // Project name displayed as the card title
      title: 'Portfolio Website',
      // Brief description of what the project does
      description: 'A modern, responsive portfolio website built with Next.js, featuring dark mode, smooth animations with Framer Motion, and a clean design using Tailwind CSS.',
      // Array of technologies/tools used in this project
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      // URL to the GitHub repository
      github: 'https://github.com/ApBletsas/Portfolio-Website',
      // URL to live demo (# means no live demo available)
      live: '#',
      // Category for filtering projects
      category: 'Frontend',
      // Icon component to display for this project
      icon: FaCode,
      // Whether this project should be highlighted as featured
      featured: true
    },
    {
      id: 2,
      title: 'Tichu Point Counter App',
      description: 'A simple and intuitive point counter application for the Tichu card game, built with TypeScript for efficient score tracking and game management.',
      technologies: ['TypeScript', 'React'],
      github: 'https://github.com/ApBletsas/Tichu-point-counter-app',
      live: '#',
      category: 'Mobile',
      icon: FaMobile,
      featured: true
    },
    {
      id: 3,
      title: 'Ant Colony Path Finding Algorithm',
      description: 'Implementation of the Ant Colony Optimization algorithm for solving path finding problems, demonstrating swarm intelligence and optimization techniques.',
      technologies: ['Python', 'Algorithm Design'],
      github: 'https://github.com/ApBletsas/AntColony_Path_Finding_Algorithm',
      live: '#',
      category: 'AI/ML',
      icon: FaBrain,
      featured: true
    },
    {
      id: 4,
      title: 'Image Enhancement App',
      description: 'A Python application for image processing and enhancement, featuring various filters and transformation capabilities for improving image quality.',
      technologies: ['Python', 'OpenCV', 'Image Processing'],
      github: 'https://github.com/ApBletsas/ImageEnhancementApp',
      live: '#',
      category: 'Python',
      icon: FaPython,
      featured: false
    },
    {
      id: 5,
      title: 'Time Series Weather Forecasting',
      description: 'Machine learning project for weather prediction using time series analysis, implementing various forecasting models for accurate weather predictions.',
      technologies: ['Python', 'Machine Learning', 'Time Series'],
      github: 'https://github.com/ApBletsas/Time-Series-Prediction',
      live: '#',
      category: 'AI/ML',
      icon: FaBrain,
      featured: true
    },
    {
      id: 6,
      title: 'Ophthalmology Lab Management',
      description: 'A comprehensive application for managing ophthalmology laboratory operations, including patient records, test results, and appointment scheduling.',
      technologies: ['Python', 'Database Management'],
      github: 'https://github.com/ApBletsas/Opthalmology-Lab-Management-Application',
      live: '#',
      category: 'Python',
      icon: FaDatabase,
      featured: true
    },
    {
      id: 7,
      title: 'Online Game Website with Database',
      description: 'A full-stack web application featuring online games with database integration for user management, leaderboards, and game state persistence.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/Apbletsas/OnlineGame-Website-With-Database',
      live: '#',
      category: 'Full Stack',
      icon: FaPhp,
      featured: false
    },
    {
      id: 8,
      title: 'Unit Converter',
      description: 'A simple and efficient unit conversion application built in Java, supporting various unit types including length, weight, temperature, and more.',
      technologies: ['Java', 'Swing'],
      github: 'https://github.com/apostolosbletsas/Unit_Converter',
      live: '#',
      category: 'Java',
      icon: FaJava,
      featured: false
    }
  ]

  // Array of available category filters for the filter buttons
  const categories = ['All', 'Frontend', 'Full Stack', 'Python', 'AI/ML', 'Mobile', 'Java']

  // Filter projects based on active category
  // If 'All' is selected, show all projects
  // Otherwise, only show projects that match the selected category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    // Main section element with id for navigation, padding, and background colors
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-900">
      {/* Container that centers content and adds max width */}
      <div className="container-custom">
        {/* Section header with fade-in animation */}
        <motion.div
          // Attach the ref for scroll detection
          ref={ref}
          // Start invisible and moved down 50px
          initial={{ opacity: 0, y: 50 }}
          // Animate to visible and normal position when in view
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          // Animation takes 0.8 seconds
          transition={{ duration: 0.8 }}
          // Center text and add bottom margin
          className="text-center mb-16"
        >
          {/* Main section heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          {/* Decorative line under heading */}
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          {/* Section description text */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in web development, machine learning, 
            and software engineering across different technologies and domains.
          </p>
        </motion.div>

        {/* Category filter buttons section */}
        <motion.div
          // Start invisible and moved down 20px
          initial={{ opacity: 0, y: 20 }}
          // Animate to visible when section is in view
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          // Animation takes 0.6 seconds with 0.2s delay
          transition={{ duration: 0.6, delay: 0.2 }}
          // Center buttons and allow wrapping on small screens
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {/* Loop through each category and create a button */}
          {categories.map((category) => (
            <motion.button
              // Unique key for React list rendering
              key={category}
              // When clicked, update the active category state
              onClick={() => setActiveCategory(category)}
              // Scale up slightly on hover
              whileHover={{ scale: 1.05 }}
              // Scale down slightly when clicked
              whileTap={{ scale: 0.95 }}
              // Dynamic classes based on whether this category is active
              // Active button gets primary colors, inactive gets neutral colors
              className={`px-6 py-2 rounded-full transition-all duration-200 border ${
                activeCategory === category
                  ? 'bg-[#335c67] dark:bg-[#75a5ad] text-white dark:text-[#0f1417] border-[#335c67] dark:border-[#75a5ad]'
                  : 'bg-white dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 hover:bg-[#E09F3E] hover:text-white dark:hover:bg-[#F4B963] dark:hover:text-[#0f1417] border-gray-200 dark:border-[#3a3a3a]'
              }`}
            >
              {/* Display category name */}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid - layout changes based on screen size */}
        {/* 1 column on mobile, 2 on tablet (md), 3 on desktop (lg) */}
        <motion.div 
          // Enable layout animations when items are added/removed
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Loop through filtered projects and create a card for each */}
          {filteredProjects.map((project, index) => (
            <motion.div
              // Unique key based on project ID
              key={project.id}
              // Enable smooth layout transitions
              layout
              // Start scaled down and invisible
              initial={{ opacity: 0, scale: 0.8 }}
              // Animate to full size and visible
              animate={{ opacity: 1, scale: 1 }}
              // When removed, scale down and fade out
              exit={{ opacity: 0, scale: 0.8 }}
              // Stagger animation based on index (each card delays slightly more)
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Group class allows child elements to respond to hover on parent
              className="group"
            >
              {/* Project card container - uses flexbox to keep content aligned */}
              {/* h-full makes all cards same height in their row */}
              <div className="card overflow-hidden h-full hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Project icon/image section */}
                <div className="relative overflow-hidden">
                  {/* Colored background box with fixed height */}
                  <div className="w-full h-48 bg-gradient-to-br from-[#335c67] to-[#2a4a53] dark:from-[#75a5ad] dark:to-[#478791] flex items-center justify-center">
                    {/* Display project icon in center */}
                    <project.icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                  {/* Dark overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Project content section - flex-grow makes it fill available space */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category label and featured badge row */}
                  <div className="flex items-center justify-between mb-3">
                    {/* Display project category */}
                    <span className="text-sm font-medium text-[#335c67] dark:text-[#F4B963]">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Project title - changes color on hover */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[#335c67] dark:group-hover:text-[#FFF3B0] transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  {/* Project description - flex-grow pushes other content down */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies section - min-height keeps alignment across cards */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[60px]">
                    {/* Loop through each technology and create a badge */}
                    {project.technologies.map((tech) => (
                      <span
                        // Use technology name as key
                        key={tech}
                        // Pill-shaped badge with border and background
                        // h-fit prevents badge from stretching vertically
                        className="px-3 py-1 bg-[#FFF3B0]/30 dark:bg-[#335c67]/30 text-[#0f1417] dark:text-[#FFFBF5] text-xs rounded-full border border-[#E09F3E]/30 dark:border-[#75a5ad]/30 h-fit"
                      >
                        {/* Display technology name */}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons - mt-auto pushes to bottom of card */}
                  <div className="flex gap-3 mt-auto">
                    {/* GitHub repository link button */}
                    <motion.a
                      // Scale up on hover
                      whileHover={{ scale: 1.05 }}
                      // Scale down when clicked
                      whileTap={{ scale: 0.95 }}
                      // Link to GitHub repository
                      href={project.github}
                      // Open in new tab
                      target="_blank"
                      // Security attribute for external links
                      rel="noopener noreferrer"
                      // flex-1 makes button take equal width, flex centers content
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#335c67] hover:bg-[#2a4a53] dark:bg-[#75a5ad] dark:hover:bg-[#478791] text-white dark:text-[#0f1417] rounded-lg transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                    >
                      {/* GitHub icon */}
                      <FaGithub className="w-4 h-4" />
                      {/* Button text */}
                      Code
                    </motion.a>
                    {/* Only show Live Demo button if project has a live URL (not '#') */}
                    {project.live !== '#' && (
                      <motion.a
                        // Scale up on hover
                        whileHover={{ scale: 1.05 }}
                        // Scale down when clicked
                        whileTap={{ scale: 0.95 }}
                        // Link to live demo
                        href={project.live}
                        // Open in new tab
                        target="_blank"
                        // Security attribute for external links
                        rel="noopener noreferrer"
                        // flex-1 makes button take equal width
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#E09F3E] hover:bg-[#c78a35] dark:bg-[#F4B963] dark:hover:bg-[#E09F3E] text-white dark:text-[#0f1417] rounded-lg transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                      >
                        {/* External link icon */}
                        <FaExternalLinkAlt className="w-4 h-4" />
                        {/* Button text */}
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message when no projects match the filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            // Start invisible and moved down
            initial={{ opacity: 0, y: 20 }}
            // Fade in and move to normal position
            animate={{ opacity: 1, y: 0 }}
            // Center text and add padding
            className="text-center py-12"
          >
            {/* Empty state message */}
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Link to view more projects on GitHub */}
        <motion.div
          // Start invisible and moved down
          initial={{ opacity: 0, y: 20 }}
          // Animate when section comes into view
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          // Delay animation until after projects appear
          transition={{ duration: 0.6, delay: 0.8 }}
          // Center the button
          className="text-center mt-12"
        >
          {/* Link to GitHub repositories page */}
          <motion.a
            // Scale up on hover
            whileHover={{ scale: 1.05 }}
            // Scale down when clicked
            whileTap={{ scale: 0.95 }}
            // URL to GitHub profile repositories page
            href="https://github.com/ApBletsas?tab=repositories"
            // Open in new tab
            target="_blank"
            // Security attribute for external links
            rel="noopener noreferrer"
            // Gradient background button with icon and text
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#E09F3E] to-[#9E2A2B] dark:from-[#F4B963] dark:to-[#C14445] text-white rounded-lg hover:shadow-xl transition-all duration-200 font-medium"
          >
            {/* GitHub icon */}
            <FaGithub className="w-5 h-5" />
            {/* Button text */}
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Export component so it can be imported in other files
export default Projects