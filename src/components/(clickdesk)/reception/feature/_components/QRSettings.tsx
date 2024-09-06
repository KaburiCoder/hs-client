import React, { useState } from "react";
import GridHeader from "../../_components/GridHeader";
import GridBody from "../../_components/GridBody";
import { Checkbox } from "@nextui-org/react";
import { useDeskFeatureStore } from "@/stores/clickdesk/feature/desk-feature-store";

const QRSettings = () => {
  const unUseQR = useDeskFeatureStore((state) => state.unUseQR);
  const setUnUseQR = useDeskFeatureStore((state) => state.setUnUseQR);

  console.log('un', unUseQR);
  
  return (
    <div className="grid" style={{ gridTemplateColumns: "8rem 1fr" }}>
      <GridHeader>QR 인증</GridHeader>
      <GridBody>
        <Checkbox
          color="warning"
          isSelected={unUseQR}
          onChange={(e) => setUnUseQR(e.target.checked)}
        >
          사용하지 않음
        </Checkbox>
      </GridBody>
    </div>
  );
};

export { QRSettings };
