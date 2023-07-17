import {CreateProjectCommand} from "@/domain/command/projects/v1/create/CreateProjectCommand";
import axios from "axios";
import {IProject} from "@/domain/core/types/IProject";
import {toast} from "react-hot-toast";

export const makeCreateProjectCommandHandler = ():ICreateProjectCommandHandler  => new CreateProjectCommandHandler();

export interface ICreateProjectCommandHandler {
  handle: (project: CreateProjectCommand)=> Promise<void>
}

export class CreateProjectCommandHandler implements ICreateProjectCommandHandler {
  handle = async (project: CreateProjectCommand): Promise<void> => {

    axios
      .post('/api/v1/project', {
        name: project.name
      } as IProject)
      .then(() => {
      })
      .catch(() => {
        toast.error('Something went wrong.');
      });
  }
}
