const WRITEUP_BASE_URL = 'https://github.com/IES-Rafael-Alberti/Write-up-Nerea/blob/main';
const PAGE_SIZE = 4;

const WRITEUPS = {
    linux: [
        'Tech_Supp0rt',
        'Agent-Sudo',
        'easy-peasy',
        'basic-pentesting',
        'Library',
        'RootMe',
        'Kenobi-badr',
        'Startup',
        'GamingServer',
        'Bounty-Hacker',
        'LazyAdmin',
        'Brooklyn99',
        'Poster',
        'Ignite',
        'Wgel-CTF',
        'Year-of-the-Rabbit',
        'Lian_Yu'
    ],
    windows: [
        'Anthem',
        'Blaster',
        'Blue',
        'Ice',
        'Retro_CTF',
        'Revelant'
    ]
};

const writeupState = {
    linux: 0,
    windows: 0
};

function buildWriteupUrl(os, machine) {
    const folder = os === 'windows' ? 'Maquinas_de_Windows' : 'Maquina_de_Linux';
    return `${WRITEUP_BASE_URL}/${folder}/${machine}/README.md`;
}

function getPageItems(os) {
    const start = writeupState[os] * PAGE_SIZE;
    return WRITEUPS[os].slice(start, start + PAGE_SIZE);
}

function renderWriteupList(targetId, os) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const folder = os === 'windows' ? 'Maquinas_de_Windows' : 'Maquina_de_Linux';
    const items = getPageItems(os);

    target.innerHTML = items.map(machine => {
        const url = buildWriteupUrl(os, machine);

        return `
            <li>
                <a class="writeup-card" href="${url}" target="_blank" rel="noopener noreferrer">
                    <span class="writeup-card-title">${machine}</span>
                    <span class="writeup-card-meta">${folder}/${machine}/README.md</span>
                    <span class="writeup-card-badge">GitHub</span>
                </a>
            </li>
        `;
    }).join('');

    updateWriteupControls(os);
}

function updateWriteupControls(os) {
    const prevBtn = document.getElementById(`${os}-prev`);
    const nextBtn = document.getElementById(`${os}-next`);
    const pageInfo = document.getElementById(`${os}-page`);

    const totalPages = Math.ceil(WRITEUPS[os].length / PAGE_SIZE);
    const currentPage = writeupState[os] + 1;

    if (prevBtn) prevBtn.disabled = writeupState[os] === 0;
    if (nextBtn) nextBtn.disabled = writeupState[os] >= totalPages - 1;
    if (pageInfo) pageInfo.textContent = `${currentPage} / ${totalPages}`;
}

function changePage(os, direction) {
    const totalPages = Math.ceil(WRITEUPS[os].length / PAGE_SIZE);
    const nextPage = writeupState[os] + direction;

    if (nextPage < 0 || nextPage > totalPages - 1) return;

    writeupState[os] = nextPage;
    renderWriteupList(`${os}-writeups`, os);
}

document.addEventListener('DOMContentLoaded', () => {
    renderWriteupList('linux-writeups', 'linux');
    renderWriteupList('windows-writeups', 'windows');

    const linuxPrev = document.getElementById('linux-prev');
    const linuxNext = document.getElementById('linux-next');
    const windowsPrev = document.getElementById('windows-prev');
    const windowsNext = document.getElementById('windows-next');

    if (linuxPrev) linuxPrev.addEventListener('click', () => changePage('linux', -1));
    if (linuxNext) linuxNext.addEventListener('click', () => changePage('linux', 1));
    if (windowsPrev) windowsPrev.addEventListener('click', () => changePage('windows', -1));
    if (windowsNext) windowsNext.addEventListener('click', () => changePage('windows', 1));
});