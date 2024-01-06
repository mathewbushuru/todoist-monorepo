import { useState } from "react";
import { MessageSquare, X, Inbox } from "lucide-react";
import { LabelledInput } from "ui";
import {
  Modal,
  ModalAction,
  ModalCancel,
  ModalContent,
  ModalTrigger,
} from "ui";

function CommentsModal() {
  const [comment, setComment] = useState("");

  return (
    <Modal>
      <ModalTrigger>
        <MessageSquare className="h-6 w-6 cursor-pointer" />
      </ModalTrigger>
      <ModalContent className="h-5/6 max-w-xl gap-2">
        {/* Header/Close button  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Inbox className="h-6 w-6 stroke-1 text-link" />
            <span className="text-sm font-light text-foreground/80">Inbox</span>
          </div>
          <ModalCancel className="px-2 py-1">
            <X className="h-6 w-6 stroke-1 text-muted" />
          </ModalCancel>
        </div>

        {/* Comments / Activity tab  */}
        <div>
          <div className="flex max-w-[12rem] justify-between rounded-full bg-muted/10 p-1">
            <span className="cursor-pointer rounded-full bg-popover px-4 py-1 text-sm font-semibold text-popover-foreground/90">
              Comments
            </span>
            <span className=" px-4 py-1 text-sm font-semibold text-popover-foreground/90">
              Activity
            </span>
          </div>
        </div>

        {/* Messages  */}
        <div className="flex flex-col flex-1 items-center justify-center">
          <img src="/discussions.jpg" className="w-1/2"/>
          <span className="max-w-[14rem] text-center text-sm text-popover-foreground/60">
            Centralize your project's high level discussions in project
            comments.
          </span>
        </div>

        {/* Input  */}
        <div className="flex flex-col gap-4">
          <LabelledInput
            label="Comment"
            inputContent={comment}
            onInputContentChange={setComment}
          />
          <ModalAction>Comment</ModalAction>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default CommentsModal;
