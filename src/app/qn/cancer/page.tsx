"use client";
import withSelectPatient from "@/app/with-select-patient";
import CancerBody from "@/components/(qn)/cancer/cancer-body";
import React from "react";

const CancerPage = () => {
  return <CancerBody />;
};

// export default CancerPage;
export default withSelectPatient(CancerPage);
