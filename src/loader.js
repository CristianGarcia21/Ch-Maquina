function loadProgram(memory, program) {
    for (let i = 0; i < program.length; i++) {
      memory.write(i, program[i]);
    }
  }
  
  export { loadProgram };
  