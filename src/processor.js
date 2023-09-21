class Processor {
    constructor(memory) {
      this.memory = memory;
      this.pc = 0; // Contador de programa
      this.registers = new Array(8).fill(0); // Registros del procesador
    }
  
    executeInstruction(instruction) {
      // Implementa aquí la ejecución de instrucciones
      // Por ejemplo, podrías tener un switch para diferentes tipos de instrucciones
    }
  }
  
  export default Processor;
  