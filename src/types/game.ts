export type TrashType = "organic" | "recyclable" | "electronic";

export interface TrashItem {
  id: string;
  name: string;
  type: TrashType;
  emoji: string;
}

export interface GameState {
  score: number;
  lives: number;
  level: number;
  isGameOver: boolean;
  itemsProcessed: number;
}
