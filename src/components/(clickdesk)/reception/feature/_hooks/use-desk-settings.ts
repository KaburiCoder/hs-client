import { apiPaths } from '@/paths'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchDeskSettings } from '../_api/fetch-desk-settings'
import { saveDeskFeature } from '../_api/save-desk-feature'
import toast from 'react-hot-toast'

const useDeskSettings = () => {
  const { data, isPending, refetch } = useQuery({
    queryKey: [apiPaths.clickdesk.settings],
    queryFn: fetchDeskSettings,
  })

  const { mutate: saveFeature, isPending: isSaveFeaturePending } = useMutation({
    mutationKey: [apiPaths.clickdesk.settingsFeature],
    mutationFn: saveDeskFeature,
    onSuccess: () => {
      toast.success("저장되었습니다");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return {
    settings: data,
    saveFeature,
    isPending: isPending || isSaveFeaturePending,
  }
}

export default useDeskSettings
