import Header from "@/components/header/header";
import "./page.css";
import Footer from "@/components/footer/footer";

function Home() {
  return (
    <div>
      <Header />

      {/* TOP PAGE SECTION */}
      <div className="top_page_main_container">
        <div className="top_page_left_cont">
          <span className="top_page_tagline">
            Rhythmic
            <br /> Intelligence for <br />
            <span className="text-gradient">Real‑World</span> <br /> Systems
          </span>
          <span className="top_page_tagline_para">
            NiGeNje unifies the Substrate runtime, Control Plane (CP), and CP‑AI
            optimization to keep fleets fast under chaos.
          </span>
          <div className="top_page_cta_buttons">
            <button className="top_page_sandbox-access button-gradient">
              Request Sandbox Access
            </button>
            <button className="top_page_request-access">
              Book 20-min Demo
            </button>
          </div>
        </div>
        <div className="top_page_right_cont">
          <div className="top_page_youtube-video-cont">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-sB12gk9ESA?si=SkvreyBukti9ofIm"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="HITW_conatiner">
        <span className="HITW_title">HOW IT WORKS</span>
        <span className="HITW_para">
          Substrate on every node enforces timing & resource policies; the
          Control Plane coordinates fleet actions; CP-AI learns policies that
          minimize latency, cascades, and cost.
        </span>
      </div>

      {/* Products */}
      <div className="toppage_products_container">
        <span className="toppage_products_title">PRODUCTS</span>
        <span className="toppage_products_tagline">
          Three pillars, one flow
        </span>
        <span className="toppage_products_para">
          Substrate on the machines. CP for global policy. CP‑AI to steer to
          intent. Everything <br /> authenticated and licensed.
        </span>

        <div className="toppage_products_types_cont">
          <div className="toppage_products_substrate">
            <div className="toppage_products_topic">
              <span className="toppage_products_node-runtime-dot"></span>
              <span className="toppage_products_node-runtime">
                Node Runtime
              </span>
            </div>
            <span className="toppage_products_prod1-substrate">Substrate</span>
            <span className="toppage_products_prod1-para">
              Timing, pacing, and resource isolation per node <br />
              with cooperative back‑pressure.
            </span>
            <div className="toppage_products_prod1-buttons">
              <button className="toppage_products_prod1-docs">Docs</button>
              <button className="toppage_products_prod1-install">
                Install
              </button>
            </div>
          </div>

          <div className="toppage_products_control-plane">
            <div className="toppage_products_topic">
              <span className="toppage_products_node-runtime-dot"></span>
              <span className="toppage_products_node-runtime">
                Node Runtime
              </span>
            </div>
            <span className="toppage_products_prod1-substrate">Control Plane (CP)
</span>
            <span className="toppage_products_prod1-para">
              Fleet‑wide policy, tenant fairness, and orchestrated <br />pauses/boosts.
            </span>
            <div className="toppage_products_prod1-buttons">
              <button className="toppage_products_prod1-docs">Docs</button>
              <button className="toppage_products_prod1-install">
                Install
              </button>
            </div>
          </div>

          <div className="toppage_products_cp-ai">
            <div className="toppage_products_topic">
              <span className="toppage_products_node-runtime-dot"></span>
              <span className="toppage_products_node-runtime">
                Node Runtime
              </span>
            </div>
            <span className="toppage_products_prod1-substrate">CP‑AI
</span>
            <span className="toppage_products_prod1-para">
             Optimization to intent (SLOs, cost ceilings) via <br />rate, queueing, and placement control.
            </span>
            <div className="toppage_products_prod1-buttons">
              <button className="toppage_products_prod1-docs">Docs</button>
              <button className="toppage_products_prod1-install">
                Install
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
