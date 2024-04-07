import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            user: null,
            updatedAt: new Date().toLocaleString(),
            total: null,
            items: [],
            orders: [],

        }
    },
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.value.items.find(
                (item) => item.id === action.payload.id,
            );
            if (productRepeated) {
                const itemsUpdated = state.value.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                        return item;
                    }
                    return item;
                });
                const total = itemsUpdated.reduce(
                    (acc, currentItem) => acc + (currentItem.price * currentItem.quantity), 0); // Usa acc + (currentItem.price * currentItem.quantity) para sumar el precio
                state.value = {
                    ...state.value,
                    items: itemsUpdated,
                    total,
                    updatedAt: new Date().toLocaleString()
                };
            } else {
                state.value.items.push(action.payload);
                const total = state.value.items.reduce(
                    (acc, currentItem) => acc + (currentItem.price * currentItem.quantity), 0); // Usa acc + (currentItem.price * currentItem.quantity) para sumar el precio
                state.value = {
                    ...state.value,
                    total,
                    updatedAt: new Date().toLocaleString()
                };
            }
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload.id;
            const itemsUpdated = state.value.items.filter((item) => item.id !== itemIdToRemove);
            const total = itemsUpdated.reduce(
                (acc, currentItem) => acc + (currentItem.price * currentItem.quantity), 0); // Usa acc + (currentItem.price * currentItem.quantity) para sumar el precio
            state.value = {
                ...state.value,
                items: itemsUpdated,
                total,
                updatedAt: new Date().toLocaleString()
            };
        },
        confirmCart: (state) => {
            const newOrder = {
                items: state.value.items,
                total: state.value.total,
                orderDate: new Date().toLocaleString(),
            };
            if (!Array.isArray(state.value.orders)) {
                state.value.orders = [];
            }
            state.value.orders.push(newOrder);
            state.value.items = [];
            state.value.total = null;
            state.value.updatedAt = new Date().toLocaleString();
        },
        
        setOrders: (state, action) => {
            state.value.orders = action.payload;
        }
      
    }
    
});

export const { addItem, removeItem, confirmCart, setOrders } = cartSlice.actions;

export default cartSlice.reducer;