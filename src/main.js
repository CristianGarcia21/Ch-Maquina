import Memory from './memory.js';
import Processor from './processor.js';
import { loadProgram } from './loader.js';

function main() {
  const osKernelSize = parseInt(prompt("Tamaño del núcleo del sistema operativo: "));
  const memorySize = osKernelSize + 1000; // Tamaño total de la memoria
  const memory = new Memory(memorySize);
  const processor = new Processor(memory);

  // Cargar el núcleo del sistema operativo (área reservada)
  for (let i = 0; i < osKernelSize; i++) {
    memory.write(i, 0);
  }

  // Cargar programas en el área disponible de memoria
  const program1 = [1, 2, 3, 4]; // Ejemplo de programa
  loadProgram(memory, program1);

  while (processor.pc < program1.length) {
    const instruction = memory.read(processor.pc);
    processor.executeInstruction(instruction);
    processor.pc++;
  }
}

main();
