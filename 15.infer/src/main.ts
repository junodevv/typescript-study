type AType<T> = T extends infer R ? R : null;

const a: AType<number> = 1;