import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, CheckCircle } from 'lucide-react';

export interface CartItem {
  product: Product;
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.10 : 0;
  const freeShippingThreshold = 5000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 120;
  const total = subtotal - discount + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'COMMUTE10' || promoCode.trim().length > 0) {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#ffffff] border-l border-[#e5e3dc] shadow-2xl flex flex-col justify-between text-[#111111] relative z-10 animate-slideLeft">
          
          {/* Header */}
          <div className="p-6 border-b border-[#e5e3dc] flex items-center justify-between bg-[#f9f8f6]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#b89047]" />
              <h2 className="font-display text-lg font-bold uppercase tracking-wider text-[#111111]">
                YOUR BAG ({cartItems.reduce((a, c) => a + c.quantity, 0)})
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-[#666666] hover:text-[#111111] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#f2f1ed] px-6 py-3 border-b border-[#e5e3dc] text-xs font-mono">
            {remainingForFreeShipping > 0 ? (
              <p className="text-[#555555]">
                ADD <span className="text-[#b89047] font-bold">৳{remainingForFreeShipping.toLocaleString()}</span> MORE FOR FREE SHIPPING
              </p>
            ) : (
              <p className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>UNLOCKED FREE EXPRESS SHIPPING!</span>
              </p>
            )}
            <div className="w-full h-1.5 bg-[#e5e3dc] rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#b89047] to-emerald-600 transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutSuccess ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111111] uppercase">ORDER CONFIRMED!</h3>
                <p className="text-xs text-[#555555] font-sans max-w-xs mx-auto leading-relaxed">
                  Thank you for commuting with us. Order confirmation & tracking code has been dispatched to your email.
                </p>
                <button
                  onClick={() => {
                    setCheckoutSuccess(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#111111] text-white font-mono font-bold text-xs uppercase shadow-md"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4 text-[#888888]">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1" />
                <p className="font-mono text-xs uppercase">YOUR BAG IS CURRENTLY EMPTY</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#f4f3ef] border border-[#e5e3dc] text-[#111111] font-mono text-xs hover:border-[#b89047]"
                >
                  EXPLORE COMMUTE DROPS
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 p-3 bg-[#f9f8f6] border border-[#e5e3dc] hover:border-[#b89047] transition-colors"
                >
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-[#eee]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-sans font-semibold text-xs text-[#111111] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.size)}
                          className="text-[#888888] hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] font-mono text-[#666666] mt-1">
                        SIZE: <span className="text-[#111111] font-bold">{item.size}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#e5e3dc] bg-[#ffffff]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                          className="px-2 py-1 text-[#666666] hover:text-[#111111]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-mono text-xs text-[#111111] font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                          className="px-2 py-1 text-[#666666] hover:text-[#111111]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono text-xs font-bold text-[#111111]">
                        ৳{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && !checkoutSuccess && (
            <div className="p-6 border-t border-[#e5e3dc] bg-[#f9f8f6] space-y-4">
              
              {/* Promo Code Box */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="PROMO CODE (e.g. COMMUTE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#ffffff] border border-[#e5e3dc] px-3 py-2 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#b89047]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#111111] hover:bg-[#b89047] text-xs font-mono font-bold text-white uppercase"
                >
                  APPLY
                </button>
              </form>

              {promoApplied && (
                <p className="text-[11px] font-mono text-emerald-700 font-bold">
                  ✓ 10% DISCOUNT APPLIED
                </p>
              )}

              {/* Price Summary */}
              <div className="space-y-1.5 font-mono text-xs text-[#666666]">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span className="text-[#111111] font-bold">৳{subtotal.toLocaleString()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>DISCOUNT (10%)</span>
                    <span>-৳{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>ESTIMATED SHIPPING</span>
                  <span className="text-[#111111] font-bold">{shippingFee === 0 ? 'FREE' : `৳${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#111111] pt-2 border-t border-[#e5e3dc]">
                  <span>TOTAL</span>
                  <span className="text-[#b89047]">৳{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#111111] hover:bg-[#b89047] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#777777]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b89047]" />
                <span>SECURE ENCRYPTED CHECKOUT // CASH ON DELIVERY AVAILABLE</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
