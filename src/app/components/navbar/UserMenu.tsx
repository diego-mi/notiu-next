'use client';

import {useCallback, useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {signOut} from 'next-auth/react';
import {useRouter} from 'next/navigation';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';

import MenuItem from './MenuItem';
import Avatar from '../Avatar';
import {SafeUser} from '@/domain/core/types';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
          flex
          cursor-pointer
          flex-row
          items-center
          gap-3
          rounded-full
          border-[1px]
          border-neutral-200
          p-4
          transition
          hover:shadow-md
          md:px-2
          md:py-1
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-12
            w-[20vw]
            overflow-hidden
            rounded-xl
            bg-white
            text-sm
            shadow-md
            md:w-[20vw]
          "
        >
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                {/*<MenuItem*/}
                {/*  label="Transações"*/}
                {/*  onClick={() => {*/}
                {/*    router.push('/transactions');*/}
                {/*    toggleOpen();*/}
                {/*  }}*/}
                {/*/>*/}
                {/*<MenuItem*/}
                {/*  label="Nova Transação"*/}
                {/*  onClick={() => {*/}
                {/*    entryModal.onOpen();*/}
                {/*    toggleOpen();*/}
                {/*  }}*/}
                {/*/>*/}
                <hr />
                <MenuItem
                  label="Logout"
                  onClick={() =>
                    signOut({
                      callbackUrl: `/`,
                    })
                  }
                />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
