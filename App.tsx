import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  QrCode, 
  Database, 
  User, 
  MapPin, 
  Scale, 
  Zap, 
  Droplets, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  History,
  Factory,
  ShoppingBag,
  Menu,
  X,
  Plus,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  Lot, 
  COTTON_COLORS, 
  WATER_SAVING_FACTOR, 
  FiberQuality,
  cn 
} from './types';

// --- Components ---

const Badge = ({ children, icon: Icon, className }: { children: React.ReactNode, icon?: any, className?: string }) => (
  <div className={cn("flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border", className)}>
    {Icon && <Icon size={14} />}
    {children}
  </div>
);

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-3 font-serif font-bold text-2xl tracking-tight", className)}>
    <img 
      src="https://s3.amazonaws.com/www.2flock.com/dinamic/img/grupo/perfil/medium/img_foto_grupo_24-01-2026%2017:04:49_6W5vYtzn1KWRmWVQ9uYpk9OVRUPpbyJVTTFdoeKcYeoKP.png" 
      alt="VANTAGE Logo" 
      className="w-10 h-10 object-contain rounded-lg"
      referrerPolicy="no-referrer"
    />
    <span className="tracking-widest">VANTAGE</span>
  </div>
);

// --- Pages ---

const LandingPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <div className="min-h-screen flex flex-col bg-vantage-cream">
    <header className="p-6 flex justify-between items-center sticky top-0 bg-vantage-cream/80 backdrop-blur-md z-50 border-b border-vantage-olive/5">
      <Logo />
      <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-vantage-ink/60">
        <a href="#mission" className="hover:text-vantage-olive transition-colors">Misión</a>
        <a href="#tech" className="hover:text-vantage-olive transition-colors">Tecnología</a>
        <a href="#impact" className="hover:text-vantage-olive transition-colors">Impacto</a>
      </nav>
      <div className="flex items-center gap-4">
        <button onClick={() => onNavigate('admin')} className="text-vantage-olive font-bold text-xs uppercase tracking-widest flex items-center gap-2 px-4 py-2 rounded-full hover:bg-vantage-olive/5 transition-all">
          <BarChart3 size={16} />
          Dashboard
        </button>
      </div>
    </header>
    
    <main className="flex-1">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center p-6 py-24 text-center max-w-5xl mx-auto min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge icon={ShieldCheck} className="bg-vantage-olive/10 border-vantage-olive/20 text-vantage-olive mb-6 mx-auto w-fit">
            Estandarización Cromática Global
          </Badge>
          <h1 className="serif text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">
            El Futuro del Algodón <br />
            <span className="italic text-vantage-olive">es Nativo.</span>
          </h1>
          <p className="text-xl text-vantage-ink/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            VANTAGE revoluciona la cadena de suministro textil eliminando la necesidad de tinturas químicas mediante la estandarización cromática en el origen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('farmer')}
              className="bg-vantage-olive text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-vantage-olive/20"
            >
              <Plus size={20} />
              Portal del Productor
            </button>
            <button 
              onClick={() => onNavigate('consumer')}
              className="bg-white border border-vantage-olive/20 text-vantage-olive px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-vantage-cream transition-all"
            >
              <QrCode size={20} />
              Validar Trazabilidad
            </button>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/cotton-field/800/1000" 
              alt="Cotton Field" 
              className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-vantage-olive text-white p-10 rounded-[2rem] shadow-2xl max-w-xs">
              <p className="serif text-2xl italic mb-2">"Nuestra meta es ahorrar 1 billón de litros de agua para 2030."</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">— CEO, VANTAGE</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="serif text-5xl font-bold leading-tight">Redefiniendo la <br />Sostenibilidad Textil</h2>
            <p className="text-lg text-vantage-ink/60 leading-relaxed">
              VANTAGE nació en el corazón de Lambayeque con una visión clara: devolverle al algodón su pureza original. Nuestra tecnología de clasificación cromática permite a las marcas utilizar fibras de colores naturales con la misma precisión que el algodón teñido, pero sin el impacto ambiental.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-vantage-olive">29k</p>
                <p className="text-xs font-bold uppercase tracking-widest text-vantage-ink/40">Litros/Kg Ahorrados</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-vantage-olive">0%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-vantage-ink/40">Químicos Tóxicos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="tech" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="serif text-5xl font-bold mb-4">Tecnología de Vanguardia</h2>
          <p className="text-vantage-ink/50 max-w-xl mx-auto">Nuestra plataforma integra hardware de precisión y software descentralizado para garantizar la integridad de cada fibra.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Droplets, title: "Ahorro Hídrico", desc: "Eliminamos el proceso de tintura, el mayor consumidor de agua en la industria textil." },
            { icon: ShieldCheck, title: "Sin Químicos", desc: "Colores naturales que protegen la piel del consumidor y los ecosistemas locales." },
            { icon: Database, title: "Blockchain Ready", desc: "Cada lote genera un hash inmutable que garantiza su origen y calidad técnica." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white border border-vantage-olive/5 text-left card-shadow"
            >
              <div className="w-14 h-14 bg-vantage-olive/10 rounded-2xl flex items-center justify-center text-vantage-olive mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="serif text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-vantage-ink/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-vantage-olive/5 border-y border-vantage-olive/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-vantage-ink/30 mb-12">Empresas que confían en VANTAGE</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            {['EcoTextil', 'NativaSupply', 'GreenThread', 'PureFiber', 'LambayequeCoop'].map(name => (
              <span key={name} className="serif text-2xl font-bold italic">{name}</span>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-vantage-ink text-vantage-cream py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Logo className="text-white" />
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Liderando la transición hacia una industria textil regenerativa y transparente. Desde Lambayeque para el mundo.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <Leaf size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <Database size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/40">Plataforma</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => onNavigate('farmer')} className="hover:text-white transition-colors">Portal Productor</button></li>
            <li><button onClick={() => onNavigate('consumer')} className="hover:text-white transition-colors">Validar Prenda</button></li>
            <li><button onClick={() => onNavigate('admin')} className="hover:text-white transition-colors">Dashboard Admin</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/40">Contacto</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>Lambayeque, Perú</li>
            <li>info@vantage-cotton.com</li>
            <li>+51 74 123 456</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
        <p>© 2026 VANTAGE COTTON. TODOS LOS DERECHOS RESERVADOS.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  </div>
);

