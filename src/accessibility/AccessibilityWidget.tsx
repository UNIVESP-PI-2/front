import { useState } from "react";

export default function AccessibilityWidget() {
    const [fontSize, setFontSize] = useState("text-base");
    const [contrast, setContrast] = useState(false);
    const [dyslexicFont, setDyslexicFont] = useState(false);
 
    return (
        <>
            <div className="fixed bottom-4 right-4 flex flex-col gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-50 text-gray-800 dark:text-gray-200">
                {/* Controle de Fonte */}
                <div className="flex gap-1">
                    <button
                        onClick={() => setFontSize("text-sm")}
                        className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        title="Fonte pequena"
                    >
                        A-
                    </button>
                    <button
                        onClick={() => setFontSize("text-base")}
                        className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        title="Fonte padrão"
                    >
                        A
                    </button>
                    <button
                        onClick={() => setFontSize("text-lg")}
                        className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        title="Fonte grande"
                    >
                        A+
                    </button>
                </div>

                {/* Controle de Contraste */}
                <button
                    onClick={() => setContrast(!contrast)}
                    className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    title="Alternar contraste alto"
                >
                    {contrast ? "Contraste Normal" : "Alto Contraste"}
                </button>

                {/* Controle de Fonte Dyslexic */}
                <button
                    onClick={() => setDyslexicFont(!dyslexicFont)}
                    className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 font-bold"
                    title="OpenDyslexic para melhor leitura"
                    style={dyslexicFont ? { fontFamily: "'Open-Dyslexic', sans-serif" } : {}}
                >
                    {dyslexicFont ? "Fonte Padrão" : "OpenDyslexic"}
                </button>
            </div>

            {/* Aplica estilos globais */}
            <style>{`
                * {
                    font-size: ${fontSize === "text-sm" ? "14px" : fontSize === "text-lg" ? "20px" : "16px"};
                    font-family: ${dyslexicFont ? "'Open-Dyslexic', sans-serif" : "inherit"};
                }
                
                body {
                    font-size: ${fontSize === "text-sm" ? "14px" : fontSize === "text-lg" ? "20px" : "16px"};
                    background-color: ${contrast ? "#252525ff" : "inherit"};
                    color: ${contrast ? "#fff" : "inherit"};
                    font-family: ${dyslexicFont ? "'Open-Dyslexic', sans-serif" : "inherit"};
                }
                
                html {
                    font-family: ${dyslexicFont ? "'Open-Dyslexic', sans-serif" : "inherit"};
                }
            `}</style>
        </>
    );
}
