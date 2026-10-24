(function () {
    const SESSION_KEY = 'portfolio-admin-session';
    // Password: othniel
    const PASS_HASH = '5f3656c2931baf56aae2512103fafa1b61314b10e67161760bccdaed05ac380f';

    const loginView = document.getElementById('admin-login');
    const appView = document.getElementById('admin-app');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const adminList = document.getElementById('admin-list');
    const adminStatus = document.getElementById('admin-status');
    const logoutBtn = document.getElementById('logout-btn');
    const resetBtn = document.getElementById('reset-overrides');

    async function sha256(text) {
        const data = new TextEncoder().encode(text);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hash))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
    }

    function isAuthed() {
        return sessionStorage.getItem(SESSION_KEY) === '1';
    }

    function setAuthed(value) {
        if (value) sessionStorage.setItem(SESSION_KEY, '1');
        else sessionStorage.removeItem(SESSION_KEY);
    }

    function showStatus(message) {
        if (!adminStatus) return;
        adminStatus.textContent = message;
        if (!message) return;
        window.clearTimeout(showStatus._timer);
        showStatus._timer = window.setTimeout(() => {
            adminStatus.textContent = '';
        }, 3200);
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function escapeAttr(value) {
        return escapeHtml(value);
    }

    function previewSources(project) {
        if (project.images && project.images.length) {
            return project.images.map((img) => img.src);
        }
        return [project.image];
    }

    function readFileAsDataUrl(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }

    function updatePreviewFromInputs(previewRoot, pathInputs, isGallery) {
        const values = Array.from(pathInputs).map((input) => input.value.trim());
        if (isGallery) {
            previewRoot.innerHTML = `<div class="admin-preview-gallery">${values.map((src) => `<img src="${escapeAttr(src)}" alt="">`).join('')}</div>`;
            return;
        }
        previewRoot.innerHTML = `<img src="${escapeAttr(values[0] || '')}" alt="">`;
    }

    function saveCard(card, isGallery) {
        const id = card.dataset.projectId;
        const hrefInput = card.querySelector('.project-href');
        const href = (hrefInput.value || '').trim();
        if (!href) {
            showStatus('Le lien est obligatoire.');
            hrefInput.focus();
            return;
        }

        const overrides = window.getProjectOverrides();
        const next = Object.assign({}, overrides[id] || {}, { href });

        if (isGallery) {
            const pathInputs = card.querySelectorAll('.image-path');
            next.images = Array.from(pathInputs).map((input) => ({
                src: (input.value || '').trim()
            }));
        } else {
            const pathInput = card.querySelector('.image-path');
            next.image = (pathInput.value || '').trim();
        }

        overrides[id] = next;
        window.saveProjectOverrides(overrides);
        showStatus('Projet enregistré.');
    }

    function buildCard(project) {
        const card = document.createElement('article');
        card.className = 'admin-card';
        card.dataset.projectId = project.id;

        const isGallery = Boolean(project.images && project.images.length);
        const previews = previewSources(project);
        const previewHtml = isGallery
            ? `<div class="admin-preview-gallery">${previews.map((src) => `<img src="${escapeAttr(src)}" alt="">`).join('')}</div>`
            : `<img src="${escapeAttr(previews[0] || '')}" alt="">`;

        let imageFields = '';
        if (isGallery) {
            imageFields = `
                <div class="admin-gallery-fields">
                    ${project.images.map((img, index) => `
                        <div class="admin-gallery-item">
                            <label>Image ${index + 1} (chemin ou URL)</label>
                            <input type="text" class="image-path" value="${escapeAttr(img.src)}" data-index="${index}">
                            <div class="admin-file-row">
                                <input type="file" class="image-file" accept="image/*" data-index="${index}">
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            imageFields = `
                <div class="admin-editor-row">
                    <label for="image-${project.id}">Image (chemin ou URL)</label>
                    <input type="text" id="image-${project.id}" class="image-path" value="${escapeAttr(project.image || '')}">
                    <div class="admin-file-row">
                        <input type="file" class="image-file" accept="image/*">
                    </div>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="admin-preview">${previewHtml}</div>
            <div class="admin-editor">
                <h2>${escapeHtml(project.title)}</h2>
                <div class="admin-editor-row">
                    <label for="href-${project.id}">Lien du projet</label>
                    <input type="url" id="href-${project.id}" class="project-href" value="${escapeAttr(project.href || '')}" placeholder="https://...">
                </div>
                ${imageFields}
                <div class="admin-card-actions">
                    <button type="button" class="btn btn-primary save-project">Enregistrer</button>
                </div>
            </div>
        `;

        const pathInputs = card.querySelectorAll('.image-path');
        const fileInputs = card.querySelectorAll('.image-file');
        const previewRoot = card.querySelector('.admin-preview');

        pathInputs.forEach((input) => {
            input.addEventListener('input', () => {
                updatePreviewFromInputs(previewRoot, pathInputs, isGallery);
            });
        });

        fileInputs.forEach((input) => {
            input.addEventListener('change', async () => {
                const file = input.files && input.files[0];
                if (!file) return;
                try {
                    const dataUrl = await readFileAsDataUrl(file);
                    const index = input.getAttribute('data-index');
                    if (index !== null) {
                        const pathInput = card.querySelector(`.image-path[data-index="${index}"]`);
                        if (pathInput) pathInput.value = dataUrl;
                    } else {
                        const pathInput = card.querySelector('.image-path');
                        if (pathInput) pathInput.value = dataUrl;
                    }
                    updatePreviewFromInputs(previewRoot, pathInputs, isGallery);
                    showStatus('Image chargée. Cliquez sur Enregistrer.');
                } catch (err) {
                    showStatus('Impossible de lire ce fichier.');
                }
            });
        });

        card.querySelector('.save-project').addEventListener('click', () => {
            saveCard(card, isGallery);
        });

        return card;
    }

    function renderList() {
        if (!adminList) return;
        adminList.innerHTML = '';
        window.getMergedProjects().forEach((project) => {
            adminList.appendChild(buildCard(project));
        });
    }

    function showApp() {
        loginView.hidden = true;
        appView.hidden = false;
        renderList();
    }

    function showLogin() {
        loginView.hidden = false;
        appView.hidden = true;
    }

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        loginError.hidden = true;
        const password = document.getElementById('admin-password').value;
        const hash = await sha256(password);
        if (hash !== PASS_HASH) {
            loginError.hidden = false;
            return;
        }
        setAuthed(true);
        showApp();
    });

    logoutBtn.addEventListener('click', () => {
        setAuthed(false);
        showLogin();
    });

    resetBtn.addEventListener('click', () => {
        const ok = window.confirm('Réinitialiser toutes les images et liens modifiés ?');
        if (!ok) return;
        window.clearProjectOverrides();
        renderList();
        showStatus('Valeurs d’origine restaurées.');
    });

    if (isAuthed()) showApp();
    else showLogin();
})();
