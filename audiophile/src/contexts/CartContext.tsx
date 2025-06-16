"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  updateQty: (slug: string, qty: number) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "quantity">, qty = 1) => {
    setItems((cur) => {
      const existing = cur.find((i) => i.slug === item.slug);
      if (existing) {
        return cur.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...cur, { ...item, quantity: qty }];
    });
  };

  const updateQty = (slug: string, qty: number) => {
    setItems((cur) => cur.map((i) => (i.slug === slug ? { ...i, quantity: qty } : i)));
  };

  const removeItem = (slug: string) => {
    setItems((cur) => cur.filter((i) => i.slug !== slug));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQty, removeItem, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
