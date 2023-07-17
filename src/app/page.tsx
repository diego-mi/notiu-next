'use client';

import {makeCreateProjectCommandHandler} from "@/domain/command/projects/v1/create/CreateProjectCommandHandler";
import {CreateProjectCommand} from "@/domain/command/projects/v1/create/CreateProjectCommand";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  const createProject = async(): Promise<void> => {
    try {
      await makeCreateProjectCommandHandler().handle({name: 'teste'} as CreateProjectCommand);

      toast.success('Projeto Criado!');
      router.refresh();
    } catch (e) {
      console.log('error', e)
    }
  }

  return (
    <>
      <div className="min-h-screen text-zinc-900 mx-auto overflow-hidden pt-[85px] pl-5 pr-5">
        <p>Welcome</p>

        <button className='bg-zinc-400 rounded p-1 pl-3 pr-3 hover:bg-zinc-500 transition text-zinc-50' onClick={() => {createProject()}}>Criar projeto</button>
      </div>

    </>
  )
}

