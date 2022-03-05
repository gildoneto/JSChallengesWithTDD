const msgSucesso = "\x1b[1;32m 🠕🠕🠕 TESTE PASSOU ✅ \x1b[0m"
const msgErro = "\x1b[1;41m 🠕🠕🠕 ERRO NO TESTE ❌ \x1b[0m"
const linha = " ================================\n"

export const printSuccesso = () => console.log(`${msgSucesso}`)
export const printErro = () => console.log(`${msgErro}`)
export const printLinha = () => console.log(linha)