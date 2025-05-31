const getStorage = (name: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(name) || "";
  }
  return null;
};
const setStorage = (name: string, item: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(name, item);
  }
};

const deleteStorage = (name: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(name);
  }
};

export { deleteStorage, setStorage, getStorage };
