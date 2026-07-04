"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
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
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/data/portfolio";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";

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
    <div className="relative w-full h-full overflow-hidden bg-surface group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <Skeleton className="w-full h-full bg-bg" />
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
          <Image
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
            onLoad={() => setIsLoading(false)}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent opacity-60" />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-bg/50 text-ink border border-border hover:bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 rounded-full"
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-bg/50 text-ink border border-border hover:bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 rounded-full"
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
                  index === currentIndex ? "bg-accent w-4" : "bg-ink-muted/40 hover:bg-ink-muted/60"
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
    <div className="relative w-full h-full min-h-[500px] bg-surface rounded-lg overflow-hidden border border-border">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 rounded-full border-2 border-border border-t-accent animate-spin" />
            <p className="text-sm text-ink-muted">Loading document...</p>
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
      className="relative w-full h-full min-h-[500px] overflow-hidden rounded-lg border border-border bg-surface"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 rounded-full border-2 border-border border-t-accent animate-spin" />
            <p className="text-sm text-ink-muted">
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
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm flex flex-col gap-4 items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded hover:opacity-90 transition-opacity"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Website
            </motion.a>
            {personalProject === false && (
              <p className="text-sm text-ink-muted max-w-xs text-center px-4">
                Note: This is a professional project representation.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "live" | "doc">(
    "images"
  );

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab("images");
  }, [selectedProject]);

  return (
    <section
      className="py-20 relative z-10"
      id="projects"
    >
      <div className="mb-16 border-t border-border pt-6">
        <p className="text-sm text-ink-muted uppercase tracking-wide mb-3">03 / Work</p>
        <h2 className="font-serif text-3xl md:text-5xl text-ink tracking-tight">
          Selected Projects
        </h2>
      </div>

      <div className="border-t border-border">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <motion.button
              key={project.id}
              layoutId={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "w-full text-left py-10 border-b border-border group flex flex-col md:flex-row gap-4 md:gap-10 items-start",
                reversed && "md:flex-row-reverse"
              )}
            >
              <div className="flex items-center gap-3 md:contents">
                <span className={cn(
                  "text-sm text-ink-muted shrink-0 md:w-16",
                  reversed && "md:text-right"
                )}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="w-16 h-16 md:w-40 md:h-24 shrink-0 rounded overflow-hidden relative border border-border">
                  {project.image.length > 0 ? (
                    <Image
                      src={project.image[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 64px, 160px"
                      className="object-cover"
                    />
                  ) : (
                    <ProjectPlaceholder name={project.name} compact />
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-xl md:text-2xl text-ink group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-ink-muted -rotate-45 group-hover:rotate-0 group-hover:text-accent transition-transform shrink-0" />
                </div>
                <p className="text-xs text-accent mb-3">
                  {project.skillsUsed.join(" · ")}
                </p>
                <p className="text-ink-muted text-sm md:text-base leading-relaxed max-w-2xl line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Modal / Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 100 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              className="w-full max-w-6xl max-h-[90vh] bg-surface rounded-2xl shadow-2xl overflow-hidden border border-border relative z-10 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-50 rounded-full bg-bg/70 text-ink border border-border hover:bg-bg transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Left Panel - Media (Slideshow/Preview) */}
              <div className="w-full md:w-[55%] h-[300px] md:h-auto bg-bg relative flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                  {activeTab === "images" && (
                    selectedProject.image.length > 0 ? (
                      <ImageCarousel images={selectedProject.image} />
                    ) : (
                      <ProjectPlaceholder name={selectedProject.name} />
                    )
                  )}
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
                <div className="flex items-center justify-center gap-2 p-4 bg-surface border-t border-border">
                  <Button
                    variant={activeTab === "images" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("images")}
                    className={cn("rounded text-xs", activeTab === "images" ? "bg-accent text-bg hover:opacity-90" : "text-ink-muted")}
                  >
                    Images
                  </Button>
                  {selectedProject.link && (
                    <Button
                      variant={activeTab === "live" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("live")}
                      className={cn("rounded text-xs", activeTab === "live" ? "bg-accent text-bg hover:opacity-90" : "text-ink-muted")}
                    >
                      Live Preview
                    </Button>
                  )}
                  {selectedProject.projectDoc && (
                    <Button
                      variant={activeTab === "doc" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("doc")}
                      className={cn("rounded text-xs", activeTab === "doc" ? "bg-accent text-bg hover:opacity-90" : "text-ink-muted")}
                    >
                      Review Doc
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Panel - Details */}
              <div className="w-full md:w-[45%] p-6 md:p-10 overflow-y-auto bg-surface border-l border-border min-h-[400px]">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-serif text-3xl text-ink">{selectedProject.title}</h2>
                      {selectedProject.personalProject === false && (
                        <Badge variant="outline" className="border-accent/50 text-accent">Client Project</Badge>
                      )}
                    </div>
                    <p className="text-accent font-medium text-lg">{selectedProject.name}</p>
                  </div>

                  <div className="flex gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        className="px-4 py-2 rounded bg-bg text-ink-muted hover:text-ink transition-colors flex items-center gap-2 text-sm font-medium border border-border"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        className="px-4 py-2 rounded bg-accent text-bg hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-semibold"
                      >
                        <Globe className="w-4 h-4" /> Live Site
                      </a>
                    )}
                  </div>

                  <div className="prose prose-sm">
                    <h3 className="text-ink font-semibold mb-2">About The Project</h3>
                    <p className="text-ink-muted leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-ink font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skillsUsed.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-bg text-ink-muted border border-border">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border text-xs">
                    {selectedProject.duration && (
                      <div className="space-y-1">
                        <p className="text-ink-muted uppercase tracking-wider">Duration</p>
                        <p className="text-ink flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> {selectedProject.duration}</p>
                      </div>
                    )}
                    <div className="space-y-1">
                      <p className="text-ink-muted uppercase tracking-wider">Status</p>
                      <p className="text-ink flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> {selectedProject.status}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-ink-muted uppercase tracking-wider">Level</p>
                      <p className="text-ink">{selectedProject.level}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-ink-muted uppercase tracking-wider">Platform</p>
                      <p className="text-ink flex items-center gap-2"><Server className="w-4 h-4 text-accent" /> {selectedProject.platform}</p>
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
