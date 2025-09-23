import { useState } from "react";

export default function AccessibilityWidget() {
    const [fontSize, setFontSize] = useState("text-base");
    const [contrast, setContrast] = useState(false);
 
    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-50 text-gray-800 dark:text-gray-200">
            {/* Controle de Fonte */}
            <div className="flex gap-1">
                <button
                    onClick={() => setFontSize("text-sm")}
                    className="px-2 py-1 border rounded cursor-pointer"
                >
                    A-
                </button>
                <button
                    onClick={() => setFontSize("text-base")}
                    className="px-2 py-1 border rounded cursor-pointer"
                >
                    A
                </button>
                <button
                    onClick={() => setFontSize("text-lg")}
                    className="px-2 py-1 border rounded cursor-pointer"
                >
                    A+
                </button>
            </div>

            {/* Controle de Contraste */}
            <button
                onClick={() => setContrast(!contrast)}
                className="px-2 py-1 border rounded cursor-pointer"
            >
                {contrast ? "Contraste Normal" : "Alto Contraste"}
            </button>

            {/* Aplica estilos globais */}
            <style>{`
        body {
          font-size: ${fontSize === "text-sm" ? "14px" : fontSize === "text-lg" ? "20px" : "16px"};
          background-color: ${contrast ? "#252525ff" : "inherit"};
          color: ${contrast ? "#fff" : "inherit"};
        }
      `}</style>
        </div>
    );
}
