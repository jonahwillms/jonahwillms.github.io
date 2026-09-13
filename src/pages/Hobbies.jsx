import "./Hobbies.css";
import { Link } from "react-router-dom";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Amateur Astronomy",
      images: ["/astro1.jpeg", "/astro2.jpg","/astro3.jpeg"], // optional, replace with your filenames
      description: `
I had a Celestron AstroMaster 130 5 inch reflector telescope gifted to me by my great uncle. It has taken a lot of troubleshooting, but after a few months I figured out how to properly collimate the scope, and align the GoTo feature of the telescope (though I haven't got the alignment perfect yet).

I love going to Tobermory where the light pollution is very low and seeing what I can find. At my most recent outing, I got a great view of saturn, some binary stars, and the andromeda galaxy. It's so peaceful to go out late at night and just look at the stars.

I have a long term goal to try to see all of the Messier objects. Though before I even get close to that goal I need to continue refining my telescope and figuring out how to use tracking software. My great uncle also gave me wavelength filters that I want to use to see features of planets like the ice caps on Mars or more details on Jupiter.
      `
    },
    {
      title: "Disc Golf",
      images: ["/disc1.jpeg"], // optional
      description: `
I started playing disc golf about 2 years ago. UWaterloo has a course very close to my student house, so my roommates and I play this course very consistently. As we have gotten better, we have started playing at more courses in the area and last year me and my roommate joined our local disc golf club.

For people who don't know what disc golf is, it has the same rules as golf except instead of a bag of clubs, you have a bag of around 15 discs. The discs all fly differently which allows you to shape your shots. To help visualize this, there's a photo above of me holding one of my drivers beside one of my approach discs (you can see they look very different). Disc golf courses are often in the woods, where instead of avoiding bunkers, you are trying to squeeze your disc through tight wooded fairways.

This sport has been great stress relief for me over these busy 2 years of university. The sport has also connected me with a great community of disc golf enthusiasts in Waterloo region.
      `
    },
    {
      title: "Music",
      images: [], // optional
      description: `
I enjoy messing around and making music in my free time. I have been playing the cello since highschool, I have been learning the guitar for about half a year, and I have a MIDI keyboard and music production software on my computer. I have no intention to release the music I make anywhere, but I love to just sit down and jam out using my instruments and Ableton.
      `
    }
  ];

  return (
    <div className="hobbies-wrapper">

      {/* TOP NAV BAR */}
      <div className="top-nav">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/experience" className="nav-link">Experience</Link>
  <Link to="/hobbies" className="nav-link">Hobbies</Link>
  <Link to="/projects" className="nav-link">Projects</Link>
</div>


      <h1 className="hobbies-title">Hobbies</h1>

      {hobbies.map((hob, index) => (
        <div key={index} className="hobby-card">

          {/* Ribbon Header */}
          <div className="hobby-header">
            <h2>{hob.title}</h2>
          </div>

          {/* Images */}
          <div className="hobby-images">
            {hob.images.map((src, i) => (
              <img key={i} src={src} alt="" className="hob-img" />
            ))}
          </div>

          {/* Description */}
          <p className="hobby-description">{hob.description}</p>
        </div>
      ))}
    </div>
  );
}

