// Default portfolio projects. Overrides live in localStorage (portfolio-project-overrides).
window.DEFAULT_PROJECTS = [
    {
        id: 'sitrabcam',
        title: 'Sitrabcam',
        href: 'https://sitrabcam.com/',
        image: 'sitrabcam.png',
        size: 'large',
        tags: [
            { i18n: 'tag.industry' },
            { i18n: 'tag.landing' },
            { i18n: 'tag.catalog' }
        ],
        descKey: 'sitrabcam.desc',
        altKey: 'sitrabcam.alt'
    },
    {
        id: 'semence',
        title: 'Sémence',
        href: 'https://s3mence.netlify.app/',
        image: 'semence.png',
        size: 'wide',
        tags: [
            { i18n: 'tag.fintech' },
            { i18n: 'tag.dashboard' },
            { label: 'Web app' }
        ],
        descKey: 'semence.desc',
        altKey: 'semence.alt'
    },
    {
        id: 'prima',
        title: 'Prima Rattan Home',
        href: 'https://primarattan.netlify.app/',
        image: 'prima-rattan.png',
        size: 'wide',
        tags: [
            { i18n: 'tag.craft' },
            { i18n: 'tag.landing' },
            { label: 'E-commerce' }
        ],
        descKey: 'prima.desc',
        altKey: 'prima.alt'
    },
    {
        id: 'lidaf',
        title: 'LidafCCA',
        href: 'https://lidafcca.com/',
        image: 'lidafcca.png',
        size: 'wide',
        tags: [
            { i18n: 'tag.consulting' },
            { i18n: 'tag.landing' },
            { i18n: 'tag.institutional' }
        ],
        descKey: 'lidaf.desc',
        altKey: 'lidaf.alt'
    },
    {
        id: 'bambou',
        title: 'BambouCamer',
        href: 'https://bamboucmr.netlify.app/',
        image: 'bamboucamer.png',
        size: 'wide',
        tags: [
            { i18n: 'tag.ecology' },
            { i18n: 'tag.landing' },
            { i18n: 'tag.association' }
        ],
        descKey: 'bambou.desc',
        altKey: 'bambou.alt'
    },
    {
        id: 'aurex',
        title: 'Aurex Logistics',
        href: 'https://www.aurexlogistics.org/',
        image: 'aurex-logistics.png',
        size: 'wide',
        tags: [
            { i18n: 'tag.logistics' },
            { i18n: 'tag.tracking' },
            { label: 'Web app' }
        ],
        descKey: 'aurex.desc',
        altKey: 'aurex.alt'
    },
    {
        id: 'car',
        title: 'Car4WayLess',
        href: 'https://car4wayless.com/',
        image: 'car4wayless.png',
        size: 'wide',
        tags: [
            { i18n: 'tag.auto' },
            { i18n: 'tag.inventory' },
            { label: 'Web app' }
        ],
        descKey: 'car.desc',
        altKey: 'car.alt'
    },
    {
        id: 'ice',
        title: 'ICE_TECH',
        href: 'https://ice-t3ch.netlify.app/',
        images: [
            { src: 'ice-tech-hero.png', altKey: 'ice.alt1' },
            { src: 'ice-tech-categories.png', altKey: 'ice.alt2' },
            { src: 'ice-tech-grill.png', altKey: 'ice.alt3' }
        ],
        size: 'wide',
        tags: [
            { i18n: 'tag.jewelry' },
            { i18n: 'tag.landing' },
            { label: 'E-commerce' }
        ],
        descKey: 'ice.desc'
    },
    {
        id: 'rhit',
        title: 'RHIT Élections',
        href: 'https://gleaming-halva-2a961d.netlify.app/',
        image: 'elections.png',
        size: 'default',
        tags: [
            { label: 'Vue.js' },
            { label: 'Node.js' },
            { label: 'Web app' }
        ],
        descKey: 'rhit.desc',
        altKey: 'rhit.alt'
    },
    {
        id: 'madison',
        title: 'Madison Equestrian',
        href: 'https://madisonequestrian.com',
        image: 'Screenshot 2025-12-23 182918.png',
        size: 'default',
        tags: [
            { label: 'E-commerce' },
            { label: 'React' }
        ],
        descKey: 'madison.desc',
        altKey: 'madison.alt'
    }
];

window.PROJECTS_STORAGE_KEY = 'portfolio-project-overrides';

window.getProjectOverrides = function getProjectOverrides() {
    try {
        const raw = localStorage.getItem(window.PROJECTS_STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (err) {
        return {};
    }
};

window.saveProjectOverrides = function saveProjectOverrides(overrides) {
    localStorage.setItem(window.PROJECTS_STORAGE_KEY, JSON.stringify(overrides));
};

window.clearProjectOverrides = function clearProjectOverrides() {
    localStorage.removeItem(window.PROJECTS_STORAGE_KEY);
};

window.getMergedProjects = function getMergedProjects() {
    const overrides = window.getProjectOverrides();
    return window.DEFAULT_PROJECTS.map((project) => {
        const over = overrides[project.id] || {};
        const merged = Object.assign({}, project, over);

        if (project.images) {
            const imageOverrides = Array.isArray(over.images) ? over.images : [];
            merged.images = project.images.map((img, index) => {
                const imgOver = imageOverrides[index] || {};
                return Object.assign({}, img, imgOver);
            });
        }

        return merged;
    });
};
