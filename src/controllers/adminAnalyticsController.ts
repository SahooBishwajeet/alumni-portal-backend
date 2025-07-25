import { Request, Response } from 'express';
import { apiError, apiSuccess } from '../utils/apiResponses';
import {
    getEventAnalytics,
    getJobAnalytics,
    getLoginAnalytics,
    getReferralAnalytics,
    getUserAnalytics,
} from './helpers/adminAnalyticsHelper';
import { getAlumniAnalytics } from './helpers/alumniAnalyticsHelper';
import { getContactAnalyticsDetailed } from './helpers/contactAnalyticsHelper';
import { getDetailedUserAnalytics } from './helpers/detailedUserAnalyticsHelper';
import { getEventAnalyticsDetailed } from './helpers/eventAnalyticsHelper';
import { getJobAnalyticsDetailed } from './helpers/jobAnalyticsHelper';
import { getReferralAnalyticsDetailed } from './helpers/referralAnalyticsHelper';

// Get admin dashboard analytics
export const getDashboardAnalytics = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const [userStats, eventStats, referralStats, jobStats, loginStats] =
            await Promise.all([
                getUserAnalytics(),
                getEventAnalytics(),
                getReferralAnalytics(),
                getJobAnalytics(),
                getLoginAnalytics(),
            ]);

        const analytics = {
            users: userStats,
            events: eventStats,
            referrals: referralStats,
            jobs: jobStats,
            logins: loginStats,
        };

        apiSuccess(
            res,
            analytics,
            'Dashboard analytics retrieved successfully',
        );
    } catch (error) {
        apiError(
            res,
            error instanceof Error
                ? error.message
                : 'Failed to fetch dashboard analytics',
        );
    }
};

// Get detailed user analytics
export const getDetailedAnalyticsUsers = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const detailedStats = await getDetailedUserAnalytics();

        apiSuccess(
            res,
            detailedStats,
            'Detailed user analytics retrieved successfully',
        );
    } catch (error) {
        apiError(
            res,
            error instanceof Error
                ? error.message
                : 'Failed to fetch detailed user analytics',
        );
    }
};

// Get detailed alumni analytics
export const getDetailedAnalyticsAlumni = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const detailedStats = await getAlumniAnalytics();

        apiSuccess(
            res,
            detailedStats,
            'Detailed alumni analytics retrieved successfully',
        );
    } catch (error) {
        apiError(
            res,
            error instanceof Error
                ? error.message
                : 'Failed to fetch detailed alumni analytics',
        );
    }
};

// Get detailed event analytics
export const getDetailedAnalyticsEvents = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const detailedStats = await getEventAnalyticsDetailed();
        apiSuccess(
            res,
            detailedStats,
            'Detailed event analytics retrieved successfully',
        );
    } catch (error) {
        apiError(
            res,
            error instanceof Error
                ? error.message
                : 'Failed to fetch detailed event analytics',
        );
    }
};

// Get detailed job analytics
export const getDetailedAnalyticsJobs = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const detailedStats = await getJobAnalyticsDetailed();
        apiSuccess(
            res,
            detailedStats,
            'Detailed job analytics retrieved successfully',
        );
    } catch (error) {
        apiError(
            res,
            error instanceof Error
                ? error.message
                : 'Failed to fetch detailed job analytics',
        );
    }
};

// Get detailed referral analytics
export const getDetailedAnalyticsReferrals = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const detailedStats = await getReferralAnalyticsDetailed();
        apiSuccess(
            res,
            detailedStats,
            'Detailed referral analytics retrieved successfully',
        );
    } catch (error) {
        apiError(
            res,
            error instanceof Error
                ? error.message
                : 'Failed to fetch detailed referral analytics',
        );
    }
};

// Get detailed contact analytics
export const getDetailedAnalyticsContacts = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const detailedStats = await getContactAnalyticsDetailed();
        apiSuccess(
            res,
            detailedStats,
            'Detailed contact analytics retrieved successfully',
        );
    } catch (error) {
        apiError(
            res,
            error instanceof Error
                ? error.message
                : 'Failed to fetch detailed contact analytics',
        );
    }
};
