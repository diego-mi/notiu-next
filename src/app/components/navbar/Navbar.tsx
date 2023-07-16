import Container from '@/app/components/Container';
import Logo from '@/app/components/navbar/Logo';
import UserMenu from '@/app/components/navbar/UserMenu';
import {SafeUser} from "@/domain/core/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className={'fixed z-10 w-full bg-white shadow-sm'}>
      <div className="py4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 p-3 md:gap-0">
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
