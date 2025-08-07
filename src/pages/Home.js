import AnimatedPage from '../components/AnimatedPage';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/HeroSection';
import IdealSection from '../components/IdealSection';
import ObjetivosSection from '../components/ObjetivosSection';
import PasosSection from '../components/PasosSection';
import ServiciosFinancieros from '../components/ServiciosFinancieros';
import TrayectoriaSection from '../components/TrayectoriaSection';
import WidgetStrip from '../components/WidgetStrip';

export default function Home() {
  return (
    <AnimatedPage>
      <HeroSection />
      <ObjetivosSection/>
      <TrayectoriaSection />
      <div className='AreaFinanciera'>
        <ServiciosFinancieros />
        <WidgetStrip />
        <PasosSection/>
        <IdealSection />
      </div>
      <ContactForm />
    </AnimatedPage>
  );
}
