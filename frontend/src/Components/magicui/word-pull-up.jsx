"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function WordPullUp({
  words,
  highlightIndices = [], // Array of indices to highlight
  highlightColors = [""], // Array of colors or a single color
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}) {
  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split(" ").map((word, i) => {
        const isHighlighted = highlightIndices.includes(i);
        const color = Array.isArray(highlightColors)
          ? highlightColors[highlightIndices.indexOf(i)] || highlightColors[0]
          : highlightColors;

        return (
          <motion.span
            key={i}
            variants={framerProps}
            style={{
              display: "inline-block",
              paddingRight: "8px",
              // color: isHighlighted ? color : "inherit",
            }}
          >
            <span className={isHighlighted ? color : ""}>
              {word === "" ? <span>&nbsp;</span> : word}
            </span>
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
