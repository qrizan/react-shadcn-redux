import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAILURE,
} from '@/store/types/dashboard/getDashboard';
import { IDashboard, IRequestGetDashboard } from "@/dtos/dashboard.dto";

export const getDashboardRequest = (): IRequestGetDashboard => ({
  type: GET_DASHBOARD_REQUEST,
});

export const getDashboardSuccess = (data: IDashboard) => ({
  type: GET_DASHBOARD_SUCCESS,
  payload: {
    data
  }
});

export const getDashboardFailure = (error: string) => ({
  type: GET_DASHBOARD_FAILURE,
  payload: { error },
});

