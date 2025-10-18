'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: '💻', label: '' },
    { number: 'BSc', label: 'Computer Science' },
    { number: '2', label: 'Languages Spoken' },
    { number: '5+', label: 'Certifications Earned' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Computer Science Graduate & Aspiring Developer
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                My name is Apostolos Bletsas and I Graduated from Democritus University of Thrace with a passion for 
                technology and a keen interest in Software Development and AI. I am a 
                hardworking person and I work great in a team.
              </p>
              
              <p>
                I am open to collaborations and opportunities that allow me to apply 
                and expand my knowledge. I am on a mission to transform my 
                academic expertise into a successful and fulfilling career in 
                software development.
              </p>
              
              <p>
                With experience in customer service, completed army service, and teaching, 
                I bring strong interpersonal skills and adaptability to every project. 
                My diverse background has taught me the importance of clear communication, 
                problem-solving, and delivering quality results under pressure.
              </p>
            </div>

            {/* Key Values */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                What I Value
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Clean Code',
                  'User Experience',
                  'Problem Solving',
                  'Continuous Learning',
                  'Team Collaboration',
                  'Quality Assurance'
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    {value}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats and Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 card hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="card p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Beyond Coding
              </h4>
              <div className="space-y-3">
                {[
                  { icon: '-', text: 'Traveling and exploring new places' },
                  { icon: '-', text: 'Running and staying active' },
                  { icon: '-', text: 'Gaming and problem-solving' },
                  { icon: '-', text: 'Coffee brewing and tasting' },
                  { icon: '-', text: 'Exploring new technology and gadgets' }
                ].map((interest, index) => (
                  <motion.div
                    key={interest.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-xl">{interest.icon}</span>
                    <span>{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
