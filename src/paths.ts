export const paths = {
  root: "/",
  login: "/login",
  signin: "/signin",
  signup: "/signup",
  signout: "/signout",
  findPw: "/findpw",
  qn: {
    root: "/qn",
    general: "/qn/general",
    lifestyle: "/qn/lifestyle",
    cancer: "/qn/cancer",
  },
  images: {
    eClickIco: "/images/eClick48x48.ico",
    mainLogo: "/images/main_logo.png",
    loadingQute: "/images/loading_qute.jpg",
  },
  changepw: (token: string) => `/${token}/changepw`,
  settings: (path: "lockpw") => `/settings/${path}`,
  success: (kind: string) => `/success?kind=${kind}`,
  adminSettings: (path: "common" | "users") => `/admin/settings/${path}`,
  webApp: (path: "users") => `/web-app/${path}`,
  adminClickDesk: (path: "ad") => `/admin/settings/clickdesk/${path}`,
  clickdesk: {
    root: "/clickdesk",
    reception: function (path: "doctor" | "reason" | "hospinfo" | "feature") {
      return `${this.root}/reception/${path}`
    },
  },
};

export const apiPaths = {
  currentUser: "/currentuser",
  adminSettings: "/admin-settings",
  adminSettingsFind: "/admin-settings/find",
  token: {
    validate: (token: string) => `/token/${token}/validate`
  },
  images: { root: "/images", file: (fileName: string) => `/images/${fileName}` },
  adFile: { root: "/ad-file", id: (id: string) => `/ad-file/${id}` },
  users: {
    root: "/users",
    id: (id: string) => `/users/${id}`,
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`,
    checkpw: (userId: string) => `/users/${userId}/checkpw`,
    changepw: (userId: string) => `/users/${userId}/changepw`,
    findpw: (userId: string) => `/users/${userId}/findpw`,
    changeEmail: "/users/change-email",
  },
  webApp: {
    hsUserId: (hsUserId: string) => `/user/${hsUserId}`,
  },
  clickdesk: {
    doctor: "/clickdesk/doctor",
    doctorId: (id: string) => `/clickdesk/doctor/${id}`,
    doctorUpdate: (id: string) => `/clickdesk/doctor/${id}/update`,
    doctorSeq: "/clickdesk/doctor/seq",
    reason: "/clickdesk/reason",
    reasonWithDoctorId: function (doctorId: string) { return `${this.reason}/${doctorId}` },
    reasonAll: "/clickdesk/reason/all",
    settings: "/clickdesk/settings",
    settingsFeature: "/clickdesk/settings/feature",
    reasonUpdate: (id: string) => `/clickdesk/reason/${id}/update`,
    reasonId: (id: string) => `/clickdesk/reason/${id}`,
  },
}