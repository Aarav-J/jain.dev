import { useEffect, useRef, useState } from "react";

export type Section = {
    id: string;
    ref: React.RefObject<HTMLElement>;
};

/**
 * Tracks which section currently dominates the viewport.
 * Picks the observed section with the highest intersection ratio,
 * so scroll boundaries resolve to a single active id.
 */
function useActiveSection(sections: Section[]): string {
    const [active, setActive] = useState(sections[0]?.id ?? "");
    const ratios = useRef(new Map<string, number>());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const match = sections.find((s) => s.ref.current === entry.target);
                    if (match) ratios.current.set(match.id, entry.intersectionRatio);
                }

                let best = sections[0]?.id ?? "";
                let max = -1;
                for (const { id } of sections) {
                    const ratio = ratios.current.get(id) ?? 0;
                    if (ratio > max) {
                        max = ratio;
                        best = id;
                    }
                }
                setActive(best);
            },
            { threshold: [0.15, 0.35, 0.55, 0.75] }
        );

        for (const { ref } of sections) {
            if (ref.current) observer.observe(ref.current);
        }

        return () => observer.disconnect();
        // section ids are stable for the lifetime of the page; refs never change identity
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return active;
}

export default useActiveSection;
