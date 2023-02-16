import { routerLogin } from '@view/Auth/Login/router';
import { routerViewProfile } from '@view/Auth/Profiles/router';
import { routerHome } from '@view/Home/router';
import { routerPageError } from '@view/PageError/router';
import {routerForgotPassword} from '@view/Auth/ForgotPassword/router';
import {routerRegister} from '@view/Auth/Register/router';
import { IRouter } from './interface';
import { routerResetPassword } from '@view/Auth/ResetPassword/router';

export const privatePage: IRouter[] = [];

export const publicPage: IRouter[] = [routerLogin, routerHome, routerViewProfile, routerPageError, routerForgotPassword, routerRegister, routerResetPassword];
