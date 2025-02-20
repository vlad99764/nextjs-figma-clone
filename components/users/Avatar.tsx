import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

/**
 * This file shows how to add live avatars like you can see them at the top right of a Google Doc or a Figma file.
 * https://liveblocks.io/docs/examples/live-avatars
 *
 * The users avatar and name are not set via the `useMyPresence` hook like the cursors.
 * They are set from the authentication endpoint.
 *
 * See pages/api/liveblocks-auth.ts and https://liveblocks.io/docs/api-reference/liveblocks-node#authorize for more information
 */

type Props = {
  name: string;
  otherStyles?: string;
};

export function Avatar({ name, otherStyles }: Props) {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <div className={`${styles.avatar} ${otherStyles}`} data-tooltip={name}>
            <Image
              className={styles.avatar_picture}
              src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 15)}.png`}
              alt="user avatar"
              fill
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="border-none bg-primary-grey-200 px-4 py-2 text-xs">
          {name}
        </TooltipContent>
      </Tooltip>
    </>
  );
}