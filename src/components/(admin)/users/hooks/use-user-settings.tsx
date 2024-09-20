import { UserSettings } from "@/models/user-settings";
import { apiPaths } from "@/paths";
import { updateUser } from "@/services/users/update-user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { UserSettingsDialogProps } from "../dialog/UserSettingsDialog";
import { deleteUser } from "@/services/users/delete-user";
import { GeoLocation } from "@/lib/hooks/use-geo-location";
import { getUserById } from "@/services/users/get-user-by-id";

export const useUserSettings = ({
  user,
  isOpen,
  onClose,
}: UserSettingsDialogProps) => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [settings, setSettings] = useState<UserSettings>();
  const queryClient = useQueryClient();
  const { data: newUser } = useQuery({
    queryKey: [apiPaths.users.id(user.id)],
    queryFn: () => getUserById(user.id),
    enabled: isOpen,
  });
  const [geoLocation, setGeoLocation] = useState<GeoLocation | undefined>();

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
    const currentUser = newUser ?? user;
    setGeoLocation(
      currentUser.location && {
        lng: currentUser.location.coordinates[0],
        lat: currentUser.location.coordinates[1],
      },
    );
  }, [isOpen, newUser, user]);

  useEffect(() => {
    setOrgName(user.orgName);
    setEmail(user.email);
    setSettings(user.settings);
    if(!isOpen){
      queryClient.removeQueries({ queryKey: [apiPaths.users.id(user.id)] });
    }
  }, [isOpen]);
  
  return {
    user: newUser ?? user,
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
