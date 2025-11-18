import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import legalDocs, { type DocKey } from "../data/legalDocs";

export default function PoliciesPage(): React.ReactElement {
  const [active, setActive] = useState<DocKey>("terms");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const tocRef = useRef<HTMLUListElement | null>(null);
  const [tocItems, setTocItems] = useState<Array<{ id: string; text: string; level: "h2" | "h3" }>>([]);

  useEffect(() => {
    // Gera o TOC a partir do DOM renderizado
    generateTOC();
    // garante que o conteúdo role ao topo quando trocamos de documento
    contentRef.current?.scrollTo?.({ top: 0, behavior: "smooth" } as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function generateTOC() {
    const container = contentRef.current;
    if (!container) return;

    const headings = Array.from(container.querySelectorAll("h2, h3"));
    if (headings.length === 0) {
      setTocItems([]);
      return;
    }

    const items = headings
      .map((heading) => {
        const id = heading.id;
        const text = heading.textContent || "";
        const tag = heading.tagName.toLowerCase() as "h2" | "h3";
        if (!id) return null;
        return { id, text, level: tag };
      })
      .filter(Boolean) as Array<{ id: string; text: string; level: "h2" | "h3" }>;

    setTocItems(items);
  }

  function onNavClick(key: DocKey) {
    setActive(key);
  }

  return (
    <div className="min-h-screen flex flex-col bg-fuchsia-pink-50 text-fuchsia-pink-900">
      <Navbar />

      <div className="container mx-auto px-4 py-8 pt-28">
        <header className="mb-8 text-center lg:text-left">
          <h1 className="text-3xl font-extrabold text-fuchsia-pink-900 mb-2">Regulamentos e Termos Legais</h1>
          <p className="text-lg text-fuchsia-pink-800">Transparência e conformidade do nosso serviço.</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <nav id="doc-navigation" className="lg:w-1/4 bg-fuchsia-pink-50 p-4 rounded-xl shadow-lg h-full" aria-label="Navegação de documentos legais">
            <h2 className="text-xl font-semibold mb-4 text-fuchsia-pink-800 border-b pb-2">Documentos</h2>
            <button type="button" onClick={() => onNavClick("terms")} id="nav-terms" className={`w-full text-left p-3 rounded-lg transition duration-150 hover:bg-fuchsia-pink-100 mb-2 ${active === "terms" ? "bg-fuchsia-pink-100 font-semibold border-l-4 border-fuchsia-pink-500" : ""}`}>
              Termos de Serviço
            </button>
            <button type="button" onClick={() => onNavClick("privacy")} id="nav-privacy" className={`w-full text-left p-3 rounded-lg transition duration-150 hover:bg-fuchsia-pink-100 mb-2 ${active === "privacy" ? "bg-fuchsia-pink-100 font-semibold border-l-4 border-fuchsia-pink-500" : ""}`}>
              Política de Privacidade
            </button>
            <button type="button" onClick={() => onNavClick("cookies")} id="nav-cookies" className={`w-full text-left p-3 rounded-lg transition duration-150 hover:bg-fuchsia-pink-100 mb-2 ${active === "cookies" ? "bg-fuchsia-pink-100 font-semibold border-l-4 border-fuchsia-pink-500" : ""}`}>
              Política de Cookies
            </button>
          </nav>

          <main className="lg:w-3/4 flex flex-col lg:flex-row gap-6">
            <section className="lg:w-3/4 bg-fuchsia-pink-50 p-6 rounded-xl shadow-lg">
              <div id="document-header" className="mb-6 pb-4 border-b">
                <h2 id="document-title" className="text-2xl font-bold text-fuchsia-pink-900 mb-1">{legalDocs[active].title}</h2>
                <p id="document-date" className="text-sm text-fuchsia-pink-500">{legalDocs[active].date}</p>
              </div>

              <div ref={contentRef} id="legal-content" className="legal-content text-fuchsia-pink-700 space-y-4 max-h-[60vh] overflow-auto" dangerouslySetInnerHTML={{ __html: legalDocs[active].content }} />
            </section>

              <aside id="sidebar-toc" className="lg:w-1/4 bg-fuchsia-pink-50 p-4 rounded-xl shadow-md self-start" aria-label="Índice do documento">
                <h3 className="text-lg font-bold mb-4 text-fuchsia-pink-800">Índice do Documento</h3>
                <ul ref={tocRef} id="toc-list" className="space-y-2 text-sm">
                  {tocItems.length > 0 ? (
                    tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(item.id);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                            try {
                              history.replaceState(null, "", `#${item.id}`);
                            } catch (err) {
                              // ignore
                            }
                          }}
                          className={`block p-1 rounded transition duration-150 hover:text-fuchsia-pink-600 ${item.level === "h3" ? "ml-3 text-fuchsia-pink-600" : "font-medium text-fuchsia-pink-800"}`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="text-fuchsia-pink-500">Selecione um documento.</li>
                  )}
                </ul>
              </aside>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
