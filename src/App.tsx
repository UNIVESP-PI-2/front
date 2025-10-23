import AccessibilityWidget from "./accessibility/AccessibilityWidget.tsx";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppRoutes />
      <AccessibilityWidget />
    </div>
  );
}

export default App;
