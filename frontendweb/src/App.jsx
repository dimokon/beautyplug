import './App.css'
import Hero from './hero'
import Service from './service';

function App() { 
const Services = [
  { title: "Manicure", desc: "Best manicure service in town!" },
  { title: "Pedicure", desc: "Best pedicure service in town!" },
  { title: "Hair Styling", desc: "Trendy haircuts and styling services!" },
  { title: "Facial", desc: "Relaxing facial treatments for glowing skin!" }
];
                                                                                                
  return (
    <div className="App">
      <h1>Frontend Web</h1>
      <Hero />
      {Services.map((service, index) => (
        <Service key={index} title={service.title} desc={service.desc} />
      ))}
    </div>
  )
}
        
export default App;
