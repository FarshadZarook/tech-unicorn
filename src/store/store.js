import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCart = create(
    persist(
        (set, get) => ({
            total: 0,
            totalItems: 0,
            cart: [],
            addTocart: (params) => {
                set((state) => ({
                    totalItems: state.totalItems + 1,
                    total: state.total + parseFloat(params.price),
                    cart: [...state.cart, params],
                }));
            },
            clearCart: () => set({ totalItems: 0, total: 0, cart: [] }),
            removeFromCart: (params) =>
                set((state) => ({
                    total: state.total - params.price,
                    totalItems: state.totalItems - 1,
                    cart: state.cart.filter(
                        (item) => item.id !== params.id
                    ),
                })),
        }),
        { name: 'cart' }
    )
);
export default useCart;