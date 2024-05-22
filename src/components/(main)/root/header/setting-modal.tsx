"use client";
import { ModalProps } from "@/lib/props/modal-props";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";
import { SettingAuth } from "./setting-auth";
import SettingBody from "./setting-body";

interface SettingModalProps extends ModalProps {}

export default function SettingModal({
  isOpen,
  onOpenChange,
}: SettingModalProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">환경설정</ModalHeader>
            <ModalBody>
              {isAuthorized ? (
                <SettingBody />
              ) : (
                <SettingAuth onSuccess={() => setIsAuthorized(true)} />
              )}
            </ModalBody>
            {isAuthorized && (
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  닫기
                </Button>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
