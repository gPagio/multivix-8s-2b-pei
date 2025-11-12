import { TrashItem } from "@/types/game";

export const trashItems: TrashItem[] = [
  // Organic
  { id: "1", name: "Casca de Banana", type: "organic", emoji: "🍌" },
  { id: "2", name: "Casca de Laranja", type: "organic", emoji: "🍊" },
  { id: "3", name: "Folhas", type: "organic", emoji: "🍃" },
  { id: "4", name: "Restos de Comida", type: "organic", emoji: "🍽️" },
  { id: "5", name: "Casca de Ovo", type: "organic", emoji: "🥚" },
  { id: "6", name: "Borra de Café", type: "organic", emoji: "☕" },

  // Recyclable
  { id: "7", name: "Garrafa Plástica", type: "recyclable", emoji: "🍶" },
  { id: "8", name: "Lata de Alumínio", type: "recyclable", emoji: "🥫" },
  { id: "9", name: "Jornal", type: "recyclable", emoji: "📰" },
  { id: "10", name: "Papelão", type: "recyclable", emoji: "📦" },
  { id: "11", name: "Garrafa de Vidro", type: "recyclable", emoji: "🍾" },
  { id: "12", name: "Papel", type: "recyclable", emoji: "📄" },

  // Electronic
  { id: "13", name: "Pilha", type: "electronic", emoji: "🔋" },
  { id: "14", name: "Celular", type: "electronic", emoji: "📱" },
  { id: "15", name: "Lâmpada", type: "electronic", emoji: "💡" },
  { id: "16", name: "Fone de Ouvido", type: "electronic", emoji: "🎧" },
  { id: "17", name: "Carregador", type: "electronic", emoji: "🔌" },
  { id: "18", name: "Mouse", type: "electronic", emoji: "🖱️" },
];
