 const WRITEUP_BASE_URL = 'https://github.com/IES-Rafael-Alberti/Write-up-Nerea/blob/main';

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

            function buildWriteupUrl(os, machine) {
                const folder = os === 'windows' ? 'Maquinas_de_Windows' : 'Maquina_de_Linux';
                return `${WRITEUP_BASE_URL}/${folder}/${machine}/README.md`;
            }

            function renderWriteupList(targetId, os) {
                const target = document.getElementById(targetId);
                if (!target) return;

                target.innerHTML = WRITEUPS[os].map(machine => {
                    const folder = os === 'windows' ? 'Maquinas_de_Windows' : 'Maquina_de_Linux';
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
            }

            document.addEventListener('DOMContentLoaded', () => {
                renderWriteupList('linux-writeups', 'linux');
                renderWriteupList('windows-writeups', 'windows');
            });