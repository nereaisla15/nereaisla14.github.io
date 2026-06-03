const WRITEUP_BASE_URL = 'https://github.com/IES-Rafael-Alberti/Write-up-Nerea/blob/main';

const WRITEUPS = {
    linux: ['Tech_Supp0rt','Agent-Sudo','easy-peasy','basic-pentesting'],
    windows: ['Anthem','Blaster','Blue','Ice']
};

function buildWriteupUrl(os, machine) {
    const folder = os === 'windows' ? 'Maquinas_de_Windows' : 'Maquina_de_Linux';
    return `${WRITEUP_BASE_URL}/${folder}/${machine}/README.md`;
}

function renderWriteupList(targetId, os) {
    const target = document.getElementById(targetId);
    if (!target) return;

    target.innerHTML = WRITEUPS[os].map(machine => {
        const url = buildWriteupUrl(os, machine);

        return `
            <li>
                <a href="${url}" target="_blank">
                    ${machine}
                </a>
            </li>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderWriteupList('linux-writeups', 'linux');
    renderWriteupList('windows-writeups', 'windows');
});