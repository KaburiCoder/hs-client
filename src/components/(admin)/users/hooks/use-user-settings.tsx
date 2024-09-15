import { UserSettings } from "@/models/user-settings";
import { apiPaths } from "@/paths";
import { updateUser } from "@/services/users/update-user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { UserSettingsDialogProps } from "../dialog/UserSettingsDialog";
import { deleteUser } from "@/services/users/delete-user";
import { GeoLocation } from "@/lib/hooks/use-geo-location";

export const useUserSettings = ({
  user,
  isOpen,
  onClose,
}: UserSettingsDialogProps) => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [settings, setSettings] = useState<UserSettings>();
  const queryClient = useQueryClient();
  const [geoLocation, setGeoLocation] = useState<GeoLocation | undefined>(
    user.location && {
      lng: user.location.coordinates[0],
      lat: user.location.coordinates[1],
    },
  );

  const { mutate, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [apiPaths.users.root] });
      onClose?.();
    },
  });
  const { mutate: deleteMutate, isPending: isDeletePending } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [apiPaths.users.root] });
      onClose?.();
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    mutate({ id: user.id, data: { email, orgName, settings, geoLocation } });
  }

  function handleServiceSelectedChange(
    key: keyof UserSettings,
    isSelected: boolean,
  ): void {
    setSettings((prev) => ({ ...prev, [key]: { use: isSelected } }));
  }

  useEffect(() => {
    setOrgName(user.orgName);
    setEmail(user.email);
    setSettings(user.settings);
  }, [isOpen]);

  return {
    orgName,
    email,
    settings,
    isPending: isPending || isDeletePending,
    deleteMutate,
    setEmail,
    setOrgName,
    handleSubmit,
    handleServiceSelectedChange,
    geoLocation,
    setGeoLocation,
  };
};
