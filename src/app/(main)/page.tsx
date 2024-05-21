"use client";
import MainBody from "@/components/(main)/root/main-body";
import { lockScreen } from "./lock-screen";

const Home = () => {
  return <MainBody />;
};

export default lockScreen(Home);
