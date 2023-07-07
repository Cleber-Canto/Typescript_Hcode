let admin: boolean = true;

admin = Boolean(undefined);

console.log(admin);

let senha: string = "123456789";
let senhaSegura: boolean;

senhaSegura = (senha.length > 8);

console.log(senhaSegura);