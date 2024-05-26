export const paths = {
  root: "/",
  login: "/login",
  signin: "/signin",
  checkPw: "/checkpw",
  signup: "/signup",
  signout: "/signout",
  findPw: "/find-pw",
  questionnaire: "/questionnaire",
  lifestyle: "/lifestyle",
  images: {
    eClickIco: "/images/eClick48x48.ico",
    mainLogo: "/images/main_logo.png",
  },
  settings: (path: "lockpw") => `/settings/${path}`,
  success: (kind: string) => `/success?kind=${kind}`,
  adminSettings: (path: "common" | "registuser") => `/admin/settings/${path}`
};

export const apiPaths = {
  adminSettings: "/admin-settings",
  adminSettingsFind: "/admin-settings/find"
}