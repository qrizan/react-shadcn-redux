import { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';

import MainLayout from "@/views/layouts/MainLayout";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { DataTable } from "@/components/data-table";
import { PaginationNextPrev } from "@/components/pagination-next-prev";
import { Button } from "@/components/ui/button";
import { columns } from "./table-columns";

import { RootState } from '@/store/types/rootTypes';
import { getUsersRequest } from '@/store/actions/users/getUsers';
import { selectUsers } from '@/store/selectors/usersSelector';
import { IResponseUsers } from "@/dtos/users.dto";

interface UserProps extends IResponseUsers {
  loading: boolean;
  error: null;
}

interface UsersComponentProps {
  users: UserProps;
  getUsers: (page: number, keyword: string) => void;
}

const UsersComponent: React.FC<UsersComponentProps> = (props) => {

  const { users, getUsers } = props

  const [keyword, setKeyword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const paginationPage = users.pagination.page;
  const paginationTotal = users.pagination.total;
  const paginationLimit = users.pagination.limit;

  const totalPages = Math.ceil(paginationTotal / paginationLimit)

  useEffect(() => {
    getUsers(paginationPage, keyword);
    inputRef.current?.focus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
      getUsers(paginationPage - 1, keyword);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        getUsers(paginationPage - 1, keyword);
    }
  };

  const handlePreviousPage = () => {
      getUsers(paginationPage - 1, keyword);
  };

  const handleNextPage = () => {
      getUsers(paginationPage + 1, keyword);
  };

  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
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
        <Separator />
        {users.error && (
          <div className="text-center">Error: {users.error}</div>
        )}
        
        {
          users.data && <DataTable columns={columns} data={users.data} />
        }
        
        <PaginationNextPrev 
          loading={users.loading} 
          page={paginationPage} 
          totalPages={totalPages}
          previousPage={handlePreviousPage}
          nextPage={handleNextPage}
        />
      </div>
    </MainLayout>
  )
}

const mapStateToProps = (state: RootState) => ({
  users: selectUsers(state)
});

const mapDispatchToProps = {
  getUsers: getUsersRequest,
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
export default UsersContainer;
