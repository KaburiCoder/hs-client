export const paths = {
  root: "/",
  login: "/login",
  signin: "/signin",
  signup: "/signup",
  signout: "/signout",
  findPw: "/findpw",
  questionnaire: "/questionnaire",
  lifestyle: "/lifestyle",
  images: {
    eClickIco: "/images/eClick48x48.ico",
    mainLogo: "/images/main_logo.png",
  },
  changepw: (token: string) => `/${token}/changepw`,
  settings: (path: "lockpw") => `/settings/${path}`,
  success: (kind: string) => `/success?kind=${kind}`,
  adminSettings: (path: "common" | "registuser") => `/admin/settings/${path}`
};

export const apiPaths = {
  adminSettings: "/admin-settings",
  adminSettingsFind: "/admin-settings/find",
  token: {
    validate: (token: string) => `/token/${token}/validate`
  },
  users: {
    checkpw: (userId: string) => `/users/${userId}/checkpw`,
    changepw: (userId: string) => `/users/${userId}/changepw`,
    findpw: (userId: string) => `/users/${userId}/findpw`,
    changeEmail: "/users/change-email",
  }
}