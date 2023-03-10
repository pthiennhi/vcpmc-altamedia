import { routerLogin } from '@view/Auth/Login/router';
import { routerViewProfile } from '@view/Auth/Profiles/router';
import { routerHome } from '@view/Home/router';
import { routerPageError } from '@view/PageError/router';
import { routerForgotPassword } from '@view/Auth/ForgotPassword/router';
import { routerRegister } from '@view/Auth/Register/router';
import { IRouter } from './interface';
import { routerResetPassword } from '@view/Auth/ResetPassword/router';
import { routerKhoBanGhi } from '@view/KhoBanGhi/router';
import { routerAdd } from '@view/Home/AddNewDevice/router';
import { routerProfit } from '@view/Home/Profit/router';
import { routerInfo } from '@view/Home/InfoDevice/router';
import { routerProfitDetail } from '@view/Home/ProfitDetail/router';
import { routerHistory } from '@view/Home/HistoryProfit/router';
import { routerHistoryProfitDetail } from '@view/Home/HistoryProfitDetail/router';
import { routerReportProfit } from '@view/Home/ReportProfit/router';
import { routerReportDetail } from '@view/Home/ReportDetail/router';
import { routerDetailR } from '@view/Home/ReportProfit/detail/router';
import { routerDetailHistoryR } from '@view/Home/ReportProfit/history/router';

export const privatePage: IRouter[] = [];

export const publicPage: IRouter[] = [
  routerLogin,
  routerHome,
  routerViewProfile,
  routerPageError,
  routerForgotPassword,
  routerRegister,
  routerResetPassword,
  routerKhoBanGhi,
  routerAdd,
  routerProfit,
  routerInfo,
  routerProfitDetail,
  routerHistory,
  routerHistoryProfitDetail,
  routerReportProfit,
  routerReportDetail,
  routerDetailR,
  routerDetailHistoryR,
];
