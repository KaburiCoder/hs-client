import { paths } from "@/paths";
import * as sock from "health-screening-shared/interfaces.socket";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Check, ThumbsUp } from "lucide-react";
interface PatientCardProps {
  data: sock.ReceptionPatient;
}

export function PatientCard({ data }: PatientCardProps) {
  const { push } = useRouter();
  const { name, birthday, targetName, kinds } = data;
  const setPatient = useSelectionPatientStore((state) => state.setPatient);

  function handlePush(path: string): void {
    setPatient(data);
    push(path);
  }

  return (
    <Card className="flex flex-row justify-between p-4">
      <div className="flex flex-col">
        <h4 className="flex-1 text-xl font-bold">{name}</h4>
        <p className="text-sm font-bold uppercase">{birthday}</p>
        <small className="text-default-500">{targetName}</small>
      </div>
      <div className="flex flex-col gap-2">
        {kinds.map((k, i) => (
          <Button
            className="text-white"
            key={i}
            startContent={k.written ? <ThumbsUp /> : undefined}
            color={k.written ? "success" : "primary"}
            onClick={handlePush.bind(null, paths.questionnaire)}
          >
            건강검진 문진표
          </Button>
        ))}
      </div>
    </Card>
  );
}
