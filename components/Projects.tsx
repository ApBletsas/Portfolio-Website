'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaPython, FaJava, FaPhp, FaBrain } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, featuring dark mode, smooth animations with Framer Motion, and a clean design using Tailwind CSS.',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/ApBletsas/Portfolio-Website',
      live: '#',
      category: 'Frontend',
      icon: FaCode,
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

  const categories = ['All', 'Frontend', 'Full Stack', 'Python', 'AI/ML', 'Mobile', 'Java']

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in web development, machine learning, 
            and software engineering across different technologies and domains.
          </p>
        </motion.div>

        {/* Project Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-200 border ${
                activeCategory === category
                  ? 'bg-[#335c67] dark:bg-[#75a5ad] text-white dark:text-[#0f1417] border-[#335c67] dark:border-[#75a5ad]'
                  : 'bg-white dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 hover:bg-[#E09F3E] hover:text-white dark:hover:bg-[#F4B963] dark:hover:text-[#0f1417] border-gray-200 dark:border-[#3a3a3a]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-[#335c67] to-[#2a4a53] dark:from-[#75a5ad] dark:to-[#478791] flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[#335c67] dark:text-[#F4B963]">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[#335c67] dark:group-hover:text-[#FFF3B0] transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#FFF3B0]/30 dark:bg-[#335c67]/30 text-[#0f1417] dark:text-[#FFFBF5] text-xs rounded-full border border-[#E09F3E]/30 dark:border-[#75a5ad]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#335c67] hover:bg-[#2a4a53] dark:bg-[#75a5ad] dark:hover:bg-[#478791] text-white dark:text-[#0f1417] rounded-lg transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#E09F3E] hover:bg-[#c78a35] dark:bg-[#F4B963] dark:hover:bg-[#E09F3E] text-white dark:text-[#0f1417] rounded-lg transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ApBletsas?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#E09F3E] to-[#9E2A2B] dark:from-[#F4B963] dark:to-[#C14445] text-white rounded-lg hover:shadow-xl transition-all duration-200 font-medium"
          >
            <FaGithub className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects