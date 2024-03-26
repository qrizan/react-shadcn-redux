import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dayjs from "dayjs";

import { ILatestUser } from "@/dtos/dashboard.dto";

interface IRecentUsersProps {
  latestUser: ILatestUser[],
}

export const RecentUsers: React.FC<IRecentUsersProps> = (props) => {  
  const { latestUser } = props

  const baseUrl = import.meta.env.VITE_API_URL

  return (
    <div className="space-y-8">
      {
        latestUser && Object.values(latestUser).map((user) => (
          <div key={user.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={`${baseUrl}${user.avatar}`} alt={user.username} />
              <AvatarFallback>{user?.username?.[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{user.username}</p>
              <p className="text-sm text-muted-foreground">
              {user.email}
              </p>
            </div>
            <div className="ml-auto text-sm font-medium">{dayjs(user.createdAt).format('DD MMMM YYYY')}</div>
          </div>
        ))
      }

    </div>
  );
}

