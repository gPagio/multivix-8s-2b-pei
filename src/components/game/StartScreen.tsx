import { Button } from "@/components/ui/button";
import { Play, Recycle } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <Recycle className="w-24 h-24 text-primary mx-auto mb-6 animate-wiggle" />

        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
          Despolua a Cidade
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Ajude o meio ambiente separando o lixo corretamente!
        </p>

        <div className="bg-card rounded-3xl p-8 shadow-2xl border-2 border-border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Como Jogar
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-organic-light rounded-2xl p-4 border-2 border-organic">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-bold text-organic mb-1">Orgânico</h3>
              <p className="text-sm text-muted-foreground">
                Restos de comida, cascas de frutas
              </p>
            </div>

            <div className="bg-recyclable-light rounded-2xl p-4 border-2 border-recyclable">
              <div className="text-4xl mb-2">♻️</div>
              <h3 className="font-bold text-recyclable mb-1">Reciclável</h3>
              <p className="text-sm text-muted-foreground">
                Papel, plástico, vidro, metal
              </p>
            </div>

            <div className="bg-electronic-light rounded-2xl p-4 border-2 border-electronic">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-electronic mb-1">Eletrônico</h3>
              <p className="text-sm text-muted-foreground">
                Pilhas, celulares, lâmpadas
              </p>
            </div>
          </div>

          <div className="text-left space-y-2 text-muted-foreground">
            <p>📌 Arraste cada item para a lixeira correta</p>
            <p>⭐ Ganhe pontos ao acertar</p>
            <p>❤️ Você tem 3 vidas - não erre muito!</p>
            <p>🎯 Separe o máximo de lixo possível</p>
          </div>
        </div>

        <Button
          onClick={onStart}
          size="lg"
          className="text-xl px-8 py-6 gap-3 hover:scale-105 transition-transform"
        >
          <Play className="w-6 h-6" />
          Começar a Jogar
        </Button>
      </div>
    </div>
  );
};
