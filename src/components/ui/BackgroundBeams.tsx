"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const beams = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 200 + 50,
            angle: (Math.random() - 0.5) * Math.PI * 0.2 - Math.PI / 4, // Slanted upwards
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5,
            width: Math.random() * 2 + 0.5,
        }));

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // No background fill, just clear - let the parent background show through
            // or subtle gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Keep it transparent
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            beams.forEach((beam) => {
                beam.x -= Math.cos(beam.angle) * beam.speed;
                beam.y -= Math.sin(beam.angle) * beam.speed;
                beam.opacity -= 0.002;

                if (beam.opacity <= 0) {
                    beam.x = Math.random() * canvas.width + 200;
                    beam.y = Math.random() * canvas.height + 200;
                    beam.opacity = Math.random() * 0.4 + 0.1;
                }

                // Wrap around logic
                if (beam.x < -100 || beam.y < -100) {
                    beam.x = Math.random() * canvas.width + 200;
                    beam.y = Math.random() * canvas.height + 200;
                    beam.opacity = Math.random() * 0.4 + 0.1;
                }

                ctx.beginPath();
                const endX = beam.x + Math.cos(beam.angle) * beam.length;
                const endY = beam.y + Math.sin(beam.angle) * beam.length;

                const gradient = ctx.createLinearGradient(beam.x, beam.y, endX, endY);
                gradient.addColorStop(0, `rgba(56, 189, 248, 0)`);
                gradient.addColorStop(0.5, `rgba(56, 189, 248, ${beam.opacity * 0.5})`); // Lower opacity
                gradient.addColorStop(1, `rgba(56, 189, 248, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = beam.width;
                ctx.moveTo(beam.x, beam.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);
        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={beamsRef}
            className={cn(
                "fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen",
                className
            )}
        />
    );
};
