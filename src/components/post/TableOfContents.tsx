import { useState, useEffect } from 'react';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const h2s = headings.filter(h => h.depth === 2);
  const [active, setActive] = useState(h2s[0]?.slug || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: [0, 1] }
    );

    h2s.forEach(h => {
      const el = document.getElementById(h.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (h2s.length === 0) return null;

  return (
    <aside className="toc">
      <div className="toc-label">// on this page</div>
      <ul>
        {h2s.map(h => (
          <li key={h.slug} className={active === h.slug ? 'is-on' : ''}>
            <a
              href={`#${h.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
