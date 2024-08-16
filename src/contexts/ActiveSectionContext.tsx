import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

type ScrollContextType = {
  activeSection: string | null;
  sectionRefs: React.RefObject<HTMLDivElement>[];
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null),  useRef<HTMLDivElement>(null)];
  const [activeSection, setActiveSection] = useState<string | null>(null);
  console.log(sectionRefs)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <ScrollContext.Provider value={{ activeSection, sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};
