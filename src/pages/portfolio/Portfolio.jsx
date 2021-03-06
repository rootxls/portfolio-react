import React from "react";
import Section from "../../components/design-system/Section";
import GitHubIcon from "../../img/projects/github.png"
import Header from "../../components/parts/Header";
import transition from "../../img/transitions/portfolio/1.png";
import {Footer, mode} from "../../components/parts/Footer";
import Slide from "react-reveal/Slide";
import Tilt from "react-tilt";
import {Month} from "../experience/Experience";

// imgs
import lyracard from "../../img/projects/lyra/card.png";
import lyrapage from "../../img/projects/lyra/page.png";
import lyra1 from "../../img/projects/lyra/1.jpg";
import lyra2 from "../../img/projects/lyra/2.jpg";
import lyra3 from "../../img/projects/lyra/3.png";
import lyra4 from "../../img/projects/lyra/4.png";
import lyra5 from "../../img/projects/lyra/5.png";
import lyra6 from "../../img/projects/lyra/6.png";

import rc from "../../img/projects/rcv3/card.png";
import rc1 from "../../img/projects/rcv3/rc2.png";
import rc2 from "../../img/projects/rcv3/trailerv3.mp4";
import rcposter from "../../img/projects/rcv3/poster.webp";

import sonic from "../../img/projects/sonic/card.png";
import sonic2 from "../../img/projects/sonic/2.png";

import arkane from "../../img/projects/arkane/card.png";
import arkane1 from "../../img/projects/arkane/1.png";
import arkane2 from "../../img/projects/arkane/2.png";

import ludi from "../../img/projects/ludiconcept/card.png";

import bolt from "../../img/projects/portfolio/card.png";

import {Mention, Parenthesis, TechnicalLanguage} from "../../index";
import {ContentType} from "../../components/design-system/Carousel";

const projectTypes = {
    PERSONNAL: {
        name: 'Projet personnel',
    },
    OPEN_SOURCE: {
        name: 'Projet open-source',
    },
    PROFESSIONNAL: {
        STAGE: {
            name: 'Stage',
        },
        FREELANCE: {
            name: 'Mission Freelance',
        },
    },
};

