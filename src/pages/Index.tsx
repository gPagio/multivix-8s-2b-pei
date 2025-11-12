import { useState, useEffect } from "react";
import { TrashItem, TrashType, GameState } from "@/types/game";
import { trashItems } from "@/data/trashItems";
import { TrashBin } from "@/components/game/TrashBin";
import { DraggableTrash } from "@/components/game/DraggableTrash";
import { GameHeader } from "@/components/game/GameHeader";
import { GameOverScreen } from "@/components/game/GameOverScreen";
import { StartScreen } from "@/components/game/StartScreen";
import { toast } from "sonner";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    lives: 3,
    level: 1,
    isGameOver: false,
    itemsProcessed: 0,
  });
  const [currentItem, setCurrentItem] = useState<TrashItem | null>(null);
  const [draggedItem, setDraggedItem] = useState<TrashItem | null>(null);
  const [highlightedBin, setHighlightedBin] = useState<TrashType | null>(null);

  useEffect(() => {
    if (gameStarted && !gameState.isGameOver) {
      selectRandomItem();
    }
  }, [gameStarted]);

  const selectRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * trashItems.length);
    setCurrentItem(trashItems[randomIndex]);
  };

  const handleDragStart = (item: TrashItem) => {
    setDraggedItem(item);
  };

  const handleDrop = (binType: TrashType) => {
    if (!draggedItem) return;

    const isCorrect = draggedItem.type === binType;

    if (isCorrect) {
      const points = 10 * gameState.level;
      setGameState((prev) => ({
        ...prev,
        score: prev.score + points,
        itemsProcessed: prev.itemsProcessed + 1,
      }));
      toast.success(`Correto! +${points} pontos! 🎉`, {
        description: `${draggedItem.name} vai para ${
          binType === "organic"
            ? "orgânico"
            : binType === "recyclable"
            ? "reciclável"
            : "eletrônico"
        }!`,
      });
      selectRandomItem();
    } else {
      const newLives = gameState.lives - 1;
      setGameState((prev) => ({
        ...prev,
        lives: newLives,
        isGameOver: newLives === 0,
      }));
      toast.error("Ops! Lixeira errada! 😢", {
        description: `${draggedItem.name} não vai para ${
          binType === "organic"
            ? "orgânico"
            : binType === "recyclable"
            ? "reciclável"
            : "eletrônico"
        }!`,
      });

      if (newLives > 0) {
        selectRandomItem();
      }
    }

    setDraggedItem(null);
    setHighlightedBin(null);

    // Level up every 5 items
    if ((gameState.itemsProcessed + 1) % 5 === 0 && isCorrect) {
      setGameState((prev) => ({
        ...prev,
        level: prev.level + 1,
      }));
      toast.success("Subiu de nível! 🚀", {
        description: `Agora você está no nível ${gameState.level + 1}!`,
      });
    }
  };

  const handleRestart = () => {
    setGameState({
      score: 0,
      lives: 3,
      level: 1,
      isGameOver: false,
      itemsProcessed: 0,
    });
    setGameStarted(false);
    setCurrentItem(null);
  };

  const handleStart = () => {
    setGameStarted(true);
  };

  if (!gameStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  if (gameState.isGameOver) {
    return <GameOverScreen score={gameState.score} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <GameHeader gameState={gameState} />

        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-border">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
            Arraste o item para a lixeira correta:
          </h2>

          <div className="flex justify-center mb-8">
            {currentItem && (
              <DraggableTrash
                item={currentItem}
                onDragStart={handleDragStart}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <TrashBin
              type="organic"
              isHighlighted={highlightedBin === "organic"}
              onDrop={handleDrop}
            />
            <TrashBin
              type="recyclable"
              isHighlighted={highlightedBin === "recyclable"}
              onDrop={handleDrop}
            />
            <TrashBin
              type="electronic"
              isHighlighted={highlightedBin === "electronic"}
              onDrop={handleDrop}
            />
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            💡 Dica: Arraste o item para a lixeira correta para ganhar pontos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
