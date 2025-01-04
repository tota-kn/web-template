type Store = {
  count: number;
};
export const useStore = defineStore("store", {
  state: (): Store => ({
    count: 0,
  }),
  actions: {
    init(): void {
      this.count = 0;
    },
    add(): void {
      this.count++;
    },
  },
});
