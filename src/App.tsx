import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import PricingForm from '@/components/pricing-form';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-background">
        <div className="container mx-auto py-8 px-4">
          <PricingForm />
        </div>
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;