const FarmerApp = ({ onNavigate, onSaveLot }: { onNavigate: (page: string) => void, onSaveLot: (lot: Lot) => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    producer: '',
    plotCode: '',
    weight: '',
    length: '32',
    strength: '28',
    micronaire: '4.2',
    colorId: COTTON_COLORS[0].id
  });

  const selectedColor = COTTON_COLORS.find(c => c.id === formData.colorId)!;
  const waterSaved = (Number(formData.weight) || 0) * WATER_SAVING_FACTOR;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `VTG-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const newLot: Lot = {
      id,
      producer: formData.producer,
      plotCode: formData.plotCode,
      weight: Number(formData.weight),
      colorId: formData.colorId,
      colorName: selectedColor.name,
      colorHex: selectedColor.hex,
      fiberQuality: {
        length: Number(formData.length),
        strength: Number(formData.strength),
        micronaire: Number(formData.micronaire)
      },
      waterSaved,
      createdAt: new Date().toISOString(),
      blockchainHash: `0x${Math.random().toString(16).substr(2, 40)}`
    };
    onSaveLot(newLot);
    onNavigate(`lote/${id}`);
  };

  return (
    <div className="min-h-screen bg-vantage-cream flex flex-col max-w-md mx-auto border-x border-vantage-olive/10 shadow-2xl">
      <header className="p-6 flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className="p-2 rounded-full hover:bg-vantage-olive/10">
          <ArrowLeft size={20} />
        </button>
        <h2 className="serif text-xl font-bold">Clasificación en Campo</h2>
      </header>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map(i => (
            <div key={i} className={cn("h-1 flex-1 rounded-full transition-all", step >= i ? "bg-vantage-olive" : "bg-vantage-olive/20")} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-vantage-ink/50">Kit Cromático Digital</label>
                <div className="grid grid-cols-3 gap-3">
                  {COTTON_COLORS.map(color => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, colorId: color.id })}
                      className={cn(
                        "p-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-2",
                        formData.colorId === color.id ? "border-vantage-olive bg-white shadow-md" : "border-transparent bg-white/40"
                      )}
                    >
                      <div className="w-10 h-10 rounded-full shadow-inner border border-black/5" style={{ backgroundColor: color.hex }} />
                      <span className="text-[10px] font-bold">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setStep(2)}
                className="w-full bg-vantage-olive text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                Siguiente
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-vantage-ink/50">Productor</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ej: Juan Pérez"
                    value={formData.producer}
                    onChange={e => setFormData({ ...formData, producer: e.target.value })}
                    className="w-full bg-white border border-vantage-olive/10 rounded-xl p-4 focus:ring-2 ring-vantage-olive/20 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-vantage-ink/50">Código de Parcela</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ej: P-204-NORTH"
                    value={formData.plotCode}
                    onChange={e => setFormData({ ...formData, plotCode: e.target.value })}
                    className="w-full bg-white border border-vantage-olive/10 rounded-xl p-4 focus:ring-2 ring-vantage-olive/20 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-vantage-ink/50">Peso del Lote (kg)</label>
                  <input 
                    required
                    type="number" 
                    placeholder="0.00"
                    value={formData.weight}
                    onChange={e => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full bg-white border border-vantage-olive/10 rounded-xl p-4 focus:ring-2 ring-vantage-olive/20 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white border border-vantage-olive/20 py-4 rounded-2xl font-bold">Atrás</button>
                <button type="button" onClick={() => setStep(3)} className="flex-[2] bg-vantage-olive text-white py-4 rounded-2xl font-bold">Siguiente</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-vantage-olive/5 rounded-2xl border border-vantage-olive/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-vantage-olive/10 rounded-full flex items-center justify-center text-vantage-olive">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-vantage-olive">Ahorro Hídrico Estimado</p>
                    <p className="text-xl font-bold">{waterSaved.toLocaleString()} Litros</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-vantage-ink/50">Longitud (mm)</label>
                    <input type="range" min="20" max="40" step="0.1" value={formData.length} onChange={e => setFormData({...formData, length: e.target.value})} className="w-full accent-vantage-olive" />
                    <div className="flex justify-between text-[10px] font-bold"><span>20mm</span> <span>{formData.length}mm</span> <span>40mm</span></div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-vantage-ink/50">Resistencia (g/tex)</label>
                    <input type="range" min="20" max="35" step="0.1" value={formData.strength} onChange={e => setFormData({...formData, strength: e.target.value})} className="w-full accent-vantage-olive" />
                    <div className="flex justify-between text-[10px] font-bold"><span>20</span> <span>{formData.strength}</span> <span>35</span></div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="flex-1 bg-white border border-vantage-olive/20 py-4 rounded-2xl font-bold">Atrás</button>
                <button type="submit" className="flex-[2] bg-vantage-olive text-white py-4 rounded-2xl font-bold shadow-lg shadow-vantage-olive/20">Generar Lote</button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

const LotDetailPage = ({ lot, onNavigate }: { lot: Lot, onNavigate: (page: string) => void }) => {
  const publicUrl = `${window.location.origin}/lote/${lot.id}`;

  return (
    <div className="min-h-screen bg-vantage-cream pb-20">
      <header className="p-6 flex justify-between items-center max-w-4xl mx-auto w-full">
        <Logo />
        <button onClick={() => onNavigate('home')} className="p-2 rounded-full hover:bg-vantage-olive/10">
          <X size={24} />
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] p-8 card-shadow border border-vantage-olive/5">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <Badge icon={ShieldCheck} className="bg-vantage-olive/10 border-vantage-olive/20 text-vantage-olive mb-3">Trazabilidad Garantizada</Badge>
                  <h1 className="serif text-4xl font-bold mb-1">Lote {lot.id}</h1>
                  <p className="text-vantage-ink/50 text-sm font-mono">{lot.blockchainHash.slice(0, 16)}...</p>
                </div>
                <div className="text-right">
                  <div className="w-16 h-16 rounded-2xl border-4 border-white shadow-lg mb-2 mx-auto" style={{ backgroundColor: lot.colorHex }} />
                  <p className="text-xs font-bold uppercase">{lot.colorName}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-vantage-olive/10">
                <div>
                  <p className="text-[10px] font-bold uppercase text-vantage-ink/40 mb-1">Productor</p>
                  <p className="font-medium">{lot.producer}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-vantage-ink/40 mb-1">Parcela</p>
                  <p className="font-medium">{lot.plotCode}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-vantage-ink/40 mb-1">Peso</p>
                  <p className="font-medium">{lot.weight} kg</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-vantage-ink/40 mb-1">Fecha</p>
                  <p className="font-medium">{new Date(lot.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="serif text-xl font-bold">Calidad Técnica de Fibra</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-vantage-cream/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold uppercase text-vantage-ink/40">Longitud</p>
                    <p className="text-lg font-bold">{lot.fiberQuality.length} mm</p>
                  </div>
                  <div className="bg-vantage-cream/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold uppercase text-vantage-ink/40">Resistencia</p>
                    <p className="text-lg font-bold">{lot.fiberQuality.strength}</p>
                  </div>
                  <div className="bg-vantage-cream/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold uppercase text-vantage-ink/40">Micronaire</p>
                    <p className="text-lg font-bold">{lot.fiberQuality.micronaire}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Simulated Map */}
            <div className="bg-white rounded-[2rem] p-8 card-shadow border border-vantage-olive/5 overflow-hidden relative h-64">
              <div className="absolute inset-0 bg-vantage-cream flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#5A5A40 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative flex flex-col items-center">
                  <MapPin className="text-vantage-olive animate-bounce" size={32} />
                  <div className="mt-2 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">Parcela {lot.plotCode}</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-bold uppercase">
                Coordenadas: -12.0463, -77.0427
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-[2rem] p-8 card-shadow border border-vantage-olive/5">
              <h3 className="serif text-2xl font-bold mb-8">Línea de Tiempo de Producción</h3>
              <div className="space-y-8">
                {[
                  { icon: Leaf, title: "Clasificación en Campo", date: new Date(lot.createdAt).toLocaleDateString(), status: "Completado", current: false },
                  { icon: ShieldCheck, title: "Validación Cooperativa", date: "Pendiente", status: "En proceso", current: true },
                  { icon: Factory, title: "Hilatura & Tejeduría", date: "-", status: "Próximamente", current: false },
                  { icon: ShoppingBag, title: "Producción de Prenda", date: "-", status: "Próximamente", current: false },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    {i < 3 && <div className="absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-vantage-olive/10" />}
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10",
                      step.status === "Completado" ? "bg-vantage-olive text-white" : 
                      step.current ? "bg-vantage-olive/20 text-vantage-olive ring-4 ring-vantage-olive/10" : "bg-vantage-cream text-vantage-ink/30"
                    )}>
                      <step.icon size={20} />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold">{step.title}</h4>
                        <span className={cn(
                          "text-[10px] font-bold uppercase px-2 py-1 rounded-md",
                          step.status === "Completado" ? "bg-green-100 text-green-700" : 
                          step.current ? "bg-vantage-olive/10 text-vantage-olive" : "bg-vantage-cream text-vantage-ink/40"
                        )}>{step.status}</span>
                      </div>
                      <p className="text-xs text-vantage-ink/50">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Impact & QR */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="bg-vantage-olive text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Droplets size={24} />
                </div>
                <h3 className="serif text-2xl font-bold mb-2">Certificado de Ahorro Hídrico</h3>
                <p className="text-white/70 text-sm mb-6">Este algodón no requirió teñido químico. Ahorro certificado de:</p>
                <div className="text-4xl font-bold mb-2">{lot.waterSaved.toLocaleString()} L</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Litros de Agua Evitados</p>
                
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-[8px] font-bold uppercase">100% Nativo</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-2">
                      <Zap size={18} />
                    </div>
                    <span className="text-[8px] font-bold uppercase">Sin Tintura</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-white rounded-[2rem] p-8 card-shadow border border-vantage-olive/5 text-center">
              <p className="text-xs font-bold uppercase text-vantage-ink/40 mb-6 tracking-widest">Pasaporte Digital del Lote</p>
              <div 
                className="bg-vantage-cream p-6 rounded-3xl inline-block mb-6 cursor-pointer hover:scale-105 transition-transform group relative"
                onClick={() => onNavigate('consumer')}
                title="Simular Escaneo"
              >
                <QRCodeSVG value={publicUrl} size={160} level="H" includeMargin={false} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-vantage-olive/10 rounded-3xl transition-opacity">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <QrCode size={24} className="text-vantage-olive" />
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-vantage-ink/50 leading-relaxed">
                Escanea este código para verificar la trazabilidad en tiempo real desde cualquier dispositivo.
              </p>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(publicUrl);
                  alert('URL copiada al portapapeles');
                }}
                className="mt-6 w-full py-3 border border-vantage-olive/10 rounded-xl text-xs font-bold hover:bg-vantage-cream transition-all"
              >
                Copiar Enlace Público
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const AdminDashboard = ({ lots, onNavigate }: { lots: Lot[], onNavigate: (page: string) => void }) => {
  const totalWeight = lots.reduce((acc, lot) => acc + lot.weight, 0);
  const totalWater = lots.reduce((acc, lot) => acc + lot.waterSaved, 0);

  return (
    <div className="min-h-screen bg-vantage-cream">
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto w-full">
        <Logo />
        <button onClick={() => onNavigate('home')} className="p-2 rounded-full hover:bg-vantage-olive/10">
          <ArrowLeft size={24} />
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[2rem] card-shadow border border-vantage-olive/5">
            <p className="text-[10px] font-bold uppercase text-vantage-ink/40 mb-2">Total Lotes</p>
            <p className="text-4xl font-bold">{lots.length}</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] card-shadow border border-vantage-olive/5">
            <p className="text-[10px] font-bold uppercase text-vantage-ink/40 mb-2">Fibra Estandarizada</p>
            <p className="text-4xl font-bold">{totalWeight.toLocaleString()} kg</p>
          </div>
          <div className="bg-vantage-olive text-white p-8 rounded-[2rem] shadow-xl">
            <p className="text-[10px] font-bold uppercase text-white/50 mb-2">Impacto Hídrico Evitado</p>
            <p className="text-4xl font-bold">{totalWater.toLocaleString()} L</p>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] card-shadow border border-vantage-olive/5 overflow-hidden">
          <div className="p-8 border-b border-vantage-olive/5 flex justify-between items-center">
            <h2 className="serif text-2xl font-bold">Registro de Lotes</h2>
            <button onClick={() => onNavigate('farmer')} className="bg-vantage-olive text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
              <Plus size={16} /> Nuevo Lote
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-vantage-cream/30 text-[10px] font-bold uppercase tracking-widest text-vantage-ink/40">
                  <th className="px-8 py-4">ID Lote</th>
                  <th className="px-8 py-4">Productor</th>
                  <th className="px-8 py-4">Color</th>
                  <th className="px-8 py-4">Peso</th>
                  <th className="px-8 py-4">Ahorro H2O</th>
                  <th className="px-8 py-4">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-vantage-olive/5">
                {lots.map(lot => (
                  <tr key={lot.id} className="hover:bg-vantage-cream/20 transition-all cursor-pointer" onClick={() => onNavigate(`lote/${lot.id}`)}>
                    <td className="px-8 py-6 font-mono text-xs font-bold">{lot.id}</td>
                    <td className="px-8 py-6 text-sm">{lot.producer}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-black/5" style={{ backgroundColor: lot.colorHex }} />
                        <span className="text-xs font-medium">{lot.colorName}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm">{lot.weight} kg</td>
                    <td className="px-8 py-6 text-sm font-bold text-vantage-olive">{lot.waterSaved.toLocaleString()} L</td>
                    <td className="px-8 py-6">
                      <ChevronRight size={18} className="text-vantage-ink/20" />
                    </td>
                  </tr>
                ))}
                {lots.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-8 py-12 text-center text-vantage-ink/30 italic">No hay lotes registrados aún.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const ConsumerExperience = ({ onNavigate, lots }: { onNavigate: (page: string) => void, lots: Lot[] }) => {
  const [phase, setPhase] = useState<'initial' | 'scanning' | 'discovery'>('initial');
  const [discoveryStep, setDiscoveryStep] = useState(0);
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);

  const handleScan = () => {
    let lotToScan = lots[0];
    
    if (!lotToScan) {
      // Create a mock lot for demo purposes if none exists
      lotToScan = {
        id: 'VTG-DEMO-2026',
        producer: 'Asociación de Productores Lambayeque',
        plotCode: 'LMB-01-NAT',
        weight: 150,
        colorId: 'V03',
        colorName: 'Verde Natural 03',
        colorHex: '#556B2F',
        fiberQuality: {
          length: 34.5,
          strength: 31.2,
          micronaire: 4.1
        },
        waterSaved: 150 * WATER_SAVING_FACTOR,
        createdAt: new Date().toISOString(),
        blockchainHash: '0x7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e'
      };
    }

    setPhase('scanning');
    setSelectedLot(lotToScan);
    
    setTimeout(() => {
      setPhase('discovery');
    }, 2000);
  };

  const discoverySteps = [
    {
      title: "Origen: Lambayeque, Perú",
      description: "Ubicando parcela de origen en tiempo real...",
      component: (lot: Lot) => (
        <div className="w-full h-64 rounded-3xl overflow-hidden relative border-4 border-white/10 shadow-2xl">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?q=-6.7011,-79.9061&hl=es&z=14&amp;output=embed"
            className="grayscale contrast-125"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-vantage-cream rounded-full animate-ping opacity-50" />
            <MapPin className="text-vantage-cream drop-shadow-lg" size={40} />
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-vantage-ink/80 backdrop-blur p-3 rounded-xl text-left">
            <p className="text-[10px] font-bold uppercase text-vantage-cream/50">Parcela Detectada</p>
            <p className="text-xs font-bold text-white">{lot.plotCode} - Sector Lambayeque</p>
          </div>
        </div>
      )
    },
    {
      title: "Calidad de Fibra Nativa",
      description: "Validando estándares cromáticos industriales...",
      component: (lot: Lot) => (
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="bg-white/10 p-6 rounded-3xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/20" style={{ backgroundColor: lot.colorHex }} />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase text-white/40">Tono Estandarizado</p>
                <p className="text-lg font-bold">{lot.colorName}</p>
              </div>
            </div>
            <CheckCircle2 className="text-vantage-cream" size={24} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
              <p className="text-[10px] font-bold uppercase text-white/40">Longitud</p>
              <p className="text-xl font-bold">{lot.fiberQuality.length}mm</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
              <p className="text-[10px] font-bold uppercase text-white/40">Resistencia</p>
              <p className="text-xl font-bold">{lot.fiberQuality.strength}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Impacto Ambiental",
      description: "Calculando ahorro de recursos naturales...",
      component: (lot: Lot) => (
        <div className="bg-vantage-olive p-8 rounded-[2.5rem] shadow-2xl w-full relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Droplets size={80} />
          </div>
          <div className="relative z-10 text-left">
            <Badge icon={ShieldCheck} className="bg-white/20 border-white/30 text-white mb-4">Certificado de Origen</Badge>
            <p className="text-white/70 text-sm mb-2">Ahorro Hídrico Garantizado</p>
            <div className="text-5xl font-bold mb-4">{lot.waterSaved.toLocaleString()} L</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Al usar colores nativos, este lote evitó el uso de tintes químicos y el consumo excesivo de agua en procesos industriales.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (discoveryStep < discoverySteps.length - 1) {
      setDiscoveryStep(discoveryStep + 1);
    } else {
      onNavigate(`lote/${selectedLot?.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-vantage-ink text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === 'initial' && (
          <motion.div 
            key="initial"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="space-y-8 max-w-sm"
          >
            <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
              <QrCode size={48} className="text-vantage-cream" />
            </div>
            <h2 className="serif text-4xl font-bold">Experiencia del Consumidor</h2>
            <p className="text-white/60 text-sm">
              Escanea el código QR en la etiqueta para descubrir el viaje de tu prenda desde Lambayeque.
            </p>
            <button 
              onClick={handleScan}
              className="w-full bg-vantage-cream text-vantage-ink py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-white transition-all"
            >
              Simular Escaneo QR
            </button>
            <button onClick={() => onNavigate('home')} className="text-white/40 text-xs font-bold uppercase tracking-widest">Volver al Inicio</button>
          </motion.div>
        )}

        {phase === 'scanning' && (
          <motion.div 
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 border-2 border-vantage-cream/30 rounded-[2rem]" />
              <motion.div 
                animate={{ top: ['10%', '90%', '10%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-4 right-4 h-0.5 bg-vantage-cream shadow-[0_0_15px_rgba(245,242,237,0.8)] z-10"
              />
              <div className="absolute inset-8 flex items-center justify-center opacity-20">
                <QrCode size={120} />
              </div>
            </div>
            <p className="serif text-2xl italic animate-pulse">Desencriptando Pasaporte Digital...</p>
          </motion.div>
        )}

        {phase === 'discovery' && selectedLot && (
          <motion.div 
            key="discovery"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vantage-cream/50">Paso {discoveryStep + 1} de 3</p>
              <h2 className="serif text-3xl font-bold">{discoverySteps[discoveryStep].title}</h2>
              <p className="text-white/60 text-sm">{discoverySteps[discoveryStep].description}</p>
            </div>

            <motion.div 
              key={discoveryStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="py-4"
            >
              {discoverySteps[discoveryStep].component(selectedLot)}
            </motion.div>

            <button 
              onClick={nextStep}
              className="w-full bg-white text-vantage-ink py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl"
            >
              {discoveryStep < 2 ? "Continuar Descubrimiento" : "Ver Ficha Completa"}
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lots, setLots] = useState<Lot[]>([]);

  useEffect(() => {
    const savedLots = localStorage.getItem('vantage_lots');
    if (savedLots) {
      setLots(JSON.parse(savedLots));
    }

    // Basic URL Routing
    const path = window.location.pathname;
    if (path.startsWith('/lote/')) {
      const id = path.split('/')[2];
      if (id) {
        setCurrentPage(`lote/${id}`);
      }
    } else if (path === '/admin') {
      setCurrentPage('admin');
    } else if (path === '/farmer') {
      setCurrentPage('farmer');
    } else if (path === '/consumer') {
      setCurrentPage('consumer');
    }
  }, []);

  const saveLot = (lot: Lot) => {
    const updatedLots = [lot, ...lots];
    setLots(updatedLots);
    localStorage.setItem('vantage_lots', JSON.stringify(updatedLots));
  };

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Simple routing
  const renderPage = () => {
    if (currentPage === 'home') return <LandingPage onNavigate={navigate} />;
    if (currentPage === 'farmer') return <FarmerApp onNavigate={navigate} onSaveLot={saveLot} />;
    if (currentPage === 'admin') return <AdminDashboard lots={lots} onNavigate={navigate} />;
    if (currentPage === 'consumer') return <ConsumerExperience onNavigate={navigate} lots={lots} />;
    
    if (currentPage.startsWith('lote/')) {
      const id = currentPage.split('/')[1];
      let lot = lots.find(l => l.id === id);
      
      // Fallback for demo lot if not in state
      if (!lot && id === 'VTG-DEMO-2026') {
        lot = {
          id: 'VTG-DEMO-2026',
          producer: 'Asociación de Productores Lambayeque',
          plotCode: 'LMB-01-NAT',
          weight: 150,
          colorId: 'V03',
          colorName: 'Verde Natural 03',
          colorHex: '#556B2F',
          fiberQuality: {
            length: 34.5,
            strength: 31.2,
            micronaire: 4.1
          },
          waterSaved: 150 * WATER_SAVING_FACTOR,
          createdAt: new Date().toISOString(),
          blockchainHash: '0x7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e'
        };
      }

      if (lot) return <LotDetailPage lot={lot} onNavigate={navigate} />;
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-20 text-center bg-vantage-cream">
          <h2 className="serif text-3xl font-bold mb-4">Lote no encontrado</h2>
          <p className="text-vantage-ink/60 mb-8">El lote solicitado no existe o ha sido removido del sistema.</p>
          <button 
            onClick={() => navigate('home')}
            className="bg-vantage-olive text-white px-8 py-3 rounded-full font-bold"
          >
            Volver al Inicio
          </button>
        </div>
      );
    }

    return <LandingPage onNavigate={navigate} />;
  };

  return (
    <div className="antialiased">
      {renderPage()}
    </div>
  );
}
