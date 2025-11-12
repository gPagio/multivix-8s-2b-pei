import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
}

export const GameOverScreen = ({ score, onRestart }: GameOverScreenProps) => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50 animate-slide-up">
      <div className="bg-card p-8 rounded-3xl shadow-2xl border-4 border-primary max-w-md w-full mx-4 text-center">
        <Trophy className="w-20 h-20 text-primary mx-auto mb-4 animate-bounce-in" />
        <h2 className="text-4xl font-bold mb-2 text-foreground">
          Fim de Jogo!
        </h2>
        <p className="text-xl text-muted-foreground mb-6">
          Você despoluiu a cidade com {score} pontos!
        </p>

        <div className="bg-primary/10 rounded-2xl p-6 mb-6">
          <p className="text-lg font-semibold text-primary mb-2">
            Parabéns! 🎉
          </p>
          <p className="text-sm text-muted-foreground">
            Você ajudou o meio ambiente separando o lixo corretamente!
          </p>
        </div>

        <Button onClick={onRestart} size="lg" className="w-full text-lg gap-2">
          <RotateCcw className="w-5 h-5" />
          Jogar Novamente
        </Button>
      </div>
    </div>
  );
};
