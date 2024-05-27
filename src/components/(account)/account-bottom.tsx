import { paths } from "@/paths";
import { Link } from "@nextui-org/react";

type AccountType = "findpw" | "signup" | "signin";
interface AccountBottomProps {
  type: AccountType;
}

export function AccountBottom({ type }: AccountBottomProps) {
  const { href, linkMessage, linkText } = getLinkData(type);

  return (
    <>
      {type !== "findpw" && (
        <Link
          className="text-center  font-bold text-blue-500"
          href={paths.findPw}
        >
          비밀번호 찾기
        </Link>
      )}
      <div className="space-x-2">
        <span>{linkMessage}</span>
        <Link className="text-center text-blue-500" href={href}>
          {linkText}
        </Link>
      </div>
    </>
  );
}

function getLinkData(type: AccountType): {
  href: string;
  linkText: string;
  linkMessage: string;
} {
  switch (type) {
    case "findpw":
      return {
        href: paths.login,
        linkMessage: "비밀번호를 찾으셨나요?",
        linkText: "로그인",
      };
    case "signup":
      return {
        href: paths.login,
        linkMessage: "이미 계정이 존재하나요?",
        linkText: "로그인",
      };
    default:
      return {
        href: paths.signup,
        linkMessage: "처음이신가요?",
        linkText: "회원가입",
      };
  }
}
