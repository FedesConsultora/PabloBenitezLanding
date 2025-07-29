import AnimatedPage from '../components/AnimatedPage';
import ServiciosSection from '../components/ServiciosSection';
import SobreMiModal from '../components/SobreMiModal';

export default function Home() {
  return (
    <AnimatedPage>
      <ServiciosSection />
      <SobreMiModal /> 
    </AnimatedPage>
  );
}