export const projects = [
    {
        name: 'LyraMC',
        pageName: 'LyraMC',
        type: projectTypes.PERSONNAL,
        from: new Date(2020, Month.MAY),
        to: null,
        desc: 'D??veloppement d\'une plateforme de jeux comp??titifs en ??quipe dans le but de devenir ind??pendant. Apprentissage continu, beaucoup de connaissances enmagasin??es...',
        repo: 'https://github.com/LyraMC',
        cardimg: lyracard,
        pageimg: lyrapage,
        longdesc: <p>LyraMC est un serveur proposant des jeux ?? but comp??titif solos et en ??quipes. Avec un syst??me de classements et de clans avanc??.
            Ce projet est beaucoup focalis?? sur l'exp??rience utilisateur, le serveur poss??de un cot?? RP <Parenthesis text="jeu de r??le" /> dans le th??me de la piraterie, inspir?? du manga shonen <TechnicalLanguage text={"One Piece"} />.
        </p>,
        visuals: <p>
            Voici quelques visuels int??ressants du projet, comprenant des images de cartes du serveur, des jeux, ou bien de fonctionnalit??s en lien avec l'histoire du serveur et le th??me pirate.
        </p>,
        textColor: "text-red-600",
        techs: [
            {
                hex: "#61DAFB",
                percent: 10,
                name: "React",
            },
            {
                hex: '#16BDCA',
                percent: 10,
                name: "TailwindCSS",
            },
            {
                hex: '#DF754B',
                percent: 70,
                name: "Java",
            },
            {
                hex: '#002B64',
                percent: 20,
                name: "MariaDB",
            },
            {
                hex: '#55AC4B',
                percent: 10,
                name: "MongoDB",
            },
            {
                hex: '#D82C20',
                percent: 10,
                name: "Redis",
            },
        ],
        competences: [
            {
                hex: '#782a90',
                percent: 25,
                name: "Travail en ??quipe",
            },
            {
                hex: '#6ccbdb',
                percent: 25,
                name: "Gestion de projet",
            },
            {
                hex: '#55b847',
                percent: 25,
                name: "R??solution de probl??mes",
            },
            {
                hex: '#ecd715',
                percent: 25,
                name: "R??daction de cahiers des charges",
            },
        ],
        images: [
            {
                content: lyra1,
                type: ContentType.IMG
            },
            {
                content: lyra2,
                type: ContentType.IMG
            },
            {
                content: lyra3,
                type: ContentType.IMG
            },
            {
                content: lyra4,
                type: ContentType.IMG
            },
            {
                content: lyra5,
                type: ContentType.IMG
            },
            {
                content: lyra6,
                type: ContentType.IMG
            },
        ],
    },
    {
        name: 'RCV3',
        pageName: 'Rushers Championship',
        type: projectTypes.PERSONNAL,
        from: new Date(2019, Month.AUGUST),
        to: new Date(2020, Month.MAY),
        desc: 'Site web du plus grand tournoi e-Sportif d\'un jeu-vid??o (1000??? de cashprize). D??veloppement de toutes les fonctionnalit??s Back-End et mise en place du VPS + s??curisation du site contre les injections SQL...',
        repo: null,
        cardimg: rc,
        pageimg: rc,
        longdesc: <p>Le <b>Rushers Championship</b> est un tournoi en ligne sur le mode de jeu <TechnicalLanguage text="Rush" />.
            Cette comp??tition poss??de un fonctionnement tr??s atypique, car elle est bas??e sur un syst??me de points, ainsi qu'un syst??me de chapeaux <Parenthesis text="ligues" /> dans lesquels sont class??es les ??quipes selon leur niveau.
            Ce qui cr??ait autant d'engouement autour de ce projet est le <TechnicalLanguage text="cashprize" />, c'est la premi??re fois que les r??compenses
            fut aussi ??lev?? sur le jeu, celui-ci ??tant ??lev?? ?? <b>450???</b> pour la premi??re ??dition puis ?? <b>1000???</b> pour la troisi??me ??dition.
            L'organisation de cet ??v??nement ??tait compos??e de 4 personnes qui sont: <Mention name="Matthieu Hoogeboom" href="https://matthhhieu.com/" />, moi-m??me et 2 autres amis.
            Ce projet est en partenariat avec <Mention name="Ascentia" href="https://www.ascentia.fr/" />.
            <br />
            <p className="py-2">
                Ce tournoi ?? connu 3 ??ditions:
                <p className="flex"><p className="text-theme-yellow-F49F0A pr-1">???</p> Rushers Championship <div className="px-1"><Parenthesis text="Premi??re edition" /></div></p>
                <p className="flex"><p className="text-theme-yellow-F49F0A pr-1">???</p> Winter Championship <div className="px-1"><Parenthesis text="Seconde edition" /></div></p>
                <p className="flex"><p className="text-theme-yellow-F49F0A pr-1">???</p> Rushers Championship V3 "RCV3" <div className="px-1"><Parenthesis text="Troisi??me edition" /></div></p>
            </p>

            Au fur et ?? mesure des ??ditions, l'engouement communautaire ne cessait d'augmenter notamment du fait de la participation de divers influenceurs populaires.
            Tout au long du projet, l'??quipe organisatrice ?? connu l'arriv??e de nouveaux membres, ainsi que des d??parts.
            Par la suite, cette organisation deviendra <Mention name="LyraMC" href="/project/0" /> et projettera de cr??er sa propre plateforme de jeux.
        </p>,
        visuals: <p>
            Voici quelques visuels int??r??ssants du projet, comprenant des images de la maquette du site, la bande annonce du projet...
        </p>,
        textColor: "text-yellow-300",
        techs: [
            {
                hex: "#E44D26",
                percent: 10,
                name: "HTML / CSS",
            },
            {
                hex: '#777BB3',
                percent: 30,
                name: "PHP",
            },
            {
                hex: "#E48E00",
                percent: 30,
                name: "MySQL",
            },
        ],
        competences: [
            {
                hex: '#782a90',
                percent: 25,
                name: "Travail en ??quipe",
            },
            {
                hex: '#6ccbdb',
                percent: 25,
                name: "Gestion de projet",
            },
            {
                hex: '#55b847',
                percent: 25,
                name: "R??solution de probl??mes",
            },
            {
                hex: '#ecd715',
                percent: 25,
                name: "R??daction de cahiers des charges",
            },
        ],
        images: [
            {
                content: rc1,
                type: ContentType.IMG,
            },
            {
                content: rc2,
                type: ContentType.VIDEO,
                poster: rcposter,
            },
        ],
    },
    {
        name: 'SonicTab',
        pageName: 'SonicTab',
        type: projectTypes.OPEN_SOURCE,
        desc: 'API permettant aux d??veloppeurs de plugins Bukkit / Spigot de cr??er des TabList customis??es facilement et rapidement avec un syst??me de grille 2D.',
        repo: 'https://github.com/rootxls/SonicTab',
        cardimg: sonic,
        pageimg: sonic,
        longdesc: <p>
            Mini projet open source, il s'agit d'une API permettant aux d??veloppeurs de plugins Bukkit / Spigot de cr??er les interfaces de type TabList facilement et rapidement.
            Fonctionne sur un syst??me de grille en 2 dimensions permettant d'y placer des lignes. Cette API comprend aussi un syst??me d'animations simplifi??.
            </p>,
        visuals: <p>
            Voici un aper??u des interfaces pouvant ??tre cr????es gr??ce ?? cette API.
        </p>,
        textColor: "text-blue-300",
        techs: [
            {
                hex: '#DF754B',
                percent: 100,
                name: "Java",
            },
        ],
        competences: [
            {
                hex: '#c499a5',
                percent: 25,
                name: "Autonomie",
            },
            {
                hex: '#a78267',
                percent: 25,
                name: "Capacit?? d'adaptation",
            },
            {
                hex: '#457a99',
                percent: 25,
                name: "R??solution de probl??mes",
            },
            {
                hex: '#ecd715',
                percent: 25,
                name: "R??activit??",
            },
        ],
        images: [
            {
                content: sonic2,
                type: ContentType.IMG,
            },
        ],
    },
    {
        name: 'ArkaneMC',
        pageName: 'ArkaneMC',
        type: projectTypes.PERSONNAL,
        from: new Date(2021, Month.AUGUST),
        to: null,
        desc: 'Serveur Factions en ligne. D??veloppement du Site-Web vitrine ainsi que de la boutique du serveur. Cr??ation d???API Rest communiquant avec MongoDB.',
        repo: 'https://github.com/ArkaneMC',
        cardimg: arkane,
        pageimg: arkane,
        longdesc: <p>
            <TechnicalLanguage text="ArkaneMC" /> est un <b>serveur de jeu en ligne</b>.
            Je me suis occup?? du d??veloppement d'une <TechnicalLanguage text="API Rest" /> communiquant avec <TechnicalLanguage text="MongoDB" />.
            Je m'occuperai bient??t du <b>Site-Web vitrine</b> ainsi que de la boutique du serveur.
            </p>,
        visuals: <p>
            Voici quelques aper??us des interfaces du jeu.
        </p>,
        textColor: "text-fuchsia-600",
        techs: [
            {
                hex: '#DF754B',
                percent: 40,
                name: "Java",
            },
            {
                hex: '#F7DF1E',
                percent: 25,
                name: "JavaScript",
            },
            {
                hex: '#55AC4B',
                percent: 20,
                name: "MongoDB",
            },
        ],
        competences: [
            {
                hex: '#c499a5',
                percent: 25,
                name: "Autonomie",
            },
            {
                hex: '#a78267',
                percent: 25,
                name: "Capacit?? d'adaptation",
            },
            {
                hex: '#457a99',
                percent: 25,
                name: "R??solution de probl??mes",
            },
            {
                hex: '#ecd715',
                percent: 25,
                name: "R??activit??",
            },
        ],
        images: [
            {
                content: arkane1,
                type: ContentType.IMG,
            },
            {
                content: arkane2,
                type: ContentType.IMG,
            },
        ],
    },
    {
        name: 'Op??ration Arch??o',
        pageName: 'Op??ration Arch??o',
        type: projectTypes.PROFESSIONNAL.STAGE,
        from: new Date(2021, Month.JANUARY),
        to: new Date(2021, Month.FEBRUARY),
        desc: 'Site web permettant de g??n??rer des sc??narios complexes et al??atoires pour le jeu de soci??t?? Op??ration Arch??o.',
        repo: null,
        cardimg: ludi,
        pageimg: ludi,
        longdesc: <p>
            Op??ration Arch??o est un jeu de soci??t?? coop??ratif sur l???arch??ologie.
            Il consiste ?? enqu??ter sur un plateau de jeu afin de d??couvrir des structures du pass?? <Parenthesis text={"monuments, habitations..."} />.
            En tant que <TechnicalLanguage text="D??veloppeur Back-End" /> au sein de l'entreprise <b>Ludiconcept</b>, je me suis occup?? pendant une dur??e de 6 semaines du
            <TechnicalLanguage text=" d??veloppement d'un site web" /> permettant de g??n??rer des sc??narios <Parenthesis text="placement des structures sur le plateau..." /> complexes
            et al??atoires pour le jeu de soci??t??.
            </p>,
        textColor: "text-blue-300",
        techs: [
            {
                hex: '#d70a53',
                percent: 10,
                name: "Linux (Debian)",
            },
            {
                hex: '#0db7ed',
                percent: 10,
                name: "Docker",
            },
            {
                hex: '#002B64',
                percent: 20,
                name: "MariaDB",
            },
            {
                hex: '#777BB3',
                percent: 70,
                name: "PHP",
            },
        ],
        competences: [
            {
                hex: '#c499a5',
                percent: 25,
                name: "Autonomie",
            },
            {
                hex: '#a78267',
                percent: 25,
                name: "Capacit?? d'adaptation",
            },
            {
                hex: '#55b847',
                percent: 25,
                name: "R??solution de probl??mes",
            },
            {
                hex: '#61DAFB',
                percent: 25,
                name: "R??activit??",
            },
            {
                hex: '#782a90',
                percent: 25,
                name: "Travail en ??quipe",
            },
            {
                hex: '#ecd715',
                percent: 25,
                name: "R??daction de cahiers des charges",
            },
        ],
    },
    {
        name: 'Portfolio',
        pageName: 'Portfolio',
        type: projectTypes.OPEN_SOURCE,
        desc: 'Le Site-Web que vous consultez actuellement. ',
        repo: 'https://github.com/rootxls/portfolio-react',
        cardimg: bolt,
        pageimg: bolt,
        longdesc: <p>
            Ce projet est le site web que vous consultez actuellement, que j'ai conceptualis?? et d??velopp?? de A ?? Z.
            J'ai fait ce choix afin d'avoir un site web qui correspond ?? ma personnalit?? et dans le th??me de mon m??tier et des services que je propose.
        </p>,
        textColor: "text-theme-yellow-F49F0A",
        techs: [
            {
                hex: "#61DAFB",
                percent: 50,
                name: "React",
            },
            {
                hex: '#16BDCA',
                percent: 50,
                name: "TailwindCSS",
            },
            {
                hex: '#fd3d99',
                percent: 50,
                name: "Figma",
            },

        ],
        competences: [
            {
                hex: '#c499a5',
                percent: 50,
                name: "Autonomie",
            },
            {
                hex: '#55b847',
                percent: 50,
                name: "R??solution de probl??mes",
            },
        ],
    }
];

