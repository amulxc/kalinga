import ScrollComponent from '../gsap/Scrollcomponent';
  
export default function Scroll({ texts, velocity, className }) {
  return (
    <ScrollComponent
      texts={texts} 
      velocity={velocity} 
      className={className}
    />
  );
}