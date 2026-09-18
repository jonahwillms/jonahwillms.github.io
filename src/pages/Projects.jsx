import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Function From Sequence: UniProt Scraping Tool",
      images: [], // optional, replace with your own images
      description: `
This is a side project that I am doing mainly to help with research for my undergraduate thesis project. The idea is that I want to do meta analysis of a bunch of proteins to see where proteins of unknown function sit in relation to proteins with known function. The problem is these proteins with unknown function often do not have crystal structures. My idea is to design a uniprot scraping algorithm where you put in keywords like any regular uniprot search, if a crystal structure exists, it will download that and if not it will download the AlphaFold database structure.

I am working on a bunch of other stuff to ensure this tool does what I what, one of them is a redundancy filter using MMSeqs2 to ensure I don't download a bunch of nearly identical homologs that would shift the results of the analysis.

I have also started to work on the analysis portion which includes sequence analysis, analysis of structural geometry, and electrostatics analysis. I also intend to add pocket analysis with fpocket and I want to try to make some sort of analysis where each structure is BLASTed and ran through Foldseek but I haven't figured out how I am going to do that yet or what statistics I want to generate from these analyses.

Overall, the goal of this project is mainly just to learn how to make a scraping algorithm for uniprot and get better at structural bioinformatics. I am using AI to research syntax for different python packages/command-line tools and also to help walk me through some of the logic behind putting this tool together. However, I am writing each line of code by myself as I want to actually understand what I am building. 
      `
    },
    {
      title: "3D Modelling & Printing Protein Models",
      images: ["/protein3d1.jpeg", "/protein3d3.jpeg", "/protein3d4.jpeg", "/protein3d5.jpeg"], // optional
      description: `
I have been working on modelling protein structures in Blender and Onshape and preparing them for 3D printing. I like to try to capture important features of the protein or complex in the 3D printed model. My first model I created was of SOD1 using 7WWT as a reference. The cool thing I wanted to try was to add magnets and allow the models to dimerize as they do in nature. The project worked out pretty well and I am really happy with it. 

The next model I am working on is lysozyme. It's intended to be used as a teaching tool so I am trying to create a carrying case for the model that is the surface projection, and I also am trying to create the active site in a way that it can magnetically bind a ligand that I will 3D print. This one is still a work in progress and parts of it have been really difficult, but it will eventually get done.

I am a very visual person, so I love designing these models. It's really cool to hold the protein in your hands and feel how different parts of the protein lead to its structure. For example, in my SOD1 model I added its disulfide bond and you can physically feel the rigidity that the bond gives the structure.

      `
    }
  ];

  return (
    <div className="projects-wrapper">

      {/* TOP NAV BAR */}
      <div className="top-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/hobbies" className="nav-link">Hobbies</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </div>

      <h1 className="projects-title">Projects</h1>

      {projects.map((proj, index) => (
        <div key={index} className="project-card">

          {/* Ribbon Header */}
          <div className="project-header">
            <h2>{proj.title}</h2>
          </div>

          {/* Images */}
          <div className="project-images">
            {proj.images.map((src, i) => (
              <img key={i} src={src} alt="" className="proj-img" />
            ))}
          </div>

          {/* Description */}
          <p className="project-description">{proj.description}</p>
        </div>
      ))}
    </div>
  );
}

