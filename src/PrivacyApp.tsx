import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PrivacyPolicy from '@/sections/PrivacyPolicy';

function PrivacyApp() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Nav />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyApp;
