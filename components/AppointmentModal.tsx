"use client";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentForm } from "./forms/AppointmentForm";

import "react-datepicker/dist/react-datepicker.css";

export const AppointmentModal = ({
  patientId,
  userId,
  appointment,
  type,
  title,
  description,
}: {
  patientId: string;
  userId: string;
  appointment?: Appointment;
  type: "schedule" | "cancel";
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);
  const [showCancelForm, setShowCancelForm] = useState(false);

  if (type === "cancel") {
    return (
      <>
        <Button
          variant="ghost"
          className="capitalize text-red-500"
          onClick={() => setOpen(true)}
        >
          Cancel
        </Button>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent className="shad-alert-dialog">
            <AlertDialogHeader>
              <AlertDialogTitle>Cancel Appointment</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to cancel this appointment?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline">No, go back</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setOpen(false);
                    setShowCancelForm(true);
                  }}
                >
                  Yes, cancel appointment
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* Show the form only after confirmation */}
        {showCancelForm && (
          <Dialog open={showCancelForm} onOpenChange={setShowCancelForm}>
            <DialogContent className="shad-dialog sm:max-w-md">
              <DialogHeader className="mb-4 space-y-3">
                <DialogTitle className="capitalize">Cancel Appointment</DialogTitle>
                <DialogDescription>
                  Please fill in the following details to cancel appointment
                </DialogDescription>
              </DialogHeader>
              <AppointmentForm
                userId={userId}
                patientId={patientId}
                type={type}
                appointment={appointment}
                setOpen={setShowCancelForm}
              />
            </DialogContent>
          </Dialog>
        )}
      </>
    );
  }

  // Default: schedule
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="capitalize text-green-500"
        >
          Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">Schedule Appointment</DialogTitle>
          <DialogDescription>
            Please fill in the following details to schedule appointment
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm
          userId={userId}
          patientId={patientId}
          type={type}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};
