import { create } from "zustand";

const postStore = create((set) => ({
  post: {},
  setPost: (newPost) => set({ post: newPost }),
}));

export default postStore;
