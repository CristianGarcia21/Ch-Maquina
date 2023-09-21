class Memory {
    constructor(size) {
      this.size = size;
      this.data = new Array(size).fill(0);
    }
  
    read(address) {
      if (address >= 0 && address < this.size) {
        return this.data[address];
      } else {
        throw new Error("Dirección de memoria fuera de rango");
      }
    }
  
    write(address, value) {
      if (address >= 0 && address < this.size) {
        this.data[address] = value;
      } else {
        throw new Error("Dirección de memoria fuera de rango");
      }
    }
  }
  
  export default Memory;
  