'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker, 
  FaDatabase,
  FaMobile,
  FaCode,
  FaServer,
  FaPalette,
  FaCog,
  FaBrain,
  FaRobot
} from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiOpencv, SiPhp, SiMysql, SiTypescript, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FaPalette,
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-gray-200' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'Tailwind CSS', icon: FaPalette, color: 'text-cyan-500' },
        { name: 'HTML5/CSS3', icon: FaCode, color: 'text-orange-500' },
        { name: 'Framer Motion', icon: FaCode, color: 'text-purple-500' },
        { name: 'Responsive Design', icon: FaPalette, color: 'text-pink-500' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: FaServer,
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-yellow-600' },
        { name: 'PHP', icon: SiPhp, color: 'text-purple-600' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'REST APIs', icon: FaServer, color: 'text-blue-600' },
        { name: 'Database Design', icon: FaDatabase, color: 'text-orange-500' },
        { name: 'Server Management', icon: FaServer, color: 'text-gray-600' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: FaDatabase,
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
        { name: 'SQL', icon: FaDatabase, color: 'text-orange-600' },
        { name: 'Database Management', icon: FaDatabase, color: 'text-green-600' },
        { name: 'Data Modeling', icon: FaDatabase, color: 'text-indigo-500' },
        { name: 'Query Optimization', icon: FaCog, color: 'text-purple-500' }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: FaBrain,
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-yellow-600' },
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
        { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
        { name: 'OpenCV', icon: SiOpencv, color: 'text-blue-600' },
        { name: 'Machine Learning', icon: FaBrain, color: 'text-purple-600' },
        { name: 'Neural Networks', icon: FaRobot, color: 'text-pink-500' },
        { name: 'Computer Vision', icon: SiOpencv, color: 'text-green-600' },
        { name: 'Time Series Analysis', icon: FaBrain, color: 'text-indigo-500' },
        { name: 'Algorithm Design', icon: FaCode, color: 'text-cyan-600' }
      ]
    },
    devops: {
      title: 'DevOps & Tools',
      icon: FaCog,
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
        { name: 'GitHub', icon: FaGitAlt, color: 'text-gray-800 dark:text-gray-200' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
        { name: 'CI/CD', icon: FaCog, color: 'text-green-500' },
        { name: 'Linux', icon: FaServer, color: 'text-yellow-600' },
        { name: 'VS Code', icon: FaCode, color: 'text-blue-400' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: FaMobile,
      skills: [
        { name: 'React Native', icon: FaMobile, color: 'text-blue-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Mobile UI/UX', icon: FaPalette, color: 'text-pink-500' },
        { name: 'Cross-Platform Development', icon: FaMobile, color: 'text-purple-500' }
      ]
    }
  }

  const tools = [
    { name: 'VS Code', category: 'IDE' },
    { name: 'Git', category: 'Version Control' },
    { name: 'GitHub', category: 'Version Control' },
    { name: 'Postman', category: 'API Testing' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Figma', category: 'Design' },
    { name: 'Jupyter Notebook', category: 'Data Science' },
    { name: 'PyCharm', category: 'IDE' },
    { name: 'npm/yarn', category: 'Package Manager' },
    { name: 'ESLint', category: 'Code Quality' },
    { name: 'Prettier', category: 'Code Quality' }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use 
            to build exceptional software solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-[#335c67] dark:bg-[#75a5ad] text-white dark:text-[#0f1417] shadow-lg'
                  : 'bg-white dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 hover:bg-[#E09F3E] hover:text-white dark:hover:bg-[#F4B963] dark:hover:text-[#0f1417]'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-gray-100 dark:bg-[#1f1f1f] group-hover:bg-white dark:group-hover:bg-[#3a3a3a] transition-colors duration-200`}>
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-8">
            Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="card p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {tool.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-8">
            Additional Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#335c67]/20 dark:bg-[#75a5ad]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-[#335c67] dark:text-[#75a5ad]" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Problem Solving
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Algorithm design, optimization techniques, and creative solutions to complex challenges
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#335c67]/20 dark:bg-[#75a5ad]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPalette className="w-8 h-8 text-[#335c67] dark:text-[#75a5ad]" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                UI/UX Design
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                User-centered design, responsive layouts, accessibility, and modern design principles
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#335c67]/20 dark:bg-[#75a5ad]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="w-8 h-8 text-[#335c67] dark:text-[#75a5ad]" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Research & Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Continuous learning, staying updated with latest technologies, and implementing best practices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
