import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2 } from 'lucide-react';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    // In a real app, you would POST to your backend here
    setTimeout(() => {
      console.log('--------------------------------');
      console.log('🎉 New RSVP Received:');
      console.log('Name:', formData.name);
      console.log('Phone:', formData.phone);
      console.log('Guests:', formData.guests);
      console.log('--------------------------------');
      
      setStatus('success');
    }, 1500);
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({ name: '', phone: '', guests: '1' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-[#1a0505] border border-luxury-gold/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-luxury-gold/10 bg-gradient-to-r from-luxury-gold/10 to-transparent">
              <h3 className="text-xl text-luxury-gold font-serif font-bold">出席确认</h3>
              <button 
                onClick={resetForm}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4 border border-green-500/50"
                  >
                    <Check size={32} />
                  </motion.div>
                  <h4 className="text-xl text-white font-bold mb-2">提交成功</h4>
                  <p className="text-white/60 mb-6">感谢您的回复，期待您的莅临。</p>
                  <button 
                    onClick={resetForm}
                    className="px-6 py-2 border border-luxury-gold/30 text-luxury-gold rounded hover:bg-luxury-gold hover:text-black transition-colors"
                  >
                    关闭
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxury-gold/70 mb-2">您的姓名 / Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-luxury-gold/20 rounded p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                      placeholder="请输入姓名"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxury-gold/70 mb-2">联系电话 / Phone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/5 border border-luxury-gold/20 rounded p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                      placeholder="请输入手机号码"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxury-gold/70 mb-2">出席人数 / Guests</label>
                    <select 
                      value={formData.guests}
                      onChange={e => setFormData({...formData, guests: e.target.value})}
                      className="w-full bg-white/5 border border-luxury-gold/20 rounded p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors appearance-none"
                    >
                      <option value="1" className="bg-[#2b0505]">1位</option>
                      <option value="2" className="bg-[#2b0505]">2位</option>
                      <option value="3" className="bg-[#2b0505]">3位</option>
                      <option value="4" className="bg-[#2b0505]">3位以上</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-luxury-gold text-black font-bold py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        提交中...
                      </>
                    ) : (
                      '确认提交'
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Decorative bottom edge */}
            <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RSVPModal;