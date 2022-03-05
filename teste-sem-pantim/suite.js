import { printSuccesso, printErro, printLinha } from './mensagens.js'

export const seEsperaQue = (teste) => ({
  seja: (esperado) => {
    if (teste === esperado){
      printSuccesso()
      printLinha()
    } else {
      printErro()
      printLinha()
    }
  },
  
  naoSeja: (esperado) => { 
    if (teste !== esperado){
      printSuccesso()
      printLinha()
    } else {
      printErro()
      printLinha()
    }
  }
})

export const esteTeste = (descricao, funcaoCallback) => {
    console.log(`\n${descricao}`)
    funcaoCallback()
}