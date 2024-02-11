import { Send } from "lucide-react";
import { Input } from "./Input";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-zinc-900">
      <Input.Wrapper>
        <Input.Label description="Informe seu nome" />
        <Input.InputArea>
          <Input.TextField name="caralho maluco" />
          <Input.Submit />
        </Input.InputArea>
      </Input.Wrapper>
    </div>
  );
}
