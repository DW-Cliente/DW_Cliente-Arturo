export interface Persona {
    nombre: string;
    edad: number;
    esAdmin?: boolean;
}

export function esMayorDeEdad(persona: Persona): boolean {
    return persona.edad >= 18;
}