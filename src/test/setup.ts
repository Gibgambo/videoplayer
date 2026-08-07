import "@testing-library/jest-dom/vitest";

class ObserverStub {
    observe() { }
    unobserve() { }
    disconnect() { }
}
window.ResizeObserver ??= ObserverStub as unknown as typeof ResizeObserver;
window.IntersectionObserver ??= ObserverStub as unknown as typeof IntersectionObserver;

window.matchMedia ??= (query: string) =>
    ({
        matches: false,
        media: query,
        addEventListener: () => { },
        removeEventListener: () => { },
    }) as unknown as MediaQueryList;