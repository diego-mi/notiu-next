'use client';

import {toast} from "react-hot-toast";
import axios from "axios";
import {IProject} from "@/domain/core/types/IProject";

export default function Home() {

  const createProject = async(): Promise<void> => {
    axios
      .post('/api/v1/projects', {
        name: 'Name Default'
      } as IProject)
      .then(() => {
        toast.success('Projeto criado');
      })
      .catch(() => {
        toast.error('Something went wrong.');
      });
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

