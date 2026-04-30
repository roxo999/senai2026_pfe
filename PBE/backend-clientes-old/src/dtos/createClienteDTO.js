export function createClientesDTO(data) {
  const { nome, email, idade } = data;

  // Validação de entrada/formato
  if (typeof nome !== "string" || nome.trim() === "") {
    throw new Error("Campo 'nome' é obrigatório");
  }

  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    email.trim() === ""
  ) {
    throw new Error("Campo 'email' inválido");
  }

  if (typeof idade !== "number" || Number.isNaN(idade)) {
    throw new Error("Campo 'idade' deve ser um número");
  }
  let a = 10;
  a = a+100;
  a= 'teste';

  return {
    nome: nome.trim(),
    email: email.trim().toLowerCase(),
    idade,
  };
}
