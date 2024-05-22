"use client";
import MainBody from "@/components/(main)/root/main-body";
import { lockScreen } from "../../components/(main)/root/lock-screen";

const Home = () => {
  return <MainBody />;
};

export default lockScreen(Home);
