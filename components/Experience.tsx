'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      id: 1,
      title: 'Head Bartender',
      company: 'Liquid Beach Bar',
      location: 'Kaválla, Eastern Macedonia and Thrace, Greece',
      period: 'May 2025 - September 2025',
      type: 'work',
      description: 'As Head Bartender, I led a team in delivering high-quality service in a fast-paced hospitality environment. I oversaw daily bar operations, managed inventory, and ensured an exceptional guest experience through strong leadership and attention to detail.',
      achievements: [
        'Led team operations in high-pressure hospitality environment',
        'Managed inventory and daily bar operations efficiently',
        'Enhanced team management and communication skills',
        'Developed strong organizational and customer service abilities',
        'Balanced leadership with hands-on service delivery'
      ],
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

  const certifications = [
    {
      name: 'ChatGPT Prompt Engineering for Developers',
      issuer: 'DeepLearning.AI',
      date: '2024',
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

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume file
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You would need to add this file to the public folder
    link.download = 'Apostolos_Bletsas_Resume.pdf'
    link.click()
  }

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my expertise 
            in software development and technology.
          </p>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            <FaDownload className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8"
            >
              Professional Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.filter(exp => exp.type === 'work').map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < experiences.filter(exp => exp.type === 'work').length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300 dark:bg-dark-600"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white">
                      <FaBriefcase className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="card p-6 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {experience.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                            <FaCalendarAlt className="w-4 h-4" />
                            {experience.period}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mb-3">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          {experience.company}, {experience.location}
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {experience.description}
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
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
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Education
              </h3>
              
              {experiences.filter(exp => exp.type === 'education').map((education, index) => (
                <motion.div
                  key={education.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="flex gap-6 mb-8"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="card p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                          {education.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                          <FaCalendarAlt className="w-4 h-4" />
                          {education.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mb-3">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        {education.company}, {education.location}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {education.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {education.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
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

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="sticky top-24"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="card p-4 hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                      {cert.issuer}
                    </p>
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

export default Experience
