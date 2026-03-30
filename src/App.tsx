import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight,
  Check
} from 'lucide-react';
import { PIZZAS, REVIEWS, SHOP_INFO, Pizza } from './constants';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Classics' | 'Specials' | 'Veg'>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPizzas = activeCategory === 'All' 
    ? PIZZAS 
    : PIZZAS.filter(p => p.category === activeCategory);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Deal Strip */}
      <div className="bg-brand-orange text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
        <span className="animate-pulse mr-2">🎁</span>
        2 Large Pizzas for $30 every Tuesday! <span className="underline ml-2 cursor-pointer">Claim Deal</span>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-9 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <span className="text-xl font-bold tracking-tighter serif italic">Slice & Sizzle</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-brand-orange transition-colors">Reviews</a>
            <a href="#location" className="hover:text-brand-orange transition-colors">Location</a>
            <div className="flex items-center gap-2 text-brand-orange">
              <Phone size={16} />
              <a href={`tel:${SHOP_INFO.phone}`} className="font-bold">{SHOP_INFO.phone}</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-brand-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-orange transition-all transform hover:scale-105 hidden sm:block">
              ORDER NOW
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-3xl font-serif italic">
              <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a>
              <a href={`tel:${SHOP_INFO.phone}`} className="text-brand-orange">{SHOP_INFO.phone}</a>
            </div>
            <button className="mt-auto bg-brand-orange text-white py-4 rounded-xl font-bold text-xl">
              ORDER NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/pizza-hero/1920/1080" 
              alt="Delicious Pizza" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Artisanal & Authentic</span>
              <h1 className="text-6xl md:text-8xl font-serif italic leading-tight mb-8">
                The Best Slice <br />
                <span className="text-brand-orange">In The City.</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-brand-orange transition-all">
                  ORDER ONLINE <ArrowRight size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  VIEW FULL MENU
                </button>
              </div>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-12 right-12 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
              <div className="flex items-center gap-2 mb-1">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="text-2xl font-bold">4.8</span>
              </div>
              <p className="text-xs uppercase tracking-widest opacity-70">From 340+ Reviews</p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Our Signature Pies</h2>
                <p className="text-brand-dark/60 max-w-md">Hand-stretched dough, fermented for 48 hours, and fired in our custom stone oven.</p>
              </div>
              
              <div className="flex gap-2 bg-white p-1 rounded-full shadow-sm border border-brand-dark/5">
                {['All', 'Classics', 'Specials', 'Veg'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-brand-dark text-white' : 'hover:bg-brand-dark/5'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPizzas.map((pizza) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={pizza.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={pizza.image} 
                        alt={pizza.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {pizza.isBestseller && (
                        <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                          Bestseller
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold">
                        ${pizza.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{pizza.name}</h3>
                        <div className="flex gap-1">
                          {pizza.dietary?.map(tag => (
                            <span key={tag} className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-brand-dark/60 mb-6 line-clamp-2">{pizza.description}</p>
                      <button className="w-full border-2 border-brand-dark py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-dark hover:text-white transition-all">
                        <ShoppingBag size={18} /> ADD TO ORDER
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-brand-dark text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">What Our Sizzlers Say</h2>
              <p className="opacity-60">4.8/5 based on 340+ Google reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative">
                  <div className="text-brand-orange text-6xl font-serif absolute -top-4 -left-2 opacity-20">"</div>
                  <p className="text-lg italic mb-6 relative z-10">"{review.comment}"</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-xs opacity-40 uppercase tracking-widest">{review.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section id="location" className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl relative">
                {/* Mock Map */}
                <img 
                  src="https://picsum.photos/seed/map/1000/1000" 
                  alt="Map Location" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-orange text-white p-4 rounded-full shadow-xl animate-bounce">
                    <MapPin size={32} />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Find Us</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <MapPin className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-bold text-xl mb-1">Address</p>
                      <p className="text-brand-dark/60">{SHOP_INFO.address}</p>
                      <button className="text-brand-orange font-bold text-sm mt-2 flex items-center gap-1 hover:underline">
                        Get Directions <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <Clock className="text-brand-orange" />
                    </div>
                    <div className="w-full">
                      <p className="font-bold text-xl mb-4">Opening Hours</p>
                      <div className="grid grid-cols-1 gap-2">
                        {SHOP_INFO.hours.map((h) => (
                          <div key={h.day} className={`flex justify-between py-2 border-b border-brand-dark/5 ${h.day === today ? 'text-brand-orange font-bold' : 'text-brand-dark/60'}`}>
                            <span>{h.day}</span>
                            <span>{h.open}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <Phone className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-bold text-xl mb-1">Call for Pickup</p>
                      <a href={`tel:${SHOP_INFO.phone}`} className="text-2xl font-bold hover:text-brand-orange transition-colors">{SHOP_INFO.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-brand-orange">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Join the Pizza Club</h2>
            <p className="text-xl mb-10 opacity-90">Get 10% off your first order and exclusive weekly deals delivered to your inbox.</p>
            
            {!subscribed ? (
              <form 
                onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-8 py-4 rounded-full bg-white text-brand-dark focus:outline-none focus:ring-4 focus:ring-white/20"
                />
                <button className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-all">
                  GET MY DISCOUNT
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/20 backdrop-blur-md p-8 rounded-3xl flex items-center justify-center gap-4"
              >
                <div className="bg-white text-brand-orange p-2 rounded-full">
                  <Check size={24} />
                </div>
                <p className="text-2xl font-bold italic font-serif">Check your inbox for your code!</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🍕</span>
                <span className="text-xl font-bold tracking-tighter serif italic">Slice & Sizzle</span>
              </div>
              <p className="opacity-60 mb-8">Crafting the perfect slice since 2012. Our mission is simple: better ingredients, better pizza, better vibes.</p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-orange transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-orange transition-colors"><Facebook size={20} /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-orange transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 opacity-60 text-sm">
                <li><a href="#menu" className="hover:text-brand-orange">Menu</a></li>
                <li><a href="#reviews" className="hover:text-brand-orange">Reviews</a></li>
                <li><a href="#location" className="hover:text-brand-orange">Location</a></li>
                <li><a href="#" className="hover:text-brand-orange">Order Online</a></li>
                <li><a href="#" className="hover:text-brand-orange">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Our Pizzas</h4>
              <ul className="space-y-4 opacity-60 text-sm">
                <li><a href="#" className="hover:text-brand-orange">Classics</a></li>
                <li><a href="#" className="hover:text-brand-orange">Specials</a></li>
                <li><a href="#" className="hover:text-brand-orange">Vegetarian</a></li>
                <li><a href="#" className="hover:text-brand-orange">Gluten-Free</a></li>
                <li><a href="#" className="hover:text-brand-orange">Vegan Options</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-4 opacity-60 text-sm">
                <li className="flex items-center gap-2"><Phone size={14} /> {SHOP_INFO.phone}</li>
                <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 shrink-0" /> {SHOP_INFO.address}</li>
                <li className="flex items-center gap-2"><Clock size={14} /> Today: {SHOP_INFO.hours.find(h => h.day === today)?.open}</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40 uppercase tracking-widest">
            <p>© 2026 Slice & Sizzle Pizza Co. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
