// ===================================
// Projets du portfolio (à éditer ici)
// ===================================
//
// Pour modifier un projet :
//   1. url          → lien du site
//   2. image        → fichier image dans ce dossier (ex. mon-projet.png)
//      images       → plusieurs images (galerie), à la place de image
//   3. description  → texte FR et EN sous la carte
//   4. alt          → texte alternatif de l'image (FR / EN)
//
// Pour ajouter un projet : copier un bloc, changer id / title / url / image /
// description / alt / tags, et éventuellement size ('large', 'wide', ou '').
// Déposer le PNG dans le même dossier que index.html.
//
// Tags : { key: 'tag.xxx' } = traduit (voir script.js), ou { label: 'React' } = fixe.

const PROJECTS = [
    {
        id: 'sitrabcam',
        title: 'Sitrabcam',
        url: 'https://sitrabcam.com/',
        image: 'sitrabcam.png',
        size: 'large',
        tags: [
            { key: 'tag.industry' },
            { key: 'tag.landing' },
            { key: 'tag.catalog' }
        ],
        description: {
            fr: 'Site vitrine et catalogue pour un producteur de farine premium au Cameroun.',
            en: 'Showcase and catalog for a premium flour producer in Cameroon.'
        },
        alt: {
            fr: 'Sitrabcam, site de farine premium au Cameroun',
            en: 'Sitrabcam, premium flour website in Cameroon'
        }
    },
    {
        id: 'semence',
        title: 'Sémence',
        url: 'https://s3mence.netlify.app/',
        image: 'semence.png',
        size: 'wide',
        tags: [
            { key: 'tag.fintech' },
            { key: 'tag.dashboard' },
            { label: 'Web app' }
        ],
        description: {
            fr: 'App de budget personnel : enveloppes, reste à vivre et cycle mensuel.',
            en: 'Personal budget app: envelopes, cash on hand, and a monthly cycle.'
        },
        alt: {
            fr: 'Sémence, tableau de bord de budget personnel',
            en: 'Semence, personal budget dashboard'
        }
    },
    {
        id: 'prima',
        title: 'Prima Rattan Home',
        url: 'https://primarattan.netlify.app/',
        image: 'prima-rattan.png',
        size: 'wide',
        tags: [
            { key: 'tag.craft' },
            { key: 'tag.landing' },
            { label: 'E-commerce' }
        ],
        description: {
            fr: 'Boutique de meubles en rotin tissé à la main, à Yaoundé.',
            en: 'Handmade rattan furniture shop in Yaoundé.'
        },
        alt: {
            fr: 'Prima Rattan Home, mobilier en rotin artisanal',
            en: 'Prima Rattan Home, handmade rattan furniture'
        }
    },
    {
        id: 'lidaf',
        title: 'LidafCCA',
        url: 'https://lidafcca.com/',
        image: 'lidafcca.png',
        size: 'wide',
        tags: [
            { key: 'tag.consulting' },
            { key: 'tag.landing' },
            { key: 'tag.institutional' }
        ],
        description: {
            fr: 'Cabinet de conseil à Douala : fiscalité, formations et gestion de projets.',
            en: 'Consulting firm in Douala: tax, training, and project management.'
        },
        alt: {
            fr: 'LidafCCA, cabinet de conseil à Douala',
            en: 'LidafCCA, consulting firm in Douala'
        }
    },
    {
        id: 'bambou',
        title: 'BambouCamer',
        url: 'https://bamboucmr.netlify.app/',
        image: 'bamboucamer.png',
        size: 'wide',
        tags: [
            { key: 'tag.ecology' },
            { key: 'tag.landing' },
            { key: 'tag.association' }
        ],
        description: {
            fr: 'Association et startup à Dschang : bambou, économie verte et restauration des terres.',
            en: 'Association and startup in Dschang: bamboo, green economy, and land restoration.'
        },
        alt: {
            fr: 'BambouCamer, association et startup bambou au Cameroun',
            en: 'BambouCamer, bamboo association and startup in Cameroon'
        }
    },
    {
        id: 'aurex',
        title: 'Aurex Logistics',
        url: 'https://www.aurexlogistics.org/',
        image: 'aurex-logistics.png',
        size: 'wide',
        tags: [
            { key: 'tag.logistics' },
            { key: 'tag.tracking' },
            { label: 'Web app' }
        ],
        description: {
            fr: 'Suivi de fret mondial : cartes live, timelines, route, air, mer et véhicules.',
            en: 'Global freight tracking: live maps, timelines, road, air, sea, and vehicles.'
        },
        alt: {
            fr: 'Aurex Logistics, suivi de fret mondial',
            en: 'Aurex Logistics, global freight tracking'
        }
    },
    {
        id: 'car',
        title: 'Car4WayLess',
        url: 'https://car4wayless.com/',
        image: 'car4wayless.png',
        size: 'wide',
        tags: [
            { key: 'tag.auto' },
            { key: 'tag.inventory' },
            { label: 'Web app' }
        ],
        description: {
            fr: "Marketplace auto aux USA : voitures d'occasion, filtres et fiches véhicule.",
            en: 'US auto marketplace: used cars, filters, and vehicle listings.'
        },
        alt: {
            fr: "Car4WayLess, inventaire de voitures d'occasion",
            en: 'Car4WayLess, used car inventory'
        }
    },
    {
        id: 'ice',
        title: 'ICE_TECH',
        url: 'https://ice-t3ch.netlify.app/',
        images: [
            {
                src: 'ice-tech-hero.png',
                alt: {
                    fr: "ICE_TECH, page d'accueil bijouterie",
                    en: 'ICE_TECH jewelry homepage'
                }
            },
            {
                src: 'ice-tech-categories.png',
                alt: {
                    fr: 'ICE_TECH, catégories de bijoux',
                    en: 'ICE_TECH jewelry categories'
                }
            },
            {
                src: 'ice-tech-grill.png',
                alt: {
                    fr: 'ICE_TECH, grills sur mesure',
                    en: 'ICE_TECH custom grills'
                }
            }
        ],
        size: 'wide',
        tags: [
            { key: 'tag.jewelry' },
            { key: 'tag.landing' },
            { label: 'E-commerce' }
        ],
        description: {
            fr: 'Marque de bijoux iced-out au Cameroun : catalogue, catégories et prise de rendez-vous.',
            en: 'Iced-out jewelry brand in Cameroon: catalog, categories, and booking.'
        }
    },
    {
        id: 'rhit',
        title: 'RHIT Élections',
        url: 'https://gleaming-halva-2a961d.netlify.app/',
        image: 'elections.png',
        size: '',
        tags: [
            { label: 'Vue.js' },
            { label: 'Node.js' },
            { label: 'Web app' }
        ],
        description: {
            fr: 'Vote électronique pour les élections universitaires, avec résultats en direct.',
            en: 'Electronic voting for university elections, with live results.'
        },
        alt: {
            fr: 'RHIT Élections, plateforme de vote étudiant',
            en: 'RHIT Elections, student voting platform'
        }
    },
    {
        id: 'roberto',
        title: 'Roberto Saddles',
        url: 'https://robertoequitazione.com',
        image: 'Screenshot 2025-12-23 182918.png',
        size: '',
        tags: [
            { label: 'E-commerce' },
            { label: 'React' }
        ],
        description: {
            fr: "Boutique d'équipement équestre : catalogue filtré et parcours d'achat.",
            en: 'Equestrian shop: filtered catalog and checkout flow.'
        },
        alt: {
            fr: 'Roberto Saddles, catalogue de selles',
            en: 'Roberto Saddles, saddle catalog'
        }
    }
];

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function escapeAttr(value) {
    return escapeHtml(value).replace(/'/g, '&#39;');
}

function syncProjectI18n() {
    if (typeof I18N === 'undefined') return;

    PROJECTS.forEach((project) => {
        I18N.fr[`${project.id}.desc`] = project.description.fr;
        I18N.en[`${project.id}.desc`] = project.description.en;

        if (project.images && project.images.length) {
            project.images.forEach((img, index) => {
                const key = `${project.id}.alt${index + 1}`;
                I18N.fr[key] = img.alt.fr;
                I18N.en[key] = img.alt.en;
            });
            return;
        }

        if (project.alt) {
            I18N.fr[`${project.id}.alt`] = project.alt.fr;
            I18N.en[`${project.id}.alt`] = project.alt.en;
        }
    });
}

function renderProjectImage(project) {
    if (project.images && project.images.length) {
        const slides = project.images.map((img, index) => {
            const altKey = `${project.id}.alt${index + 1}`;
            return `<img src="${escapeAttr(img.src)}" alt="${escapeAttr(img.alt.fr)}" data-i18n-alt="${escapeAttr(altKey)}">`;
        }).join('');
        return `<div class="project-image"><div class="project-gallery">${slides}</div></div>`;
    }

    const src = project.image || '';
    const altFr = (project.alt && project.alt.fr) || project.title;
    return `<div class="project-image"><img src="${escapeAttr(src)}" alt="${escapeAttr(altFr)}" data-i18n-alt="${escapeAttr(project.id + '.alt')}"></div>`;
}

function renderProjectTags(project) {
    return project.tags.map((tag) => {
        if (tag.key) {
            const fallback = (typeof I18N !== 'undefined' && I18N.fr[tag.key]) || tag.key;
            return `<span data-i18n="${escapeAttr(tag.key)}">${escapeHtml(fallback)}</span>`;
        }
        return `<span>${escapeHtml(tag.label || '')}</span>`;
    }).join('');
}

function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid || !PROJECTS.length) return;

    syncProjectI18n();

    grid.innerHTML = PROJECTS.map((project) => {
        const sizeClass = project.size ? ` project-card-${escapeAttr(project.size)}` : '';
        const viewLabel = (typeof I18N !== 'undefined' && I18N.fr['work.view']) || 'Voir le site';

        return `
            <article class="project-card${sizeClass}">
                <a href="${escapeAttr(project.url)}" target="_blank" rel="noopener noreferrer" class="project-hit">
                    ${renderProjectImage(project)}
                    <div class="project-info">
                        <div class="project-tags">
                            ${renderProjectTags(project)}
                        </div>
                        <h3 class="project-title">${escapeHtml(project.title)}</h3>
                        <p class="project-description" data-i18n="${escapeAttr(project.id)}.desc">${escapeHtml(project.description.fr)}</p>
                        <span class="project-cta" data-i18n="work.view">${escapeHtml(viewLabel)}</span>
                    </div>
                </a>
            </article>
        `;
    }).join('');
}
