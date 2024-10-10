import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { WebAppUser } from "@/models/web-app-user";
import { apiPaths } from "@/shared/paths";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWebAppUser } from "../api/delete-web-app-user";

interface UseWebAppUserSettingsProps {
  onDeleteSuccess?: (data: WebAppUser) => void;
}
export function useWebAppUserSettings(props?: UseWebAppUserSettingsProps) {
  const queryClient = useQueryClient();
  const { user } = useServerCookie();
  const { data, mutate: deleteMutate, isPending } = useMutation({
    mutationFn: deleteWebAppUser,
    onSuccess: (data) => {      
      // WebAppUsersTable 쿼리 재요청
      const queryKey = apiPaths.webAppUsers.hsUserId(user?.userId ?? "");
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      props?.onDeleteSuccess?.(data);
    },
  });

  function handleDeleteUser(webAppUser: WebAppUser): void {
    const id = prompt("계정을 삭제하시려면 계정의 아이디를 입력해주세요.");
    if (id?.toLowerCase() === webAppUser.csUserId.toLowerCase()) {
      deleteMutate(webAppUser.id);
    } else if (id) {
      alert("아이디를 다시 입력해주세요.");
    }
  }

  console.log("delete", data);
  return { handleDeleteUser, isPending };
}
