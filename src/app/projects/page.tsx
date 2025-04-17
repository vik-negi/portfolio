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
import { cn } from "@/lib/utils";
import MyData from "@/data/MyData";

// Mock data structure - replace with your actual data import
const MyDatadu = {
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      name: "ShopEase",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking. Built with React, Node.js, and MongoDB.",
      image: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      link: "https://example.com",
      github: "https://github.com/username/project",
      level: "Advanced",
      skillsUsed: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      projectDoc: null,
      duration: "3 months",
      status: "Completed",
      platform: "Vercel",
    },
    {
      id: "2",
      title: "Task Management App",
      name: "TaskFlow",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and progress tracking. Features include drag-and-drop task organization and priority management.",
      image: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      link: "https://example.com",
      github: "https://github.com/username/project",
      level: "Intermediate",
      skillsUsed: ["React", "Firebase", "Tailwind CSS", "Context API"],
      projectDoc: "https://drive.google.com/file/d/example/view",
      duration: "2 months",
      status: "Completed",
      platform: "Netlify",
    },
    {
      id: "3",
      title: "AI Content Generator",
      name: "ContentGenius",
      description:
        "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy based on user prompts and preferences.",
      image: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      link: "https://example.com",
      github: "https://github.com/username/project",
      level: "Advanced",
      skillsUsed: ["Next.js", "OpenAI API", "TypeScript", "Prisma"],
      projectDoc: null,
      duration: "4 months",
      status: "Completed",
      platform: "AWS",
    },
  ],
};

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
  }, []);

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <Skeleton className="w-full h-full" />
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
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Project image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoading(false)}
          />

          {/* Image overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-amber-500 w-4" : "bg-muted"
                )}
                onClick={() => {
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
    <div className="relative w-full h-full min-h-[500px]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-10 w-10 rounded-full border-4 border-muted border-t-amber-500 animate-spin" />
            <p className="text-sm text-muted-foreground">Loading document...</p>
          </div>
        </div>
      )}
      <iframe
        src={driveViewerUrl[0] + "/preview"}
        onLoad={() => setLoading(false)}
        width="100%"
        height="500px"
        className={cn(
          "rounded-lg border",
          loading ? "opacity-0" : "opacity-100"
        )}
        allow="autoplay"
      />
    </div>
  );
};

// Live website preview component with animations
const LiveWebsitePreview = ({ url, title }: { url: string; title: string }) => {
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full min-h-[500px] overflow-hidden rounded-lg border"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="flex flex-col items-center gap-2">
            <div className="h-10 w-10 rounded-full border-4 border-muted border-t-amber-500 animate-spin" />
            <p className="text-sm text-muted-foreground">
              Loading website preview...
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 rounded-full text-slate-900 font-medium"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Visit Live Website
            </motion.a>
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
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"images" | "live" | "doc">(
    "images"
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      className="py-16 md:py-24 lg:py-32 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative "
      id="projects"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <motion.div
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-amber-500/10 text-amber-400 border border-amber-500/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">
          My Recent Work
        </h2>
        <p className="text-lg text-slate-400">
          Here are a few past projects I've worked on. Want to see more?{" "}
          <a
            href="mailto:example@gmail.com"
            className="text-amber-400 hover:underline font-medium"
          >
            Email me
          </a>
        </p>
      </motion.div>

      {Projects?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            No projects to display yet.
          </p>
          <Button>Add Projects</Button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Projects.map((project, i) => (
            <motion.div
              key={project._id}
              layoutId={`project-card-${project._id}`}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Card className="h-full overflow-hidden border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/20">
                <div className="h-48 overflow-hidden">
                  <ImageCarousel images={project.image} />
                </div>
                <CardContent className="p-6">
                  <motion.div layout className="space-y-4">
                    <motion.h3
                      layout
                      className="text-xl font-semibold tracking-tight text-white"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p layout className="text-slate-400 line-clamp-3">
                      {project.description}
                    </motion.p>

                    <motion.div layout className="flex flex-wrap gap-2 pt-2">
                      {project.skillsUsed.slice(0, 3).map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-normal bg-slate-800 text-slate-200 hover:bg-slate-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {project.skillsUsed.length > 3 && (
                        <Badge
                          variant="outline"
                          className="font-normal text-slate-400 border-slate-700"
                        >
                          +{project.skillsUsed.length - 3}
                        </Badge>
                      )}
                    </motion.div>

                    <motion.div
                      layout
                      className="flex items-center justify-between pt-4"
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="group-hover:translate-x-1 transition-transform bg-amber-500 text-slate-900 hover:bg-amber-400"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <Globe className="h-5 w-5" />
                          <span className="sr-only">Website</span>
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-card-${selectedProject._id}`}
              className="w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col md:flex-row h-full max-h-[90vh]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 z-10 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-700"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="md:w-1/2 h-[300px] md:h-auto overflow-hidden bg-slate-800">
                  {/* Tabs for different content types */}
                  <div className="flex items-center justify-center gap-2 p-2 bg-slate-800/80 backdrop-blur-sm">
                    <Button
                      variant={activeTab === "images" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("images")}
                      className={`rounded-full ${
                        activeTab === "images"
                          ? "bg-amber-500 text-slate-900"
                          : "text-slate-300"
                      }`}
                    >
                      Images
                    </Button>
                    <Button
                      variant={activeTab === "live" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("live")}
                      className={`rounded-full ${
                        activeTab === "live"
                          ? "bg-amber-500 text-slate-900"
                          : "text-slate-300"
                      }`}
                    >
                      Live Preview
                    </Button>
                    {selectedProject.projectDoc && (
                      <Button
                        variant={activeTab === "doc" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setActiveTab("doc")}
                        className={`rounded-full ${
                          activeTab === "doc"
                            ? "bg-amber-500 text-slate-900"
                            : "text-slate-300"
                        }`}
                      >
                        Documentation
                      </Button>
                    )}
                  </div>

                  <div className="h-full">
                    {activeTab === "images" && (
                      <ImageCarousel images={selectedProject.image} />
                    )}
                    {activeTab === "live" && selectedProject.link && (
                      <LiveWebsitePreview
                        url={selectedProject.link}
                        title={selectedProject.title}
                      />
                    )}
                    {activeTab === "doc" && selectedProject.projectDoc && (
                      <PDFViewer pdfURL={selectedProject.projectDoc} />
                    )}
                  </div>
                </div>

                <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-white">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-medium text-amber-400">
                          {selectedProject.name}
                        </p>
                        <div className="flex items-center space-x-2">
                          <motion.a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </motion.a>
                          <motion.a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Website</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className="text-sm font-normal text-amber-400 border-amber-500/30"
                      >
                        {selectedProject.level} Level
                      </Badge>
                    </div>

                    <div className="prose prose-sm prose-invert  max-w-none text-slate-300">
                      <p className="text-[12px]">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 text-white">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.skillsUsed.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="font-normal bg-slate-800 text-slate-200 hover:bg-slate-700"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Calendar className="h-4 w-4 text-amber-400" />
                        <div>
                          <p className="text-sm font-medium text-white">
                            Duration
                          </p>
                          <p className="text-sm text-slate-400">
                            {selectedProject?.duration ?? "1 month"}
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <CheckCircle className="h-4 w-4 text-amber-400" />
                        <div>
                          <p className="text-sm font-medium text-white">
                            Status
                          </p>
                          <p className="text-sm text-slate-400">
                            {selectedProject.status}
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Server className="h-4 w-4 text-amber-400" />
                        <div>
                          <p className="text-sm font-medium text-white">
                            Platform
                          </p>
                          <p className="text-sm text-slate-400">
                            {selectedProject.platform || "Web"}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="pt-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button
                          className="w-full sm:w-auto relative overflow-hidden group bg-amber-500 text-slate-900 hover:bg-amber-400"
                          onClick={() =>
                            window.open(selectedProject.link, "_blank")
                          }
                        >
                          <span className="relative z-10 flex items-center">
                            Visit Project
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
