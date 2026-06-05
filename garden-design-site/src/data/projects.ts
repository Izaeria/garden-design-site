import project1 from "../assets/ProjectsImages/project1.webp";
import project2 from "../assets/ProjectsImages/project2.webp";
import project3 from "../assets/ProjectsImages/project3.webp";
import project4 from "../assets/ProjectsImages/project5.webp";

export const projects = [
  {
    id: "lummig-tradgard-med-fontan",
    title: "Lummig trädgård med fontän",
    category: "Trädgårdsdesign",
    location: "Svedala",
    year: "2025",
    client: "Privat kund",
    image: project1,
    gallery: [project1],

    shortDescription:
      "En lummig villaträdgård med blommande planteringar och en central fontän.",

    description:
      "Projektet fokuserade på att skapa en grön och harmonisk trädgårdsmiljö med tydliga rumsligheter, blommande växtval och en fontän som central punkt.",

    challenge:
      "Att skapa en lugn och sammanhängande trädgård med hög prydnadseffekt under stora delar av året.",

    solution:
      "Genom att kombinera buskar, perenner och strukturerande växter skapades en grön och levande miljö med tydliga blickfång.",

    services: ["Trädgårdsdesign", "Planteringsplan", "Växtval"],

    tags: ["Fontän", "Perenner", "Villa", "Blomning"],
  },

  {
    id: "skissforslag-woodland",
    title: "Skissförslag",
    category: "Skissförslag",
    location: "Skolarbete",
    year: "2024",
    client: "Utbildningsprojekt",
    image: project2,
    gallery: [project2],

    shortDescription: "Woodland-inspirerat skissförslag med naturliga former.",

    description:
      "Ett konceptuellt designförslag där inspiration hämtats från woodlandmiljöer med fokus på naturliga växtsamhällen och mjuka former.",

    challenge:
      "Att skapa en naturlik plantering med varierande höjd och struktur.",

    solution:
      "Olika växtlager användes för att skapa djup, variation och en naturlig känsla.",

    services: ["Konceptdesign", "Illustration", "Växtgestaltning"],

    tags: ["Woodland", "Skissförslag", "Träd", "Buskar"],
  },

  {
    id: "illustrationsplan",
    title: "Illustrationsplan",
    category: "Skissförslag",
    location: "Skolarbete",
    year: "2024",
    client: "Utbildningsprojekt",
    image: project3,
    gallery: [project3],

    shortDescription:
      "Illustrationsplan med fokus på växtkomposition och rörelsemönster.",

    description:
      "Projektet visar en illustrationsplan där växtmaterial, gångstråk och vistelseytor samspelar för att skapa en funktionell och estetisk helhet.",

    challenge:
      "Att skapa en tydlig struktur samtidigt som designen känns mjuk och naturlig.",

    solution:
      "Kurvade gångar och varierade planteringsytor användes för att skapa rörelse genom området.",

    services: ["Illustrationsplan", "Konceptdesign", "Planritning"],

    tags: ["Illustrationsplan", "Design", "Planritning", "Växtkomposition"],
  },

  {
    id: "gron-tradgard-med-valv",
    title: "Grön Trädgård med valv",
    category: "Villa",
    location: "Svedala",
    year: "2025",
    client: "Privat kund",
    image: project4,
    gallery: [project4],

    shortDescription:
      "En grön villaträdgård där ett valv fungerar som centralt blickfång.",

    description:
      "Projektet utformades för att skapa en tydlig entré och en känsla av rumslighet genom användningen av ett planterat valv.",

    challenge: "Att skapa struktur i en relativt öppen trädgård.",

    solution:
      "Valvet användes som vertikalt element för att skapa riktning, höjd och visuell karaktär.",

    services: ["Trädgårdsdesign", "Planteringsplan", "Gestaltning"],

    tags: ["Valv", "Villa", "Klätterväxter", "Entré"],
  },
];