function ProjectCard({project}) {
    let test = true;

    return <div className="flex flex-col text-theme-white-glass text-center project-bg rounded-2xl h-full transform scale-75">
        <img
            className="mx-auto -mt-28 rounded-full border-4 project-bg"
            src={ project.cardimg }
            srcSet={ project.cardimg }
            width="229"
            height="229"
            alt={ project.name }
        />

        <h1 className="font-bold text-6xl project-button rounded-2xl mt-5 py-4 mx-8 justify-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-theme-white-glass to-theme-white-classic">
                { project.name }
            </p>
        </h1>
        <div className="flex-1 mx-8">
            <h2 className="text-5xl mt-2 tracking-wider">{ project.type.name }</h2>
            <p className="text-3xl mt-8 bg-clip-text text-transparent bg-gradient-to-br from-theme-white-glass to-theme-gray-50">
                { project.desc }
            </p>
        </div>

        <div className="self-center gap-x-12 flex bottom-0">
            <a href={ "/project/" + projects.indexOf(project) } className="cursor-none">
                <div type="button" className="flex project-button rounded-full h-24 w-90 my-10 transform hover:scale-125 duration-150 hover:-rotate-6">
                <span className="flex-1 uppercase text-4xl text-center my-auto font-bold bg-clip-text text-transparent bg-gradient-to-br from-theme-white-glass to-theme-gray-200">
                    VOIR PLUS
                </span>
                </div>
            </a>

            <a href={ project.repo? project.repo : "" } className="self-center cursor-none">
                <img
                    className={["z-40 transform hover:scale-125 duration-150 hover:-rotate-6 ", project.repo != null ? "" : " hidden"] }
                    src={ GitHubIcon }
                    srcSet={ GitHubIcon }
                    width="100%"
                    height="100%"
                    alt="See repo on GitHub"
                />
            </a>
        </div>
    </div>;
}

export class Portfolio extends React.Component {

    render() {
        return (
            <div className="bg-theme-gray-150 min-w-screen min-h-screen cursor-none">
                <Header />
                <Section name="??????? Portfolio" id="portfolio" />

                <div className="pt-28 justify-self-center grid lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10 mx-auto w-10/12">
                    {projects.map(project =>
                        <Tilt
                            options={{
                                reverse: false,
                                max: 8,
                                perspective: 1000,
                                scale: 1,
                                speed: 300,
                                transition: true,
                                axis: null,
                                reset: true,
                                easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                        >
                            <Slide left={true} duration={500} delay={100 + 50 * projects.indexOf(project)}>
                                <div key={projects.indexOf(project)} className="justify-self-center">
                                    <ProjectCard project={project} />
                                </div>
                            </Slide>
                        </Tilt>

                    )}
                </div>

                <img
                    className="bottom-0 z-40 mt-32 bg-theme-gray-250"
                    src={transition}
                    srcSet={transition}
                    width="100%"
                    height="100%"
                    alt=""
                />
                <Footer selectedMode={mode.DARK} />
            </div>
        );
    }
}
