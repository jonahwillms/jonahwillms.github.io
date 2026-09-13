import "./Experience.css";
import { Link } from "react-router-dom";

export default function Experience() {
  const experiences = [
    {
      sortKey: 2027,
      title: "Undergraduate Thesis Student",
      location: "Department of Chemistry, University of Waterloo",
      dates: "Sep – Apr 2027",
      images: [],
      description: `
Undergraduate thesis student in the <a href="https://www.sychanthalab.com/" target="_blank" rel="noopener noreferrer">Sychantha Lab</a> in the Department of Chemistry at the University of Waterloo.

This lab specializes in the bacterial cell wall, antibiotic resisistace, cell wall maintenance, and peptidoglycan biochemistry using a variety of techniques in biochemistry and molecular biology. I just started my project on a bacterial autolysin. My project involves developing mutants and studying the impact of mutation on structure and function to determine importance and purpose of certain residues. 

I am so excited to work on this project and contribute to the incredible science being done in this lab.
`
    },

    {
      sortKey: 2026,
      title: "Research Assistant",
      location: "School of Optometry and Vision Science, University of Waterloo",
      dates: "May – Sep 2026",
      images: [],
      description: `
Research assistant for the Hovis Lab at the University of Waterloo. Assisting in a study examining and developing methods to test for colour vision defects intended for pilots in the Royal Canadian Airforce (RCAF).

This co-op has been a blast so far. Most of my work is data analysis using Python, R, and Excel. I have done most of my work with python building large scale machine learning models to assist in seperating normal colour vision individuals from defective colour vision individuals. Over my time so far, I have worked a lot with PCA, Gaussian Mixture Models, Logistic Regression, Mahalobnis distance models, and a whole lot of manipulating data with Pandas, and plotting it with Plotly and matplotlib. I also presented my work to members of Defense Research and Development Canada. There has been a lot of trial and error which has really put my coding skills to the test and I am so grateful I got this opportunity.
      `
    },
    {
      sortKey: 2025,
      title: "Research Assistant",
      location: "Wheat Breeding and Genetics, University of Guelph Ridgetown Campus",
      dates: "May – Aug 2025",
      images: ["/wheat1.jpeg", "/wheat2.jpeg"],
      description: `
Research assistant for Dr. Ljiljana Tamburic-Ilincic's group at University of Guelph Ridgetown Campus. Assisted in winter wheat breeding study with the goal of developing strains with resistance to Fusarium Head Blight (FHB) while also having ideal agronomic traits such as yield and height.

This co-op took me out of my comfort zone as I had to move away from home and live in a small town just outside of Chatham-Kent for the summer. I felt like I was learning something new every day of this co-op. The study had many moving parts so it wasn't irregular to start your day in the lab making Fusarium graminereum inoculum and end it in the middle of nowhere at a remote trial plot, collecting data about agronomic and disease related traits for the different strains. Once the wheat had been harvested, I got to work developing a model in Python that analyzed all of the data we had been collecting over the previous months. This model assisted in the selection of the ideal strains that balanced agronomic traits with disease resistance for potential germplasm development or comercialization. The model ended up working pretty well, and I wrote a report on the results I got which my supervisor was quite happy with.

I learned so much about a field I knew almost nothing about going in, and I have a newfound appreciation for agricultural science and all the work that goes into many of these studies.
      `
    },
    {
      sortKey: 2024,
      title: "QA Student / Medical Physics Technician",
      location: "Waterloo Region Health Network (WRHN) Midtown Cancer Centre",
      dates: "Sep – Dec 2024",
      images: ["/linac.jpg"],
      description: `
Medical Physics Technician for the Medical Physics department at WRHN Midtown Cancer Centre (formerly Grand River Regional Cancer Centre).

This co-op revolved around LINACS which are linear accelerator machines used in radiation oncology to blast cancer cells with focused high energy radiation. One of my duties was to perform quality assurance on these machines every night once the clinical day was over. These machines were a true treat to work with and by far the most beautifully engineered things I have ever got the priviledge of working with. The experiments that I performed were very precise and interesting to conduct. These experiments would range from testing the calibration of the movement of the LINACs to measuring the calibration of the dose delivery (how much radiation is being delivered and how concentrated the radiation is).

The Medical physics department at WRHN had some of the most brilliant people I have ever met. Among them were Dr. Johnson Darko and Dr. Ernest Osei who were my main supervisors. I conducted two seperate projects over my 4 months at this job. The first study looked at how the use of a more advanced bed that could pitch and roll, giving the machine more degrees of freedom could impact the dosimetry for esophageal cancer treatment. The second study looked at how dosimetry is impacted when radiation margins are increased for brain cancer sterotactic radiosurgery. Both of these studies involved working with a large clinical database, querying and analyzing large amounts of patient data with SQL and Python. I also used some very cool medical physics software to simulate how the dosimetry changes when the radiation margins are increased.

I am so grateful that I got the opportunity to learn from such talented scientists. The people that mentored me throughout this co-op changed the way that I approach the world.
      `
    }
  ];

  const sortedExperiences = experiences.sort((a, b) => b.sortKey - a.sortKey);

  return (
    <div className="experience-wrapper">

      {/* TOP NAV BAR */}
      <div className="top-nav">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/experience" className="nav-link">Experience</Link>
  <Link to="/hobbies" className="nav-link">Hobbies</Link>
  <Link to="/projects" className="nav-link">Projects</Link>
</div>


      <h1 className="experience-title">Experience</h1>

      {sortedExperiences.map((exp, index) => (
        <div key={index} className="experience-card">

          {/* Ribbon Header */}
          <div className="experience-header">
            <h2>{exp.title}</h2>
            <p>{exp.location}</p>
            <p className="dates">{exp.dates}</p>
          </div>

          {/* Images */}
          <div className="experience-images">
            {exp.images.map((src, i) => (
              <img key={i} src={src} alt="" className="exp-img" />
            ))}
          </div>

          {/* Description */}
          <p
  className="experience-description"
  dangerouslySetInnerHTML={{ __html: exp.description }}
></p>

        </div>
      ))}
    </div>
  );
}

