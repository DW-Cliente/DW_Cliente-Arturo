class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Usuario extends Persona {
  email: string;
  password: string;

  constructor(nombre: string, edad: number, email: string, password: string) {
    super(nombre, edad);
    this.email = email;
    this.password = password;
  }
}

class Cliente extends Persona {
  vip: boolean;

  constructor(nombre: string, edad: number, vip: boolean) {
    super(nombre, edad);
    this.vip = vip;
  }
}

const p: Persona = new Usuario("Juan", 35, "juan@email.com", "1234");
const p2: Persona = new Cliente("Pepe", 64, true);
const personas: Persona[] = [p, p2];

console.log(p.edad);
if (p instanceof Usuario) {
  console.log(p.email);
}
console.log((p as Usuario).password);

console.log(personas);

const s = {
    nombre: "Pepe",
};
console.log((s as Usuario).email);
