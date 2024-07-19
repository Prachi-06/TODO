export class Task{
   _id!: string;
   title!: string;
   listtitle!: string;
   day!: Date;
   completed : boolean | undefined;
}
export interface Task {
   title: string;
   complete: boolean;
   priority: 'high' | 'medium' | 'low';
 }
 