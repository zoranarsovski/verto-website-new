#!/usr/bin/env python3
"""
Migration script: replace nav + footer blocks in all HTML files with
new versions that surface the deeper /services architecture.

Per-page differences (aria-current) are computed from the file path.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent  # repo root


# ---------------------------------------------------------------------------
# Per-page state · which top-level nav link is the current page
# ---------------------------------------------------------------------------
def page_state(rel_path: str) -> dict:
    """Return which top-level nav item is the current page for this file."""
    state = {
        "is_services": False,
        "is_about": False,
        "is_contact": False,
        "is_careers": False,
    }
    if rel_path == "about.html":
        state["is_about"] = True
    elif rel_path == "contact.html":
        state["is_contact"] = True
    elif rel_path == "careers.html":
        state["is_careers"] = True
    elif rel_path.startswith("services"):
        state["is_services"] = True
    return state


# ---------------------------------------------------------------------------
# New nav block
# ---------------------------------------------------------------------------
def render_nav(state: dict) -> str:
    s = state
    # Helpers for current-page styling
    def link(href, label, is_current, extra_class=""):
        if is_current:
            cls = "text-brand-blue font-medium transition-colors"
            aria = ' aria-current="true"'
        else:
            cls = "text-brand-dark hover:text-brand-blue transition-colors"
            aria = ""
        return f'<a class="{cls}{(" " + extra_class) if extra_class else ""}" href="{href}"{aria}>{label}</a>'

    def mlink(href, label, is_current):
        if is_current:
            cls = "text-brand-blue font-medium py-3 transition-colors"
            aria = ' aria-current="true"'
        else:
            cls = "text-brand-dark hover:text-brand-blue py-3 transition-colors"
            aria = ""
        return f'<a class="{cls}" href="{href}"{aria}>{label}</a>'

    # Services trigger styling
    services_trigger_cls = (
        "text-brand-blue font-medium transition-colors"
        if s["is_services"]
        else "text-brand-dark hover:text-brand-blue transition-colors"
    )
    services_trigger_aria = ' aria-current="true"' if s["is_services"] else ""

    return f"""    <!-- Navbar -->
    <nav class="sticky top-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-brand-dark/10">
      <div class="container-brand flex justify-between items-center py-5">
        <a href="/" class="flex items-center" aria-label="VertoDigital home"><img src="/VertoDigital-brandmark-color-black.svg" alt="VertoDigital" class="h-11 w-auto" /></a>
        <div class="hidden md:flex items-center space-x-8 lg:space-x-10 text-[15px]">
          {link("/#case-studies", "Case studies", False)}

          <!-- Services · desktop dropdown -->
          <div class="relative group">
            <a class="{services_trigger_cls} inline-flex items-center gap-1" href="/services"{services_trigger_aria} aria-haspopup="true">
              Services
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"></i>
            </a>
            <!-- Dropdown panel · group-hover and group-focus-within -->
            <div class="absolute right-0 lg:left-1/2 lg:-translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block z-50">
              <div class="bg-white rounded-2xl shadow-2xl shadow-brand-dark/10 p-7 grid grid-cols-3 gap-7 w-[680px]">
                <!-- Inbound -->
                <div>
                  <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mb-3">Stream 1 · Inbound</p>
                  <ul class="space-y-2.5 text-[14px]">
                    <li><a class="text-brand-dark font-medium hover:text-brand-blue transition-colors" href="/services/inbound-pipeline-growth">Pipeline growth</a></li>
                    <li><a class="text-brand-dark/75 hover:text-brand-blue transition-colors" href="/services/inbound/linkedin-paid-social">LinkedIn Paid Social</a></li>
                    <li><a class="text-brand-dark/75 hover:text-brand-blue transition-colors" href="/services/inbound/paid-search">Paid Search</a></li>
                    <li><a class="text-brand-dark/75 hover:text-brand-blue transition-colors" href="/services/inbound/seo-and-aeo">SEO &amp; AEO</a></li>
                  </ul>
                </div>
                <!-- Outbound -->
                <div>
                  <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mb-3">Stream 2 · Outbound</p>
                  <ul class="space-y-2.5 text-[14px]">
                    <li><a class="text-brand-dark font-medium hover:text-brand-blue transition-colors" href="/services/outbound-pipeline-growth">Pipeline growth</a></li>
                    <li><a class="text-brand-dark/75 hover:text-brand-blue transition-colors" href="/services/outbound/abm-6sense-demandbase">6sense &amp; DemandBase</a></li>
                    <li><a class="text-brand-dark/75 hover:text-brand-blue transition-colors" href="/services/outbound/linkedin-ai-targeting">LinkedIn AI Targeting</a></li>
                    <li><a class="text-brand-dark/75 hover:text-brand-blue transition-colors" href="/services/outbound/contact-level-abm">Contact-Level ABM</a></li>
                  </ul>
                </div>
                <!-- Spine + engagement -->
                <div class="flex flex-col gap-5">
                  <div>
                    <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mb-3">The spine</p>
                    <ul class="space-y-2.5 text-[14px]">
                      <li><a class="text-brand-dark font-medium hover:text-brand-blue transition-colors" href="/services/pipeline-intelligence">Pipeline Intelligence</a></li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mb-3">Start here</p>
                    <ul class="space-y-2.5 text-[14px]">
                      <li><a class="text-brand-dark hover:text-brand-blue transition-colors" href="/scan">Pipeline Readiness Scan</a></li>
                      <li><a class="text-brand-dark/75 hover:text-brand-blue transition-colors" href="/services">All services</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {link("/#insights", "Research", False)}
          {link("/about", "About", s["is_about"])}
          {link("/contact", "Contact", s["is_contact"])}
        </div>
        <div class="flex items-center gap-3 md:gap-4">
          <a href="/#report" class="hidden lg:inline-flex items-center gap-2 text-brand-dark text-sm font-medium hover:text-brand-blue transition-colors">
            <i data-lucide="file-text" class="w-4 h-4"></i>
            2026 Pipeline Report
          </a>
          <a href="/contact" class="hidden md:inline-flex bg-brand-dark hover:bg-brand-blue text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors items-center gap-2">
            Book a call <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
          <button id="mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu-panel" aria-label="Open menu" class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-brand-dark hover:bg-brand-dark/5 transition-colors">
            <span class="menu-icon-stack" aria-hidden="true">
              <span class="hamburger-icon"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></span>
              <span class="dollar-icon">$</span>
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile dropdown panel · expandable Services via <details> -->
      <div id="mobile-menu-panel" class="hidden md:hidden absolute top-full left-0 right-0 border-t border-brand-dark/10 bg-white shadow-lg shadow-brand-dark/5 max-h-[80vh] overflow-y-auto">
        <div class="container-brand py-3 flex flex-col text-[15px]">
          {mlink("/#case-studies", "Case studies", False)}

          <details class="group nav-services-mobile">
            <summary class="flex items-center justify-between py-3 cursor-pointer {('text-brand-blue font-medium' if s['is_services'] else 'text-brand-dark hover:text-brand-blue')} transition-colors">
              <span>Services</span>
              <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
            </summary>
            <div class="pb-3 pl-3 border-l-2 border-brand-light/40 ml-1 space-y-1">
              <a class="block py-2 text-[14px] text-brand-dark hover:text-brand-blue font-medium" href="/services">All services · overview</a>
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mt-3 mb-1.5">Stream 1 · Inbound</p>
              <a class="block py-1.5 text-[14px] text-brand-dark hover:text-brand-blue" href="/services/inbound-pipeline-growth">Pipeline growth</a>
              <a class="block py-1.5 text-[14px] text-brand-dark/75 hover:text-brand-blue" href="/services/inbound/linkedin-paid-social">LinkedIn Paid Social</a>
              <a class="block py-1.5 text-[14px] text-brand-dark/75 hover:text-brand-blue" href="/services/inbound/paid-search">Paid Search</a>
              <a class="block py-1.5 text-[14px] text-brand-dark/75 hover:text-brand-blue" href="/services/inbound/seo-and-aeo">SEO &amp; AEO</a>
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mt-3 mb-1.5">Stream 2 · Outbound</p>
              <a class="block py-1.5 text-[14px] text-brand-dark hover:text-brand-blue" href="/services/outbound-pipeline-growth">Pipeline growth</a>
              <a class="block py-1.5 text-[14px] text-brand-dark/75 hover:text-brand-blue" href="/services/outbound/abm-6sense-demandbase">6sense &amp; DemandBase</a>
              <a class="block py-1.5 text-[14px] text-brand-dark/75 hover:text-brand-blue" href="/services/outbound/linkedin-ai-targeting">LinkedIn AI Targeting</a>
              <a class="block py-1.5 text-[14px] text-brand-dark/75 hover:text-brand-blue" href="/services/outbound/contact-level-abm">Contact-Level ABM</a>
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mt-3 mb-1.5">The spine</p>
              <a class="block py-1.5 text-[14px] text-brand-dark hover:text-brand-blue" href="/services/pipeline-intelligence">Pipeline Intelligence</a>
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium mt-3 mb-1.5">Start here</p>
              <a class="block py-1.5 text-[14px] text-brand-dark hover:text-brand-blue" href="/scan">Pipeline Readiness Scan</a>
            </div>
          </details>

          {mlink("/#insights", "Research", False)}
          {mlink("/about", "About", s["is_about"])}
          {mlink("/contact", "Contact", s["is_contact"])}
          <a class="text-brand-dark hover:text-brand-blue py-3 transition-colors inline-flex items-center gap-2" href="/#report">
            <i data-lucide="file-text" class="w-4 h-4"></i>
            2026 Pipeline Report
          </a>
          <a href="/contact" class="mt-3 bg-brand-dark hover:bg-brand-blue text-white py-3 rounded-lg font-medium text-[15px] transition-colors flex items-center justify-center gap-2">
            Book a call <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </nav>"""


# ---------------------------------------------------------------------------
# New footer block
# ---------------------------------------------------------------------------
FOOTER_HTML = """    <!-- Footer -->
    <footer class="bg-navy text-cool-gray">
      <div class="container-brand py-20">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          <!-- Brand column -->
          <div class="md:col-span-3 space-y-6">
            <a href="/" class="flex items-center" aria-label="VertoDigital home"><img src="/VertoDigital-brandmark-color-white.svg" alt="VertoDigital" class="h-11 w-auto" /></a>
            <p class="text-cool-gray text-sm leading-relaxed max-w-xs">The pipeline agency for B2B technology companies. Based in Boston. Trusted by CMOs globally.</p>
            <div class="flex gap-4">
              <a class="text-cool-gray hover:text-white transition-colors" href="https://www.linkedin.com/company/vertodigital" target="_blank" rel="noopener noreferrer" aria-label="VertoDigital on LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a class="text-cool-gray hover:text-white transition-colors" href="https://www.youtube.com/@vertodigital" target="_blank" rel="noopener noreferrer" aria-label="VertoDigital on YouTube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              <a class="text-cool-gray hover:text-white transition-colors" href="https://www.instagram.com/vertodigitalagency/" target="_blank" rel="noopener noreferrer" aria-label="VertoDigital on Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            </div>
            <a href="https://www.g2.com/products/vertodigital/reviews" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-cool-gray hover:text-white text-sm transition-colors">
              ★ 4.9 on G2 · 37 reviews
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <!-- Inbound -->
          <div class="md:col-span-2 space-y-5">
            <p class="font-medium text-sm text-white">Inbound</p>
            <ul class="space-y-3 text-sm">
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/inbound-pipeline-growth">Pipeline growth</a></li>
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/inbound/linkedin-paid-social">LinkedIn Paid Social</a></li>
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/inbound/paid-search">Paid Search</a></li>
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/inbound/seo-and-aeo">SEO &amp; AEO</a></li>
            </ul>
          </div>

          <!-- Outbound -->
          <div class="md:col-span-2 space-y-5">
            <p class="font-medium text-sm text-white">Outbound</p>
            <ul class="space-y-3 text-sm">
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/outbound-pipeline-growth">Pipeline growth</a></li>
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/outbound/abm-6sense-demandbase">6sense &amp; DemandBase</a></li>
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/outbound/linkedin-ai-targeting">LinkedIn AI Targeting</a></li>
              <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/outbound/contact-level-abm">Contact-Level ABM</a></li>
            </ul>
          </div>

          <!-- Spine + Company -->
          <div class="md:col-span-2 space-y-6">
            <div class="space-y-5">
              <p class="font-medium text-sm text-white">Spine</p>
              <ul class="space-y-3 text-sm">
                <li><a class="text-cool-gray hover:text-white transition-colors" href="/services/pipeline-intelligence">Pipeline Intelligence</a></li>
                <li><a class="text-cool-gray hover:text-white transition-colors" href="/scan">Pipeline Readiness Scan</a></li>
                <li><a class="text-cool-gray hover:text-white transition-colors" href="/services">All services</a></li>
              </ul>
            </div>
            <div class="space-y-5">
              <p class="font-medium text-sm text-white">Company</p>
              <ul class="space-y-3 text-sm">
                <li><a class="text-cool-gray hover:text-white transition-colors" href="/about">About</a></li>
                <li><a class="text-cool-gray hover:text-white transition-colors" href="/case-studies">Case studies</a></li>
                <li><a class="text-cool-gray hover:text-white transition-colors" href="/careers">Careers</a></li>
              </ul>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="md:col-span-3 space-y-5">
            <p class="font-medium text-sm text-white">Research &amp; Insights</p>
            <p class="text-cool-gray text-sm leading-[1.55]">Weekly dispatches for B2B marketing leaders. Data, benchmarks, and growth playbooks.</p>
            <form class="flex gap-2">
              <input type="email" placeholder="work@email.com" class="flex-1 bg-white/5 border border-white/15 text-white placeholder:text-cool-gray text-sm rounded-lg px-4 py-2.5 focus:border-brand-light focus:ring-1 focus:ring-brand-light/30 transition-colors" />
              <button class="bg-brand-light text-brand-dark px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-white transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        <!-- Locations strip -->
        <div class="mb-12">
          <p class="font-medium text-sm mb-6">Locations</p>
          <div class="flex flex-wrap items-start gap-x-10 gap-y-6">
            <div class="flex flex-col items-center gap-2"><i data-lucide="church" class="w-7 h-7"></i><span class="text-sm">Sofia</span></div>
            <div class="flex flex-col items-center gap-2"><i data-lucide="building-2" class="w-7 h-7"></i><span class="text-sm">Ruse</span></div>
            <div class="flex flex-col items-center gap-2"><i data-lucide="school" class="w-7 h-7"></i><span class="text-sm">Blagoevgrad</span></div>
            <div class="flex flex-col items-center gap-2"><i data-lucide="landmark" class="w-7 h-7"></i><span class="text-sm">Boston</span></div>
          </div>
        </div>

        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-cool-gray">
          <p>© 2026 VertoDigital. Designed in Boston 🇺🇸 · Engineered in Sofia 🇧🇬. Deployed wherever you need us.</p>
          <div class="flex gap-6">
            <a href="/privacy" class="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" class="hover:text-white transition-colors">Terms</a>
            <a href="/privacy#cookies" class="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>"""


