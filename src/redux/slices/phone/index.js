import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    data: "hello",
    wishlist: {
        id: [],
        count: 0
    },
    cart: 0
}

export const phoneSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {

        addtoWishList: (state, action) => {

            if (!state.wishlist.id.includes(action.payload)) {
                state.wishlist.id.push(action.payload)
                state.wishlist.count += 1
            }
            else {
                const idsToRemove = action.payload;
                state.wishlist.id = state.wishlist.id.filter(id => !id==idsToRemove);

                // Adjust the count accordingly
                state.wishlist.count -= 1            }
        },
        removeWishlist: (state, action) => {    
            const idsToRemove = action.payload; // Array of IDs to remove

            // Filter out the IDs that are in the idsToRemove array
            state.wishlist.id = state.wishlist.id.filter(id => !idsToRemove.includes(id));

            // Adjust the count accordingly
            state.wishlist.count -= 1        }
    }


})


export const { addtoWishList, removeWishlist } = phoneSlice.actions;
export default phoneSlice.reducer;
