import { useOthers, useSelf } from "@/liveblocks.config";
import { Avatar } from "./Avatar";
import styles from "./index.module.css";
import { generateRandomName } from "@/lib/utils";
import { useMemo } from "react";

const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  
  // memoize the result of this function so that it doesn't change on every render but only when there are new users joining the room
  const memoizedUsers = useMemo(() => {
    const hasMoreUsers = users.length > 2;

    return (
      <div className="flex item-center justify-center gap-1">
        <div className="flex pl-3">
          {currentUser && (
            <Avatar name="You" otherStyles="border-[3px] border-primary-green" />
          )}

          {users.slice(0, 3).map(({ connectionId }) => {
            return (
              <Avatar key={connectionId} name={generateRandomName()} otherStyles="-ml-3" />
            );
          })}

          {hasMoreUsers && <div className={styles.more}>+{users.length - 2}</div>}
        </div>
      </div>
    );
  }, [users.length]);

  return memoizedUsers;
};

export default ActiveUsers;