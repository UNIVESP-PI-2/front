import { useEffect, useState } from "react";

export default function AccessibilityWidget() {
    const [fontSize, setFontSize] = useState("text-base");
    const [contrast, setContrast] = useState(false);

    // Carrega o VLibras
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            new (window as any).VLibras.Widget("https://vlibras.gov.br/app");
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-50">
            {/* Controle de Fonte */}
            <div className="flex gap-1">
                <button
                    onClick={() => setFontSize("text-sm")}
                    className="px-2 py-1 border rounded"
                >
                    A-
                </button>
                <button
                    onClick={() => setFontSize("text-base")}
                    className="px-2 py-1 border rounded"
                >
                    A
                </button>
                <button
                    onClick={() => setFontSize("text-lg")}
                    className="px-2 py-1 border rounded"
                >
                    A+
                </button>
            </div>

            {/* Controle de Contraste */}
            <button
                onClick={() => setContrast(!contrast)}
                className="px-2 py-1 border rounded"
            >
                {contrast ? "Contraste Normal" : "Alto Contraste"}
            </button>

            <div data-vw className="enabled">
                <div data-vw-access-button></div>
            </div>


            {/* Aplica estilos globais */}
            <style>{`
        body {
          font-size: ${fontSize === "text-sm" ? "14px" : fontSize === "text-lg" ? "20px" : "16px"};
          background-color: ${contrast ? "#000" : "inherit"};
          color: ${contrast ? "#fff" : "inherit"};
        }
      `}</style>
        </div>
    );
}
