'use client'

// Import motion components from framer-motion for animations
import { motion } from 'framer-motion'
// Import useInView hook to detect when element is visible on screen
import { useInView } from 'framer-motion'
// Import useRef hook for creating DOM references
import { useRef } from 'react'
// Import icons from react-icons library for visual elements
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

// Main Experience component - displays work experience, education, and certifications
const Experience = () => {
  // Create a reference to the section element for scroll detection
  const ref = useRef(null)
  // Check if the section is visible on screen (with -100px margin for early trigger)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Array of all experience and education entries
  const experiences = [
    {
      // Unique identifier for this experience
      id: 1,
      // Job title or position name
      title: 'Head Bartender',
      // Company or organization name
      company: 'Liquid Beach Bar',
      // Physical location of the job
      location: 'Kaválla, Eastern Macedonia and Thrace, Greece',
      // Time period worked (start date - end date)
      period: 'May 2025 - September 2025',
      // Type of entry: 'work' for job experience, 'education' for academic
      type: 'work',
      // Brief description of the role and responsibilities
      description: 'As Head Bartender, I led a team in delivering high-quality service in a fast-paced hospitality environment. I oversaw daily bar operations, managed inventory, and ensured an exceptional guest experience through strong leadership and attention to detail.',
      // Array of key achievements and accomplishments in this role
      achievements: [
        'Led team operations in high-pressure hospitality environment',
        'Managed inventory and daily bar operations efficiently',
        'Enhanced team management and communication skills',
        'Developed strong organizational and customer service abilities',
        'Balanced leadership with hands-on service delivery'
      ],
      // Array of skills and technologies used (displayed as badges)
      technologies: ['Team Leadership', 'Customer Service', 'Inventory Management', 'Operations', 'Communication']
    },
    {
      id: 2,
      title: 'Teacher',
      company: 'Ministry of Education, Lifelong Learning and Religious Affairs',
      location: 'Tríkala, Thessalia, Greece',
      period: 'September 2024 - November 2024',
      type: 'work',
      description: 'Taught programming fundamentals to students, guiding them through projects and interactive lessons to build coding skills and computational thinking.',
      achievements: [
        'Designed and delivered engaging programming lessons for children',
        'Fostered curiosity, problem-solving, and creativity in programming',
        'Supported students in understanding coding concepts and debugging',
        'Developed skills in communication, mentorship, and curriculum planning',
        'Strengthened ability to teach complex concepts clearly and adapt to different learning styles'
      ],
      technologies: ['Teaching', 'Programming', 'Mentorship', 'Curriculum Design', 'Communication']
    },
    {
      id: 3,
      title: 'Sales Employee',
      company: 'To Kati Allo',
      location: 'Kaválla, Eastern Macedonia and Thrace, Greece',
      period: 'February 2023 - October 2023',
      type: 'work',
      description: 'Managed customer orders through multiple food delivery platforms (efood, Wolt, Box) and provided excellent customer service.',
      achievements: [
        'Managed customer orders through multiple food delivery platforms',
        'Provided excellent customer service and support',
        'Worked with efood, Wolt, and Box delivery systems',
        'Developed strong customer service and communication skills',
        'Handled multiple tasks efficiently in fast-paced environment'
      ],
      technologies: ['Customer Service', 'Order Management', 'Multi-platform Systems', 'Communication']
    },
    {
      id: 4,
      title: 'Food Server',
      company: 'Barbanikolas',
      location: 'Kaválla, Eastern Macedonia and Thrace, Greece',
      period: 'December 2021 - November 2022',
      type: 'work',
      description: 'Provided food service and customer support in a restaurant environment, developing strong interpersonal and time management skills.',
      achievements: [
        'Delivered excellent food service to customers',
        'Developed strong interpersonal and communication skills',
        'Managed time efficiently in busy restaurant environment',
        'Worked effectively as part of a team',
        'Maintained high standards of customer satisfaction'
      ],
      technologies: ['Customer Service', 'Time Management', 'Teamwork', 'Communication']
    },
    {
      id: 5,
      title: 'Marine',
      company: 'Hellenic Army / Special Forces',
      location: 'Vólos, Thessalia, Greece',
      period: 'January 2020 - October 2020',
      type: 'work',
      description: 'Served in the 521st Special Forces Marine Battalion as a Machine Gunner and Team Leader, developing strong leadership and decision-making skills.',
      achievements: [
        'Led a squad under high-intensity operations',
        'Developed strong leadership and decision-making abilities',
        'Learned true meaning of teamwork, resilience, and accountability',
        'Enhanced adaptability and problem-solving under pressure',
        'Cultivated discipline and professional approach to challenges'
      ],
      technologies: ['Leadership', 'Team Management', 'Decision Making', 'Problem Solving', 'Discipline']
    },
    {
      id: 6,
      title: 'Bachelor of Computer Science',
      company: 'Democritus University of Thrace (D.U.Th.)',
      location: 'Greece',
      period: 'June 2024 - January 2025',
      // Type is 'education' to separate from work experience
      type: 'education',
      description: 'Pursuing Bachelor\'s degree in Computer Science, focusing on software development, algorithms, and modern programming technologies.',
      achievements: [
        'Currently pursuing Computer Science degree',
        'Studying software development and programming fundamentals',
        'Learning algorithms and data structures',
        'Exploring modern web technologies and frameworks',
        'Building foundation for software development career'
      ],
      technologies: ['Computer Science', 'Programming', 'Algorithms', 'Data Structures', 'Software Development']
    },
    {
      id: 7,
      title: 'Bachelor of Computer Science',
      company: 'Obuda University - John von Neumann Faculty of Informatics',
      location: 'Hungary',
      period: 'February 2024 - June 2024',
      type: 'education',
      description: 'Studied Computer Science at Obuda University, gaining international experience and exposure to different educational approaches.',
      achievements: [
        'Gained international educational experience',
        'Studied Computer Science fundamentals',
        'Exposed to different teaching methodologies',
        'Developed cross-cultural communication skills',
        'Enhanced adaptability and learning capabilities'
      ],
      technologies: ['Computer Science', 'International Education', 'Programming', 'Algorithms']
    }
  ]

  // Array of professional certifications and courses completed
  const certifications = [
    {
      // Certificate or course name
      name: 'ChatGPT Prompt Engineering for Developers',
      // Organization that issued the certificate
      issuer: 'DeepLearning.AI',
      // Year completed
      date: '2024',
      // Credential ID or reference code
      credential: 'AI-PROMPT-2024'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2024',
      credential: 'RWD-2024'
    },
    {
      name: 'Evaluating and Debugging',
      issuer: 'DeepLearning.AI',
      date: '2024',
      credential: 'AI-DEBUG-2024'
    },
    {
      name: 'Generative AI',
      issuer: 'DeepLearning.AI',
      date: '2024',
      credential: 'AI-GEN-2024'
    },
    {
      name: 'Building Generative AI Applications with Gradio',
      issuer: 'DeepLearning.AI',
      date: '2024',
      credential: 'AI-GRADIO-2024'
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: '2024',
      credential: 'CYBER-INTRO-2024'
    }
  ]

  // Function to download the resume PDF file
  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a')
    // Set the file path (file must be in public folder)
    link.href = '/Apostolos_Bletsas_CV.pdf' 
    // Set the download filename
    link.download = 'Apostolos_Bletsas_CV.pdf'
    // Programmatically click the link to trigger download
    link.click()
  }

  return (
    // Main section element with id for navigation, padding, and background colors
    <section id="experience" className="section-padding bg-white dark:bg-dark-800">
      {/* Container that centers content and adds max width */}
      <div className="container-custom">
        {/* Section header with fade-in animation */}
        <motion.div
          // Attach ref for scroll detection
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
            Experience & Education
          </h2>
          {/* Decorative line under heading */}
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          {/* Section description text */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my expertise 
            in software development and technology.
          </p>
        </motion.div>

        {/* Download Resume Button Section */}
        <motion.div
          // Start invisible and moved down 20px
          initial={{ opacity: 0, y: 20 }}
          // Animate to visible when section is in view
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          // Animation takes 0.6 seconds with 0.2s delay
          transition={{ duration: 0.6, delay: 0.2 }}
          // Center the button
          className="text-center mb-12"
        >
          {/* Download button with hover animations */}
          <motion.button
            // Scale up slightly on hover
            whileHover={{ scale: 1.05 }}
            // Scale down slightly when clicked
            whileTap={{ scale: 0.95 }}
            // Call downloadResume function when clicked
            onClick={downloadResume}
            // Button styling with icon and text
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            {/* Download icon */}
            <FaDownload className="w-5 h-5" />
            {/* Button text */}
            Download Resume
          </motion.button>
        </motion.div>

        {/* Two-column layout: experience timeline (2/3 width) and certifications sidebar (1/3 width) */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline - takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Professional Experience heading */}
            <motion.h3
              // Start invisible and moved 20px to the left
              initial={{ opacity: 0, x: -20 }}
              // Animate to visible when in view
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              // Animation takes 0.6 seconds with 0.4s delay
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8"
            >
              Professional Experience
            </motion.h3>

            {/* Container for work experience cards with vertical spacing */}
            <div className="space-y-8">
              {/* Filter experiences to only show work entries, then map over them */}
              {experiences.filter(exp => exp.type === 'work').map((experience, index) => (
                <motion.div
                  // Use experience ID as unique key
                  key={experience.id}
                  // Start invisible and moved down 30px
                  initial={{ opacity: 0, y: 30 }}
                  // Animate to visible when in view
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  // Stagger animation based on index position
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  // Position relative for timeline line positioning
                  className="relative"
                >
                  {/* Timeline connecting line - only show if not the last item */}
                  {index < experiences.filter(exp => exp.type === 'work').length - 1 && (
                    // Vertical line positioned absolutely below the icon
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300 dark:bg-dark-600"></div>
                  )}
                  
                  {/* Flex container: icon on left, content on right */}
                  <div className="flex gap-6">
                    {/* Timeline Icon - briefcase icon in a circle */}
                    {/* flex-shrink-0 prevents icon from shrinking */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white">
                      <FaBriefcase className="w-6 h-6" />
                    </div>
                    
                    {/* Content section - takes remaining space */}
                    <div className="flex-1">
                      {/* Card container with hover effect */}
                      <div className="card p-6 hover:shadow-xl transition-all duration-300">
                        {/* Header row: title on left, date on right */}
                        {/* Stacks vertically on small screens, side-by-side on larger screens */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          {/* Job title */}
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {experience.title}
                          </h4>
                          {/* Date range with calendar icon */}
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                            <FaCalendarAlt className="w-4 h-4" />
                            {experience.period}
                          </div>
                        </div>
                        
                        {/* Company and location with map marker icon */}
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mb-3">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          {experience.company}, {experience.location}
                        </div>
                        
                        {/* Job description paragraph */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {experience.description}
                        </p>
                        
                        {/* Key achievements section */}
                        <div className="mb-4">
                          {/* Achievements subheading */}
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Key Achievements:
                          </h5>
                          {/* Unordered list with bullet points */}
                          <ul className="space-y-1">
                            {/* Map over achievements array to create list items */}
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                {/* Custom bullet point (colored circle) */}
                                {/* mt-2 aligns bullet with first line of text */}
                                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                {/* Achievement text */}
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Technologies/Skills badges */}
                        {/* flex-wrap allows badges to wrap to next line if needed */}
                        <div className="flex flex-wrap gap-2">
                          {/* Map over technologies array to create badges */}
                          {experience.technologies.map((tech) => (
                            <span
                              // Use technology name as unique key
                              key={tech}
                              // Small rounded pill-shaped badge
                              className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                            >
                              {/* Technology name */}
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Section - shown after work experience */}
            <motion.div
              // Start invisible and moved down 30px
              initial={{ opacity: 0, y: 30 }}
              // Animate to visible when in view
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              // Animation starts after work experience items (1s delay)
              transition={{ duration: 0.6, delay: 1 }}
              // Add top margin to separate from work experience
              className="mt-16"
            >
              {/* Education section heading */}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Education
              </h3>
              
              {/* Filter experiences to only show education entries, then map over them */}
              {experiences.filter(exp => exp.type === 'education').map((education, index) => (
                <motion.div
                  // Use education ID as unique key
                  key={education.id}
                  // Start invisible and moved down 30px
                  initial={{ opacity: 0, y: 30 }}
                  // Animate to visible when in view
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  // Stagger animation based on index (starts at 1.2s)
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  // Flex container with icon and content, bottom margin between entries
                  className="flex gap-6 mb-8"
                >
                  {/* Graduation cap icon in circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  
                  {/* Education entry content */}
                  <div className="flex-1">
                    {/* Card container with hover effect */}
                    <div className="card p-6 hover:shadow-xl transition-all duration-300">
                      {/* Header: degree title and date */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        {/* Degree title */}
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                          {education.title}
                        </h4>
                        {/* Date range with calendar icon */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                          <FaCalendarAlt className="w-4 h-4" />
                          {education.period}
                        </div>
                      </div>
                      
                      {/* University name and location with map marker icon */}
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mb-3">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        {education.company}, {education.location}
                      </div>
                      
                      {/* Education description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {education.description}
                      </p>
                      
                      {/* Achievements section */}
                      <div className="mb-4">
                        {/* Achievements subheading */}
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Achievements:
                        </h5>
                        {/* List of achievements */}
                        <ul className="space-y-1">
                          {/* Map over achievements to create list items */}
                          {education.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                              {/* Custom bullet point */}
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              {/* Achievement text */}
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Subject/Skills badges */}
                      <div className="flex flex-wrap gap-2">
                        {/* Map over technologies to create badges */}
                        {education.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Sidebar - takes 1 column */}
          <div className="lg:col-span-1">
            {/* Sticky positioning keeps sidebar visible while scrolling */}
            {/* top-24 provides spacing from top of viewport */}
            <motion.div
              // Start invisible and moved 50px to the right
              initial={{ opacity: 0, x: 50 }}
              // Animate to visible when in view
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              // Animation takes 0.6 seconds with 0.8s delay
              transition={{ duration: 0.6, delay: 0.8 }}
              className="sticky top-24"
            >
              {/* Certifications section heading */}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Certifications
              </h3>
              
              {/* Container for certification cards with vertical spacing */}
              <div className="space-y-4">
                {/* Map over certifications array to create cards */}
                {certifications.map((cert, index) => (
                  <motion.div
                    // Use certificate name as unique key
                    key={cert.name}
                    // Start invisible and moved down 20px
                    initial={{ opacity: 0, y: 20 }}
                    // Animate to visible when in view
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    // Stagger animation based on index (starts at 1s)
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    // Card with hover shadow effect
                    className="card p-4 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Certificate name */}
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {cert.name}
                    </h4>
                    {/* Issuing organization */}
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                      {cert.issuer}
                    </p>
                    {/* Date and credential ID */}
                    {/* • is a bullet point separator */}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.date} • {cert.credential}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Export component so it can be imported and used in other files
export default Experience
