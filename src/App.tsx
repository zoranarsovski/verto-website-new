/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Network, 
  Star, 
  Layout, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  MousePointer2, 
  Users, 
  Search, 
  Target, 
  Brain, 
  ExternalLink, 
  Check,
  Globe,
  Linkedin
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-high">
    <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold tracking-tight text-primary">VertoDigital</div>
      <div className="hidden md:flex items-center space-x-10">
        <a className="text-secondary border-b-2 border-secondary pb-1 font-medium" href="#">Solutions</a>
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300" href="#">Services</a>
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300" href="#">Case Studies</a>
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300" href="#">Insights</a>
      </div>
      <div className="flex items-center space-x-6">
        <Network className="w-5 h-5 text-on-surface-variant cursor-pointer hover:scale-95 duration-200" />
        <a className="text-on-surface-variant font-medium hidden sm:block" href="#">Login</a>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:scale-95 duration-200 ease-in-out transition-all">
          Let's Talk Pipeline
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="max-w-7xl mx-auto px-8 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-7 space-y-8"
    >
      <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-primary">
        Pipeline-Driven Digital Marketing for B2B Companies
      </h1>
      <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
        How much of your marketing actually turns into pipeline? We help B2B companies answer that question — then fix it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2">
          Let’s Talk Pipeline <ArrowRight className="w-5 h-5" />
        </button>
        <button className="bg-surface-high text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-high/80 transition-colors duration-300">
          See Our Work
        </button>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="lg:col-span-5 relative"
    >
      <div className="relative w-full aspect-square bg-surface-low rounded-xl p-8 overflow-hidden group">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
        <svg className="w-full h-full text-secondary/30 stroke-current fill-none" viewBox="0 0 400 400">
          <path d="M50 50 L350 50 L300 350 L100 350 Z" className="pipeline-graphic-path" strokeWidth="1.5"></path>
          <circle cx="200" cy="50" fill="currentColor" opacity="0.8" r="12"></circle>
          <path d="M200 50 L200 350" strokeWidth="1"></path>
          <path d="M50 150 L350 150" strokeDasharray="4 2" strokeWidth="0.5"></path>
          <path d="M50 250 L350 250" strokeDasharray="4 2" strokeWidth="0.5"></path>
          <rect className="text-secondary" height="40" rx="4" strokeWidth="2" width="40" x="180" y="130"></rect>
          <rect className="text-primary" height="30" rx="2" strokeWidth="2" width="30" x="185" y="235"></rect>
          <circle className="text-secondary" cx="200" cy="350" fill="currentColor" r="8"></circle>
        </svg>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-white/50"
        >
          <p className="font-mono text-[10px] text-secondary font-bold uppercase tracking-widest">Pipeline Growth</p>
          <p className="font-mono text-2xl font-bold text-primary">+125%</p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const SocialProof = () => (
  <section className="w-full bg-surface-low py-12">
    <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="flex text-secondary">
          {[1, 2, 3, 4].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
          <Star className="w-5 h-5 fill-current opacity-50" />
        </div>
        <span className="font-mono text-sm font-bold text-primary">G2 4.9/5 RATING</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {["Neo4j", "Payhawk", "Cribl", "Camunda", "SnapLogic", "Scalefocus"].map(name => (
          <span key={name} className="font-display font-bold text-xl tracking-tight">{name}</span>
        ))}
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section className="max-w-7xl mx-auto px-8 py-32">
    <div className="mb-20 max-w-2xl">
      <p className="font-mono text-secondary text-sm font-bold tracking-[0.2em] mb-4">THE METHODOLOGY</p>
      <h2 className="text-4xl md:text-5xl font-bold text-primary">The blueprint for modern B2B growth.</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          title: "Pipeline-First Value", 
          icon: Layout, 
          desc: "Every deliverable connects to revenue. We don't optimize for vanity metrics; we optimize for stage progression and deal velocity." 
        },
        { 
          title: "AI-Powered Delivery", 
          icon: Sparkles, 
          desc: "Faster, smarter, and more proactive. Our team leverages proprietary AI stacks to handle the heavy lifting while focusing on strategy." 
        },
        { 
          title: "Profitable Growth", 
          icon: TrendingUp, 
          desc: "Scale without sacrificing margins. We architect systems that lower your customer acquisition costs while increasing deal size." 
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="p-10 bg-white border border-surface-high transition-all hover:shadow-2xl hover:shadow-primary/5 group rounded-xl"
        >
          <div className="w-12 h-12 rounded-full border border-surface-high flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <item.icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
          <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Capabilities = () => (
  <section className="w-full bg-primary text-white py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
        <div className="max-w-2xl">
          <p className="font-mono text-accent text-sm font-bold tracking-[0.2em] mb-4">OUR CAPABILITIES</p>
          <h2 className="text-4xl md:text-6xl font-bold">Engineered for demand.</h2>
        </div>
        <button className="text-accent font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Explore all services <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {[
          { title: "Pipeline Intelligence", icon: BarChart3, desc: "Uncover the data & analytics gaps that are hiding your true marketing performance." },
          { title: "Pipeline-Driven Paid Media", icon: MousePointer2, desc: "Targeting that actually converts. Media buying with a focus on high-intent pipeline." },
          { title: "Pipeline-Driven LinkedIn", icon: Users, desc: "The definitive channel for B2B. Dominate the feed and the decision-maker's mind." },
          { title: "Pipeline-Driven Organic Growth", icon: Search, desc: "SEO that generates demo requests, not just traffic. Content with architectural intent." },
          { title: "Pipeline-Driven ABM", icon: Target, desc: "Personalized engagement for your most valuable target accounts at scale." },
          { title: "Pipeline-Driven AI Visibility", icon: Brain, desc: "Ensuring your brand is what LLMs and AI agents recommend during the search phase." },
        ].map((service, i) => (
          <div key={i} className="p-12 hover:bg-white/5 transition-colors group cursor-pointer bg-primary">
            <service.icon className="w-10 h-10 mb-6 text-accent" />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-accent/80 text-sm leading-relaxed mb-6">{service.desc}</p>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProofBank = () => (
  <section className="max-w-7xl mx-auto px-8 py-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <p className="font-mono text-secondary text-sm font-bold tracking-[0.2em] mb-4">PROOF BANK</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Numbers don’t lie. Pipelines do. We fix both.</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-12">We’ve audited hundreds of millions in ad spend. The results of "Pipeline Thinking" are consistent and measurable.</p>
        <div className="space-y-12">
          {[
            { num: "01", val: "70%+", label: "of pipeline connected to ads (LinkedIn Influence)" },
            { num: "02", val: "130%", label: "increase in marketing-sourced ARR (Netgain)" },
            { num: "03", val: "125%", label: "increase in Stage 1 opportunities (SnapLogic)" },
          ].map((stat, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="font-mono text-5xl font-light text-secondary opacity-30">{stat.num}</div>
              <div>
                <h3 className="font-mono text-4xl font-bold text-primary mb-2">{stat.val}</h3>
                <p className="text-on-surface-variant">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img 
          alt="Team collaborating" 
          className="rounded-xl shadow-2xl relative z-10" 
          referrerPolicy="no-referrer"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOveHl3wxZYQG9AGkRIe3iNf6aRFnlwLV8r7hGE3F1ps1xqkq8nxANBGqvvlEm5HDXe1INH3fdWOiJYQb4BxUx_QsudR_TEL7Hu8PiJK3xvHiLXGKLSZ1eMNbtwxGJC7J-u044RHegFAXuqha3HuWsmfxl04zT5URWZrmhxHxnUNDDZh-MaPPnCQdD_F91LzDIgSDsk3aBYhoKsSPiheN--3et5uBvAP2iLid4CBiQNm-I6P2yIxmdGGqk1mUa7P45WUPFpGM0h0k" 
        />
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-0"></div>
      </div>
    </div>
  </section>
);

const Insights = () => (
  <section className="bg-surface-low py-32">
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-16">
        <p className="font-mono text-secondary text-sm font-bold tracking-[0.2em] mb-4">INSIGHTS</p>
        <h2 className="text-4xl font-bold text-primary">Pipeline Thinking.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            tag: "Strategy", 
            title: "The Death of the Marketing Qualified Lead (MQL)", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwB6J7bExOmTl8FlHnScIKRuXzH6FwHLmO4XOaJV7MUvfp1esF-1rjL83qel6LPdIsNhFE6VKyO-FY4w1mfGO6NpzYUK9FQXSfLsEl-FX8a4UHrE02pLZe4yyTy0U9_azts_xCQoJPtnVO0CwrLd7p-knChwVuoyHHkyTx-xbYAd4TUjNiSby3eAaDXPxZHF-nmTgllYIpKMHloQo05dNuOGP7tm-ofN80wqClvnPsYLEBQAGvmI4JPhDAem_hPUDH8UEcFthcJBo" 
          },
          { 
            tag: "Analytics", 
            title: "Beyond Attribution: Mapping the Dark Social Funnel", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq2rK5NbSB1TFxHcy3L6v5_mg5Kz32hTx1idL6FZ6lIv3xuCDoKFdbz7RsDSLtWuybSbMSPYjMt9qNdNNoU1BkrbSJVFvc1bD-Igk3EMCQzBP6IYdK2JyZvaOM61DcakFywWv66AP_EboFMauI_zYv1iTTtWT2zBnjJx_9_tPQL2wcKoshv7ph6k7RzqhTntS_LjVJwiWzMBIB1IFad507gC5KKrcoU5M9bi8KlDeTXbxPImXCLCOmtufhuxiB-xELlmdS9CvZwVw" 
          },
          { 
            tag: "Operations", 
            title: "Architecting for Stage 1: A B2B Growth Blueprint", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG7Ba6BKJg4Wympftvy8fwAEiBCJtWkwUK3r03Vo59yEegPR9NsCY5IMSuB7-lYwiwj1Z1q9df6lYBjpXNRKuc_bxFgViiuJGBh-VR7kd2iR8dbuqznpg6BxmilVdvsk0B2FBTio4PDTAy960v7YfhQ-AQz3nkxnFuyW9vrhd6a28brqEtTK-Wj7NTXbssXwy4XpFAKxhwfr4rhakf-Wnac780_EJ7sBPEcFn5vsiTPtTqEnvLK0zSMcm1kk0mAhYYOYVLIBPHGhk" 
          },
        ].map((article, i) => (
          <div key={i} className="bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 rounded-xl">
            <div className="h-64 overflow-hidden">
              <img 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
                src={article.img} 
              />
            </div>
            <div className="p-8">
              <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">{article.tag}</span>
              <h3 className="text-xl font-bold text-primary mb-4 leading-tight">{article.title}</h3>
              <a className="text-primary font-bold text-sm flex items-center gap-2 group-hover:text-secondary transition-colors" href="#">
                Read Article <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="w-full bg-primary py-32 overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto px-8 lg:px-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-8">
          <p className="font-mono text-accent text-sm font-bold tracking-[0.2em] uppercase">Connect With Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Ready to fix your pipeline?</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-md">
            Stop guessing and start growing. Schedule a diagnostic session with our pipeline architects today.
          </p>
          <ul className="space-y-6 pt-4">
            {[
              { title: "30-minute diagnostic call", desc: "A deep dive into your current funnel and identifying low-hanging fruit." },
              { title: "No vanity metrics", desc: "We focus solely on Stage 1 opportunities and revenue generation." },
              { title: "Clear roadmap", desc: "Walk away with a prioritized list of actions to improve pipeline velocity." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded border border-secondary/40 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">Full Name</label>
                  <input className="w-full bg-transparent border border-slate-700 text-white focus:border-secondary focus:ring-1 focus:ring-secondary/30 rounded-lg p-4 transition-all duration-300 placeholder:text-slate-600" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">Work Email</label>
                  <input className="w-full bg-transparent border border-slate-700 text-white focus:border-secondary focus:ring-1 focus:ring-secondary/30 rounded-lg p-4 transition-all duration-300 placeholder:text-slate-600" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">Company</label>
                <input className="w-full bg-transparent border border-slate-700 text-white focus:border-secondary focus:ring-1 focus:ring-secondary/30 rounded-lg p-4 transition-all duration-300 placeholder:text-slate-600" placeholder="Enter company name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">Pipeline Challenge</label>
                <select defaultValue="" className="w-full bg-primary border border-slate-700 text-white focus:border-secondary focus:ring-1 focus:ring-secondary/30 rounded-lg p-4 transition-all duration-300">
                  <option value="" disabled>Select your main objective...</option>
                  <option>Improving Lead Quality</option>
                  <option>Scaling Ad Performance</option>
                  <option>Dark Social Attribution</option>
                  <option>ABM Implementation</option>
                  <option>AI Visibility & Strategy</option>
                  <option>Other / General Audit</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 group text-lg" type="submit">
                  Let’s Talk Pipeline
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 font-mono text-center">By submitting, you agree to our privacy policy and terms.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="max-w-7xl mx-auto px-8 py-32 text-center">
    <div className="bg-gradient-to-br from-primary to-primary/80 p-20 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <Layout className="w-48 h-48 text-white" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to engineer your pipeline?</h2>
        <p className="text-accent text-xl mb-12">Join the world's fastest-growing B2B companies who have abandoned vanity metrics for revenue certainty.</p>
        <button className="bg-white text-primary px-10 py-5 rounded-lg font-bold text-xl hover:bg-surface-low transition-all duration-300 transform hover:-translate-y-1">
          Let’s Talk Pipeline
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary text-white border-t border-white/5">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-7xl mx-auto">
      <div className="space-y-6">
        <div className="text-xl font-bold text-white">VertoDigital</div>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
          Architecting high-performance digital marketing for B2B enterprises that demand pipeline certainty.
        </p>
        <div className="flex gap-4">
          <a className="text-slate-400 hover:text-white transition-colors" href="#"><Network className="w-5 h-5" /></a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#"><Globe className="w-5 h-5" /></a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
      <div className="space-y-6">
        <p className="font-display font-bold text-lg">Solutions</p>
        <ul className="space-y-4 font-mono text-xs tracking-wider">
          {["ADVERTISING", "ANALYTICS", "SEO", "ABM"].map(item => (
            <li key={item}><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform duration-300 block" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="space-y-6">
        <p className="font-display font-bold text-lg">Company</p>
        <ul className="space-y-4 font-mono text-xs tracking-wider">
          {["OUR STORY", "CLIENT RESULTS", "CAREERS", "G2 BADGE"].map(item => (
            <li key={item}><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform duration-300 block" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="space-y-6">
        <p className="font-display font-bold text-lg">Connect</p>
        <ul className="space-y-4 font-mono text-xs tracking-wider">
          {["LINKEDIN", "PRIVACY POLICY", "TERMS OF SERVICE"].map(item => (
            <li key={item}><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform duration-300 block" href="#">{item}</a></li>
          ))}
        </ul>
        <div className="pt-4">
          <p className="text-slate-500 font-mono text-[10px]">© 2026 VertoDigital. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SocialProof />
        <Methodology />
        <Capabilities />
        <ProofBank />
        <Insights />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

