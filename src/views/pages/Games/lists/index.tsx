import { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { PlusIcon } from "@radix-ui/react-icons";

import MainLayout from "@/views/layouts/MainLayout";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/data-table";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { PaginationNextPrev } from "@/components/pagination-next-prev";
import { columns } from "./table-columns"

import { RootState } from '@/store/types/rootTypes';
import { getGamesRequest } from '@/store/actions/games/getGames';
import { selectGames } from '@/store/selectors/gamesSelector';
import { selectNotification } from "@/store/selectors/notification";
import { IResponseGames } from "@/dtos/games.dto";

interface GamesProps extends IResponseGames {
  loading: boolean;
  error: null;
}

interface GamesComponentProps {
  games: GamesProps;
  getGames: (page: number, keyword: string) => void;
  notification: string;
}

const GamesComponent: React.FC<GamesComponentProps> = (props) => {
  const { games, getGames, notification } = props

  const [keyword, setKeyword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const paginationPage = games.pagination.page;
  const paginationTotal = games.pagination.total;
  const paginationLimit = games.pagination.limit;

  const totalPages = Math.ceil(paginationTotal / paginationLimit)

  useEffect(() => {
    getGames(paginationPage, keyword);

    inputRef.current?.focus();

    if(notification){
      toast({
        title: "Notification",
        description: notification,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification]);

  const handleSearch = () => {
      getGames(paginationPage - 1, keyword);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        getGames(paginationPage - 1, keyword);
    }
  };

  const handlePreviousPage = () => {
      getGames(paginationPage - 1, keyword);
  };

  const handleNextPage = () => {
      getGames(paginationPage + 1, keyword);
  };

  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-start justify-between">
          <div className="flex w-1/2 items-center space-x-2">
            <Input
              ref={inputRef}
              placeholder='Keyword...'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Button variant="outline" onClick={handleSearch}>Search</Button>
          </div>

          <Link
            to="/game/new"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <PlusIcon className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>

        <Separator />
        {games.error && (
          <div className="text-center">Error: {games.error}</div>
        )}
        
        {
          games.data && <DataTable columns={columns} data={games.data} />
        }
        
        <PaginationNextPrev
          loading={games.loading}
          page={paginationPage}
          totalPages={totalPages}
          previousPage={handlePreviousPage}
          nextPage={handleNextPage}
        />
      </div>
    </MainLayout>
  );
}

const mapStateToProps = (state: RootState) => ({
  games: selectGames(state),
  notification: selectNotification(state)
});

const mapDispatchToProps = {
  getGames: getGamesRequest
};

const GamesContainer = connect(mapStateToProps, mapDispatchToProps)(GamesComponent);
export default GamesContainer;
