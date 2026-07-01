import Link from "next/link";
import RawLogo from "./RawLogo";

// const LogoContainer = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     aspect-ratio: 1 / 1;
//   }
// `;

type Props = {
  home: string;
  className?: string;
};

export default function AppLogo({ home, className }: Props) {
  return (
    <Link className={className} href={home}>
      <RawLogo />
    </Link>
  );
}
