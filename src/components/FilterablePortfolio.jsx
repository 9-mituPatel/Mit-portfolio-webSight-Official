import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FilterablePortfolio = ({ projects, categories }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  const filterVariants = {
    inactive: {
      scale: 1,
      backgroundColor: 'hsl(var(--secondary))'
    },
    active: {
      scale: 1.05,
      backgroundColor: 'hsl(var(--primary))'
    }
  };

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          variants={filterVariants}
          animate={activeFilter === 'all' ? 'active' : 'inactive'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className="relative overflow-hidden"
          >
            All Projects
            {activeFilter === 'all' && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                layoutId="activeFilter"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
          </Button>
        </motion.div>
        
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={filterVariants}
            animate={activeFilter === category.id ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeFilter === category.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category.id)}
              className="relative overflow-hidden"
            >
              {category.name}
              {activeFilter === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  layoutId="activeFilter"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        animate="visible"
        initial="hidden"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="group"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      Live Demo
                    </Button>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FilterablePortfolio;

