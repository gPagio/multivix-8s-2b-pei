import { GameState } from "@/types/game";
import { Heart, Star, Trophy } from "lucide-react";

interface GameHeaderProps {
  gameState: GameState;
}

export const GameHeader = ({ gameState }: GameHeaderProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-card rounded-2xl shadow-lg border-2 border-border">
      <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl">
        <Star className="w-5 h-5 text-primary fill-primary" />
        <span className="font-bold text-lg text-primary">
          Pontos: {gameState.score}
        </span>
      </div>

      <div className="flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-xl">
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart
              key={i}
              className={`w-5 h-5 ${
                i < gameState.lives
                  ? "text-destructive fill-destructive"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <span className="font-bold text-destructive">Vidas</span>
      </div>

      <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-xl">
        <Trophy className="w-5 h-5 text-secondary" />
        <span className="font-bold text-secondary">
          Nível {gameState.level}
        </span>
      </div>
    </div>
  );
};
