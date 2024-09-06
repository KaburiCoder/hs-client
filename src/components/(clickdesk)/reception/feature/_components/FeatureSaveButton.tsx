import { useDeskFeatureStore } from "@/stores/clickdesk/feature/desk-feature-store";
import { Button } from "@nextui-org/react";
import React from "react";
import { DeskSettings } from "../_types/desk-settings";

interface Props {
  onSaveClick: (settings: DeskSettings) => void;
  isDisabled?: boolean;
}
const FeatureSaveButton = ({ isDisabled, onSaveClick }: Props) => {
  const getState = useDeskFeatureStore((state) => state.getState);

  function handleSaveClick(): void {
    const state = getState();
    onSaveClick(state);
  }

  return (
    <Button color="primary" isDisabled={isDisabled} onClick={handleSaveClick}>
      저장
    </Button>
  );
};

export default FeatureSaveButton;
