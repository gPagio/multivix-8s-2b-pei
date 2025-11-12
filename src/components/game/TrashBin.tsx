import { TrashType } from "@/types/game";
import { cn } from "@/lib/utils";

interface TrashBinProps {
  type: TrashType;
  isHighlighted: boolean;
  onDrop: (type: TrashType) => void;
}

const binConfig = {
  organic: {
    name: "Orgânico",
    emoji: "🌱",
    color: "bg-organic",
    lightColor: "bg-organic-light",
    borderColor: "border-organic",
  },
  recyclable: {
    name: "Reciclável",
    emoji: "♻️",
    color: "bg-recyclable",
    lightColor: "bg-recyclable-light",
    borderColor: "border-recyclable",
  },
  electronic: {
    name: "Eletrônico",
    emoji: "⚡",
    color: "bg-electronic",
    lightColor: "bg-electronic-light",
    borderColor: "border-electronic",
  },
};

export const TrashBin = ({ type, isHighlighted, onDrop }: TrashBinProps) => {
  const config = binConfig[type];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop(type);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        "relative flex flex-col items-center justify-center rounded-2xl border-4 transition-all duration-300",
        "w-full h-48 md:h-56",
        isHighlighted
          ? `${config.color} scale-110 shadow-2xl`
          : `${config.lightColor} ${config.borderColor}`,
        "hover:scale-105"
      )}
    >
      <div
        className={cn(
          "text-6xl mb-2 transition-transform duration-300",
          isHighlighted && "animate-bounce-in"
        )}
      >
        {config.emoji}
      </div>
      <h3
        className={cn(
          "text-xl font-bold",
          isHighlighted ? "text-white" : "text-foreground"
        )}
      >
        {config.name}
      </h3>
    </div>
  );
};
