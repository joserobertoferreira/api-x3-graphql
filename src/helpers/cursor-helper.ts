export interface CompositeCursor {
  primary: string | number;
  secondary: string | number; // O desempatador
}

export function encodeCompositeCursor(cursorObject: CompositeCursor): string {
  // Converte o objeto para uma string JSON e depois para Base64
  return Buffer.from(JSON.stringify(cursorObject)).toString('base64');
}

export function decodeCompositeCursor(encodedCursor: string): CompositeCursor {
  // Converte de Base64 de volta para string JSON e depois para objeto
  const jsonString = Buffer.from(encodedCursor, 'base64').toString('ascii');
  return JSON.parse(jsonString);
}
