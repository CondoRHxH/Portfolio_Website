import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import '../assets/styles/FloatingNav.scss';

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

function FloatingNav() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    const direction = current - previous;
    setVisible(scrollYProgress.get() < 0.05 || direction < 0);
  });

  return (
    <div className="floating-nav-wrapper">
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="floating-nav"
      >
        {navItems.map((item, i) => (
          <a key={i} href={item.link} className="floating-nav-item">{item.name}</a>
        ))}
        <button className="floating-nav-login">Contact Me</button>
      </motion.div>
    </div>
  );
}

export default FloatingNav;