# ---------------------------------------------------------------------------
# Replace nav and footer blocks in each file
# ---------------------------------------------------------------------------
NAV_RE = re.compile(
    r"[ \t]*<!-- Navbar -->\s*\n\s*<nav\b.*?</nav>",
    re.DOTALL,
)
FOOTER_RE = re.compile(
    r"[ \t]*(?:<!--[^>]*Footer[^>]*-->\s*\n\s*)?<footer\b.*?</footer>",
    re.DOTALL,
)


def migrate(path: Path):
    rel = str(path.relative_to(ROOT))
    text = path.read_text()
    state = page_state(rel)

    new_nav = render_nav(state)

    new_text = text
    n_nav = 0
    new_text, n_nav = NAV_RE.subn(new_nav, new_text, count=1)

    n_foot = 0
    new_text, n_foot = FOOTER_RE.subn(FOOTER_HTML, new_text, count=1)

    if n_nav == 0:
        print(f"  ⚠ {rel}: nav block not found")
    if n_foot == 0:
        print(f"  ⚠ {rel}: footer block not found")

    if new_text != text:
        path.write_text(new_text)
        print(f"  ✓ {rel} (nav={n_nav}, footer={n_foot})")
    else:
        print(f"  - {rel} (no changes)")


def main():
    files = sorted(p for p in ROOT.rglob("*.html") if ".git" not in p.parts)
    print(f"Migrating {len(files)} files...")
    for f in files:
        migrate(f)


if __name__ == "__main__":
    main()
