"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import {
  ArrowRight,
  X,
  Globe,
  Github,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle,
  Server,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/cn";
import MyData from "@/data/MyData";

// Enhanced carousel component with improved animations
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900/50 group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
          <Skeleton className="w-full h-full bg-slate-800" />
        </div>
      )}

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Project image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoading(false)}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60" />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white border border-white/10 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 rounded-full"
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white border border-white/10 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 rounded-full"
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// PDF Viewer component with loading state
const PDFViewer = ({ pdfURL }: { pdfURL: string }) => {
  const [loading, setLoading] = useState(true);
  const driveViewerUrl = pdfURL.split("view");

  return (
    <div className="relative w-full h-full min-h-[500px] bg-slate-900 rounded-lg overflow-hidden border border-white/10">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 rounded-full border-2 border-slate-700 border-t-amber-500 animate-spin" />
            <p className="text-sm text-slate-400">Loading document...</p>
          </div>
        </div>
      )}
      <iframe
        src={driveViewerUrl[0] + "/preview"}
        onLoad={() => setLoading(false)}
        width="100%"
        height="500px"
        className={cn(
          "width-full height-full",
          loading ? "opacity-0" : "opacity-100"
        )}
        allow="autoplay"
      />
    </div>
  );
};

// Live website preview component with animations
const LiveWebsitePreview = ({
  url,
  title,
  personalProject,
}: {
  url: string;
  title: string;
  personalProject?: boolean;
}) => {
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full min-h-[500px] overflow-hidden rounded-lg border border-white/10 bg-slate-900"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 rounded-full border-2 border-slate-700 border-t-amber-500 animate-spin" />
            <p className="text-sm text-slate-400">
              Loading preview...
            </p>
          </div>
        </div>
      )}

      <iframe
        src={url}
        title={title}
        onLoad={() => setLoading(false)}
        width="100%"
        height="100%"
        className={cn(
          "w-full h-full min-h-[500px]",
          loading ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Animated overlay on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col gap-4 items-center justify-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-slate-950 font-semibold rounded-full hover:bg-amber-400 transition-colors"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Website
            </motion.a>
            {personalProject != null && (
              <p className="text-sm text-slate-400 max-w-xs text-center px-4">
                Note: This is a professional project representation.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Project() {
  const Projects = MyData.projects;
  const [selectedProject, setSelectedProject] = useState<
    (typeof Projects)[0] | null
  >(null);
  const [activeTab, setActiveTab] = useState<"images" | "live" | "doc">(
    "images"
  );

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab("images");
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
      id="projects"
    >
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Portfolio
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Featured Work
        </h2>
        <p className="text-lg text-slate-400">
          A collection of projects that showcase my passion for building.
        </p>
      </div>

      {Projects?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 mb-4">
            No projects to display yet.
          </p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Projects.map((project, i) => (
            <motion.div
              key={project._id}
              layoutId={`project-card-${project._id}`}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="h-full flex flex-col bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300">

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="absolute inset-0 bg-slate-800 animate-pulse" /> {/* Placeholder */}
                  <img
                    src={project.image[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex gap-2">
                      {project.skillsUsed.slice(0, 2).map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-white backdrop-blur-md border border-white/10">
                          {skill}
                        </span>
                      ))}
                      {project.skillsUsed.length > 2 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-white backdrop-blur-md border border-white/10">
                          +{project.skillsUsed.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="p-1.5 rounded-full bg-white/5 text-slate-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-emerald-500/80">
                      {project.name}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="pt-4 flex items-center justify-between border-t border-white/5">
                    <Badge variant="outline" className="text-xs font-normal text-slate-500 border-slate-700">
                      {project.level}
                    </Badge>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); window.open(project.github, "_blank"); }}
                        className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); window.open(project.link, "_blank"); }}
                        className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                      >
                        <Globe className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Click handler overlay for the whole card */}
                <button
                  className="absolute inset-0 z-0 focus:outline-none"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Modal / Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 100 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              layoutId={`project-card-${selectedProject._id}`}
              className="w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 relative z-10 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-50 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 hover:bg-red-500/50 hover:border-red-500/50 transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Left Panel - Media (Slideshow/Preview) */}
              <div className="w-full md:w-[55%] h-[300px] md:h-auto bg-black relative flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                  {activeTab === "images" && <ImageCarousel images={selectedProject.image} />}
                  {activeTab === "live" && selectedProject.link && (
                    <LiveWebsitePreview
                      url={selectedProject.link}
                      title={selectedProject.title}
                      personalProject={selectedProject.personalProject}
                    />
                  )}
                  {activeTab === "doc" && selectedProject.projectDoc && (
                    <PDFViewer pdfURL={selectedProject.projectDoc} />
                  )}
                </div>

                {/* Media Tabs */}
                <div className="flex items-center justify-center gap-2 p-4 bg-slate-900 border-t border-slate-800">
                  <Button
                    variant={activeTab === "images" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("images")}
                    className={cn("rounded-full text-xs", activeTab === "images" ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400" : "text-slate-400")}
                  >
                    Images
                  </Button>
                  <Button
                    variant={activeTab === "live" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("live")}
                    className={cn("rounded-full text-xs", activeTab === "live" ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400" : "text-slate-400")}
                  >
                    Live Preview
                  </Button>
                  {selectedProject.projectDoc && (
                    <Button
                      variant={activeTab === "doc" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("doc")}
                      className={cn("rounded-full text-xs", activeTab === "doc" ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400" : "text-slate-400")}
                    >
                      Review Doc
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Panel - Details */}
              <div className="w-full md:w-[45%] p-6 md:p-10 overflow-y-auto bg-slate-900 border-l border-slate-800/50 min-h-[400px]">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                      {selectedProject.personalProject && (
                        <Badge variant="outline" className="border-amber-500/50 text-amber-500">Private</Badge>
                      )}
                    </div>
                    <p className="text-emerald-400 font-medium text-lg">{selectedProject.name}</p>
                  </div>

                  <div className="flex gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-medium border border-slate-700"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors flex items-center gap-2 text-sm font-semibold shadow-lg shadow-emerald-900/20"
                      >
                        <Globe className="w-4 h-4" /> Live Site
                      </a>
                    )}
                  </div>

                  <div className="prose prose-invert prose-sm">
                    <h3 className="text-slate-200 font-semibold mb-2">About The Project</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-slate-200 font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skillsUsed.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Duration</p>
                      <p className="text-slate-300 flex items-center gap-2"><Calendar className="w-4 h-4 text-emerald-500" /> {selectedProject.duration || "N/A"}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Status</p>
                      <p className="text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> {selectedProject.status || "Completed"}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Level</p>
                      <p className="text-slate-300">{selectedProject.level}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Platform</p>
                      <p className="text-slate-300 flex items-center gap-2"><Server className="w-4 h-4 text-emerald-500" /> {selectedProject.platform || "Web"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
