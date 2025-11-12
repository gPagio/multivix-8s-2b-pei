import { TrashItem } from "@/types/game";
import { cn } from "@/lib/utils";

interface DraggableTrashProps {
  item: TrashItem;
  onDragStart: (item: TrashItem) => void;
}

export const DraggableTrash = ({ item, onDragStart }: DraggableTrashProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = "move";
    onDragStart(item);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-xl cursor-grab active:cursor-grabbing",
        "bg-card border-2 border-border shadow-lg",
        "hover:scale-110 hover:shadow-xl transition-all duration-200",
        "animate-bounce-in"
      )}
    >
      <div className="text-4xl mb-2">{item.emoji}</div>
      <p className="text-xs font-medium text-center text-card-foreground">
        {item.name}
      </p>
    </div>
  );
};
