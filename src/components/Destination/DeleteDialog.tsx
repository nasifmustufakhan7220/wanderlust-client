"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

import { redirect, useRouter } from "next/navigation";
import { IDestination } from "./DestinationCard";

const DeleteDialog = ({detail}:{detail: IDestination}) => {
  const router = useRouter();
  const handelDelete = async(id:string)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/destinations/${id}`,{
      method: "DELETE",
    });

    const data = await res.json();
    if(data.deletedCount > 0){ 
        router.refresh();
        redirect('/destinations');
    };

  }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button className="flex items-center gap-1.5 border border-red-300 px-3 py-1.5 text-xs text-red-500 bg-white hover:bg-red-50 cursor-pointer">
              <Trash2 size={12} />
              Delete
            </Button>
          }
        >
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>handelDelete(detail._id)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteDialog;
