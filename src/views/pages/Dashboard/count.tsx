import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookmarkIcon, CubeIcon, DrawingPinIcon, PersonIcon } from "@radix-ui/react-icons";

interface ICountProps {
  users: number,
  games: number,
  categories: number,
  bookmarks: number,
}

export const Count: React.FC<ICountProps> = (props) => {
  const { users, games, categories, bookmarks } = props

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Users
          </CardTitle>
          <PersonIcon />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{users && users.toLocaleString()}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Games
          </CardTitle>
          <CubeIcon />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{games && games.toLocaleString()}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Categories</CardTitle>
          <DrawingPinIcon />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{categories && categories.toLocaleString()}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Bookmark
          </CardTitle>
          <BookmarkIcon />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{bookmarks && bookmarks.toLocaleString()}</div>
        </CardContent>
      </Card>
    </div>
  );
}