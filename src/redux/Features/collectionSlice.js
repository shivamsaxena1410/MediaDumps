import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const alreadyExist = state.items.find(item => item.id === action.payload.id);
            if (!alreadyExist) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items));
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('collection', JSON.stringify(state.items));
        },
        clearCollection: (state) => {
            state.items = [];
            localStorage.removeItem('collection');
        },
        addToast: () => {
            toast.success('Item added to collection! ✅', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            })

        },

        removeToast: () => {
            toast.success('Item removed from collection! ✅', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            })
            
        },
        
        allClearToast: (state) => {
            if (state.items.length > 0) {
                toast.success('All items cleared from collection! ✅', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Zoom,
            });
        } else {
                toast.info('Collection is already empty! ⚠️', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Zoom,
                })

            }

        }
    }

})

export const { addItem, removeItem, clearCollection, addToast, removeToast, allClearToast, } = collectionSlice.actions;
export default collectionSlice.reducer;