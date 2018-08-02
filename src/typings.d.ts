declare module SpaceX {
    export interface Core {
        core_serial: string;
        flight?: number;
        block?: number;
        reused?: boolean;
        land_success?: any;
        landing_type: string;
        landing_vehicle: string;
    }

    export interface FirstStage {
        cores: Core[];
    }

    export interface OrbitParams {
        reference_system: string;
        regime: string;
        longitude?: any;
        semi_major_axis_km?: any;
        eccentricity?: any;
        periapsis_km?: any;
        apoapsis_km?: any;
        inclination_deg?: any;
        period_min?: any;
        lifespan_years?: number;
    }

    export interface Payload {
        payload_id: string;
        reused: boolean;
        customers: string[];
        payload_type: string;
        payload_mass_kg?: number;
        payload_mass_lbs?: number;
        orbit: string;
        orbit_params: OrbitParams;
    }

    export interface SecondStage {
        block?: any;
        payloads: Payload[];
    }

    export interface Rocket {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: FirstStage;
        second_stage: SecondStage;
    }

    export interface Telemetry {
        flight_club?: any;
    }

    export interface Reuse {
        core: boolean;
        side_core1: boolean;
        side_core2: boolean;
        fairings: boolean;
        capsule: boolean;
    }

    export interface LaunchSite {
        site_id: string;
        site_name: string;
        site_name_long: string;
    }

    export interface Links {
        mission_patch?: any;
        mission_patch_small?: any;
        reddit_campaign: string;
        reddit_launch?: any;
        reddit_recovery?: any;
        reddit_media?: any;
        presskit?: any;
        article_link?: any;
        wikipedia?: any;
        video_link?: any;
    }

    export interface Flight {
        flight_number: number;
        mission_name: string;
        launch_year: string;
        launch_date_unix: number;
        launch_date_utc: Date;
        launch_date_local: Date;
        rocket: Rocket;
        telemetry: Telemetry;
        reuse: Reuse;
        launch_site: LaunchSite;
        launch_success?: any;
        links: Links;
        details?: any;
    }
}