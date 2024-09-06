"use client";
import { useDeskFeatureStore } from "@/stores/clickdesk/feature/desk-feature-store";
import { useEffect } from "react";
import { ClickBodyWrapper } from "../../ClickdeskBodyWrapper";
import FeatureSaveButton from "./_components/FeatureSaveButton";
import { QRSettings } from "./_components/QRSettings";
import useDeskSettings from "./_hooks/use-desk-settings";

const FeatureBody = () => {
  const { settings, isPending, saveFeature } = useDeskSettings();
  const isChanged = useDeskFeatureStore((state) => state.isChanged);
  const setInit = useDeskFeatureStore((state) => state.setInit);

  useEffect(() => {
    if (!settings) return;

    setInit({ unUseQR: settings.unUseQR });
  }, [settings]);

  return (
    <ClickBodyWrapper
      title="기능 설정"
      edgeComponent={
        <FeatureSaveButton
          isDisabled={!isChanged || isPending}
          onSaveClick={(data) => saveFeature(data)}
        />
      }
    >
      <QRSettings />
    </ClickBodyWrapper>
  );
};

export default FeatureBody;
