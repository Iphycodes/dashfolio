// src/components/projects/lib/project-grid.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Code, Link } from 'iconsax-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  featured: boolean;
  year: string;
  color: string;
}

interface ProjectGridProps {
  projects: Project[];
  activeFilter: string;
  isMobile?: boolean;
  isTablet?: boolean;
}

const ProjectCard = ({
  project,
  hoveredId,
  setHoveredId,
}: {
  project: Project;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}) => {
  return (
    <motion.div layout className="group relative">
      <motion.div
        className="rounded-xl overflow-hidden border border-neutral-800/20 bg-neutral-900/5 dark:bg-neutral-800/10"
        whileHover={{ y: -5 }}
        onHoverStart={() => setHoveredId(project.id)}
        onHoverEnd={() => setHoveredId(null)}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay with Links */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Link size={20} className="dark:text-white " />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Code size={20} className="text-white" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: `${project.color}20`, color: project.color }}
              >
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectGrid = ({ projects, activeFilter, isMobile, isTablet }: ProjectGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category.toLowerCase().includes(activeFilter)
  );

  return (
    <div
      className={`grid gap-6 ${
        isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
      }`}
    >
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} hoveredId={hoveredId} setHoveredId={setHoveredId} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
