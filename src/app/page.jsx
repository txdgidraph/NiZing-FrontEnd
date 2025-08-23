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
            Run systems that never
            <br /> <span className="text-gradient">violate truths</span> — even
            under chaos.
          </span>
          <span className="top_page_tagline_para">
            NiGeNje fuses invariants built-in, a predictive control plane, and
            tiered finality.
          </span>
          <div className="top_page_cta_buttons">
            <button className="top_page_button_request-pilot button-gradient">
              Request Pilot
            </button>
            <button className="top_page_button_technical_deep_hive">
              View technical deep-dive
            </button>
            <button className="top_page_button_get_sandbox">Get Sandbox</button>
          </div>
        </div>
        <div className="top_page_right_cont">
          <div className="top_page_right_cont_title">At a glance</div>
          <span className="top_page_right_cont_desc">
            Invariants by construction • Predictive pacing • Tiered finality •
            Auditability • Graceful degradation • Low-latency ACKs
          </span>
          <div className="top_page_right_cont_upper_btns_cont">
            <span>App requests</span>
            <span>→</span>
            <span>Substrate (invariants)</span>
          </div>
          <div className="top_page_right_cont_lower_btns_cont">
            <span>→</span>
            <span>Finality (T0–T3)</span>
            <span></span>
          </div>
          <div className="top_page_right_cont_lower_desc">
            The control plane detects drift early and paces/isolate before
            queues blow up.
          </div>
        </div>
      </div>

      {/* Work email for updates */}
      <div className="top_page_worl-email-4-updates">
        <input type="text" placeholder="Work email for updates" />
        <button>Notify Me</button>
      </div>

      {/* Why Us Section*/}
      {/*Why Us Section*/}
      {/*Why Us Section */}
      <div className="top_page_why_us_title">
        <span>Why Us</span>
      </div>
      <div className="top_page_why_us_section">
        <div className="top_page_Legacy-trade-offs_cont">
          <span>Legacy trade-offs</span>
          <span>
            Classical stacks force a choice: be available and risk breaking
            truth, or be consistent and stall. Guarantees sit above the runtime,
            so incidents spread.
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Invariant by construction</span>
          <span>
            Define truths once; NiGeNje enforces them at execution. No
            reconciliation. No after-the-fact repairs.
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Predictive Stability</span>
          <span>
            Early-warning signals pace and isolate before collapse. Fewer
            incidents, smoother rollouts, faster recovery.
          </span>
        </div>
      </div>

      {/* Pillars
Pillars 
Pillars  */}
      <div className="pillar_section_cont">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Pillar</th>
              <th>Plain speak</th>
              <th>Enterprise impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Pillar">Invariants Built-In</td>
              <td data-label="Plain speak">Prevents violations at execution</td>
              <td data-label="Enterprise impact">
                Fewer incidents; regulatory confidence
              </td>
            </tr>
            <tr>
              <td data-label="Pillar">Predictive Control</td>
              <td data-label="Plain speak">
                Detects drift; paces/isolate early
              </td>
              <td data-label="Enterprise impact">
                Higher uptime; predictable SLOs
              </td>
            </tr>
            <tr>
              <td data-label="Pillar">Tiered Finality</td>
              <td data-label="Plain speak">
                Pick latency vs. auditability per op
              </td>
              <td data-label="Enterprise impact">
                Lower tail latency; provable audits
              </td>
            </tr>
          </tbody>
        </table>
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
              Execution environment embedding invariants and tiered finality.
              Designed for graceful degradation and auditable outcomes.
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
            <span className="toppage_products_prod1-substrate">
              Control Plane (CP)
            </span>
            <span className="toppage_products_prod1-para">
              Orchestrates pacing, isolation, and targeted slowdowns to prevent
              cascading failures and keep SLOs predictable.
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
            <span className="toppage_products_prod1-substrate">CP‑AI</span>
            <span className="toppage_products_prod1-para">
              Optimization to intent (SLOs, cost ceilings) via <br />
              rate, queueing, and placement control.
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

      {/* Proof*/}
      {/*Proof*/}
      {/*Proof*/}
      <div className="top_page_why_us_title">
        <span>Proof</span>
      </div>
      <div className="top_page_why_us_section">
        <div className="top_page_Legacy-trade-offs_cont">
          <span>Case studies</span>
          <span>
            NDA-protected pilots. Shareable metrics provided during diligence.
            Example: prevented hundreds of invariant-breaking attempts with no
            downtime via T2/T3 anchors.
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Video: Tiered Finality</span>
          <span>
            30-sec overview of T0–T3 trade-offs and how audit anchors work.
            (Video shared upon request.)
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Architecture diagram</span>
          <span>
            Interactive diagram shows how invariants block violations before
            commit. See technical deep-dive below.
          </span>
        </div>
      </div>

      {/* Benchmarks & Outcomes
       */}
      {/*Benchmarks & Outcomes
       */}
      {/*Benchmarks & Outcomes
       */}
      <div className="top_page_why_us_title">
        <span>Benchmarks & Outcomes</span>
      </div>
      <div className="top_page_why_us_section">
        <div className="top_page_Legacy-trade-offs_cont">
          <span>Latency (non-critical ops)</span>
          <span>
            T0–T1 reduces tail latency bands by ~3–20× vs. all-T2 stacks
            (context-dependent).
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Throughput (mixed AP/CP)</span>
          <span>
            2–5× higher steady throughput by avoiding coordination on
            non-critical operations.
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Incident frequency</span>
          <span>
            Order-of-magnitude reduction in invariant violations during
            partitions/outages.
          </span>
        </div>
      </div>
{/* Architecture — invariants at execution
Architecture — invariants at execution
Architecture — invariants at execution */}
<div class="flow-container">
  <div class="card">
    <h3>Client / App</h3>
    <p>Requests</p>
  </div>
  <div class="arrow">→</div>

  <div class="card">
    <h3>Invariant Gate</h3>
    <p>Rejects invalid ops</p>
    <p>Pre-commit checks</p>
  </div>
  <div class="arrow">→</div>

  <div class="card control-plane">
    <h3>Control Plane</h3>
    <p>Pacing / Isolation</p>
    <p>Drift detection</p>
  </div>
  <div class="arrow">→</div>

  <div class="fork">
    <div class="card">
      <h3>Commit Layer</h3>
      <p>T0 • T1 • T2 • T3</p>
    </div>
    <div class="arrow vertical">↓</div>
    <div class="card">
      <h3>Anchors & Audit</h3>
      <p>Immutable logs</p>
      <p>On-demand proof</p>
    </div>
  </div>
</div>




      {/* Security & Compliance
       */}
      {/*Security & Compliance
       */}
      {/*Security & Compliance
       */}
      <div className="top_page_why_us_title">
        <span>Security & Compliance</span>
      </div>
      <div className="top_page_why_us_section">
        <div className="top_page_Legacy-trade-offs_cont">
          <span>Encryption</span>
          <span>
            End-to-end encryption in transit & at rest. Access scoped by least
            privilege.
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Auditability</span>
          <span>
            Immutable logs & anchored proofs for critical operations. On-demand
            audit exports.
          </span>
        </div>
        <div className="top_page_Legacy-trade-offs_cont ">
          <span>Readiness</span>
          <span>
            GDPR-ready. SOC 2/ISO27001 pathways during production engagements.
          </span>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
