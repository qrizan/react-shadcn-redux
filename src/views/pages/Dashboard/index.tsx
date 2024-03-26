import { useEffect } from "react";
import { connect } from 'react-redux';
import { RootState } from '@/store/types/rootTypes';

import { getDashboardRequest } from '@/store/actions/dashboard/getDashboard';

import { 
  selectDashboard
} from '@/store/selectors/dashboardSelector';

import MainLayout from "@/views/layouts/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Count } from "./count";
import { RecentUsers } from "./recent-users";
import { Overview } from "./overview";
import { IResponseDashboard } from "@/dtos/dashboard.dto";

interface DashboardProps extends IResponseDashboard {
  loading: boolean;
  error: null;
}

interface DashboardComponentProps {
  dashboard: DashboardProps;
  getDashboard: () => void;
}

const DashboardComponent: React.FC<DashboardComponentProps> = (props) => {
  const { dashboard, getDashboard } = props

  useEffect(() => {
    getDashboard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <MainLayout>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          {dashboard.error && (
            <div className="text-center">Error: {dashboard.error}</div>
          )}
          <Count 
            users={dashboard.data && dashboard.data.users} 
            games={dashboard.data && dashboard.data.games}  
            categories={dashboard.data && dashboard.data.categories}  
            bookmarks={dashboard.data && dashboard.data.bookmarks} 
          />

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Bookmark Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview gamesBookmarked={dashboard.data && dashboard.data.gamesBookmarked} />
              </CardContent>
            </Card>
            
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>
                  Last user registered
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentUsers latestUser={dashboard.data && dashboard.data.latestUser}/>
              </CardContent>
            </Card>
          </div>
        </div>
    </MainLayout>
  )
}
const mapStateToProps = (state: RootState) => ({
  dashboard: selectDashboard(state),
});

const mapDispatchToProps = {
  getDashboard: getDashboardRequest,
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
export default DashboardContainer;
