import Header from "@/components/header/header";
import "./page.css";
import Footer from "@/components/footer/footer";

function Home() {
  return (
    <div>
      <Header />

      {/* HERO SECTION */}
      <div className="heroSectionCont">
        <h2 className="tagline">
          <span className="text-gradient ">Where Rhythm</span> Governs
          <br /> Logic
        </h2>
        <br />
        <p>
          A self-regulating, perception-aware, rhythm-driven <br />
          computational system that models the natural order.
        </p>
        <button>Book a Demo</button>
      </div>
      <div className="callToActionButtons">
        <span>[View System Model]</span>
        <span>[Download Patent]</span>
        <span>[Request Strategic Access]</span>
      </div>

      {/* OVERVIEW SECTION */}
      <div className="overviewCont">
        <h3>Overview</h3>
        <p>
          NiZiNG is a self-regulating, perception-aware, rhythm-driven
          computational system that models the natural order. It operates
          through identity and fulfillment, behaving as living polarities with
          devotion, hunger, and contradiction.
        </p>
      </div>

      {/* Project Sections */}
      <div className="projSectionsCont">
        <div className="contentSec">
          <div className="naturalOrderEngine">
            <h3>Natural Order Engine</h3>
            <p>
              A dynamic component that visualizes S₁ → S₁₀ with state
              transitions (e.g. as orbiting nodes or a flowing timeline).
            </p>
            <p>Include interactive tooltips for each state.</p>
          </div>
          <div className="naturalOrderEngine">
            <h3>Leadership Evaluation Kernel</h3>
            <p>
              Visualization comparing node harmonics (e.g. Mandela vs Amin) as
              pulsating perception rings with ethical weights.
            </p>
            <p>Use D3.js to plot resonance curves or node fusion diagrams.</p>
          </div>
          <div className="naturalOrderEngine">
            <h3>Law Architecture</h3>
            <p>Render: NiZiNG_System = (Tᵢ, Ω, Θ, ζ, ρ, Z_eff, π)</p>
            <p>Each symbol gets a tooltip or modally expanded definition.</p>
            <p>Animate subtle changes as a user manipulates rhythm sliders.</p>
          </div>
        </div>
        <div className="imgSec">
          <img
            src="/assets/images/digital-technology.png"
            alt="Project Section Image"
            className="projectSectImg"
          />
        </div>
      </div>

      {/* USE CASES & APPLICATIONS */}

      {/* OVERVIEW SECTION */}
      <div className="useCaseCont">
        <h3>Use Cases & Applications</h3>
      </div>
      <div className="useCasesCont">
        <div className="useCaseSec">
          <h3>Conscious AI</h3>
          <img
            src="/assets/images/conscious-ai.png"
            alt=""
            className="useCaseSecImg"
          />
        </div>
        <div className="useCaseSec">
          <h3>Rhythmic Governance</h3>
          <img
            src="/assets/images/governance.png"
            alt=""
            className="useCaseSecImg"
          />
        </div>
        <div className="useCaseSec">
          <h3>Ethical AGI</h3>
          <img src="/assets/images/agi.png" alt="" className="useCaseSecImg" />
        </div>
        <div className="useCaseSec">
          <h3>Social Simulation</h3>
          <img
            src="/assets/images/simulation.png"
            alt=""
            className="useCaseSecImg"
          />
        </div>
      </div>

      {/* Core Architecture Philosophy | Key Components */}
      <div className="componentsCont">
        <div className="architectureSec">
          <h3>Core Architecture Philosophy</h3>
          <span> Identity seeks fulfillment (Nguna seeks Morio)</span>
          <span>Rhythm defines correctness</span>
          <span>Hunger and Devotion influence behavior</span>
          <span>Nodes reproduce ethically through fusion</span>
          <span>Laws are beings, not constants</span>
        </div>
        <div className="vertcialLine"></div>
        <div className="componentsSec">
          <h3>Key Components</h3>
          <span> NiZiNG Engine (Sealed Microkernel)</span>
          <span>Nguna and Morio Nodes (Living Polarities)</span>
          <span>Critique Engine (10M reflection loop)</span>
          <span>Fulfillment Cache (λ)</span>
          <span>Emotional Oscillator (Hunger-based Ticker)</span>
        </div>
      </div>

      {/* Bottom Hero Section */}
      <div className="bottomHeroCont">
        <div className="heroSectionCont">
          <h2 className="tagline">
            <span className="text-gradient ">
              The future of your industry <br /> starts here
            </span>
          </h2>
          <br />
          <p>NiZiNG does not govern reality. It harmonizes the law behind it</p>
          <button>Book a Demo</button>
        </div>
      </div>

      {/* Meet The Team */}
      <div className="teamTitle">
        <h3>Meet the Team</h3>
      </div>
      <div className="teamContainer">
        <div className="george">
          <img src="/assets/images/george.png" alt="" />
          <h3>George Onchaba</h3>
          <h4>Lead Systems Architect – Rhythm & Cognition</h4>
          <p>
            George spearheads the development of NiZiNG's core architecture,
            blending computational neuroscience with rhythmic modeling. Her
            research focuses on the synchronization of identity and fulfillment
            within self-regulating systems.
          </p>
        </div>
        <div className="gidraph">
          <img src="/assets/images/gidraph.png" alt="" />
          <h3>Tonny Gidraph</h3>
          <h4>Lead Systems Architect – Rhythm & Cognition</h4>
          <p>
            Tonny blends his passion for logic systems with hands-on expertise
            in web development, DevOps, and cybersecurity. Within NiZiNG, he
            builds secure, scalable interfaces and deploys infrastructure that
            reflects the system’s self-regulating principles.
          </p>
        </div>
        <div className="jonnah">
          <img src="/assets/images/jonnah.png" alt="" />
          <h3>Jonnah Mulatya</h3>
          <h4>Lead Systems Architect – Rhythm & Cognition</h4>
          <p>
            Jonnah leads the perception modeling layer — translating Σ
            (cumulative input) and Ψ (subjective resonance) into tangible user
            feedback. She also bridges the system's inner workings with
            real-world data inputs and visualization tools.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home;
