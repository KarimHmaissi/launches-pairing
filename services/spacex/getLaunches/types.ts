export interface LaunchPaginatedResponse {
  docs: LaunchResponse[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: null;
}

export interface LaunchResponse {
  id: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: 'half' | 'quarter' | 'year' | 'month' | 'day' | 'hour';
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: [
    {
      time: number;
      altitude: number | null;
      reason: string;
    }
  ];
  upcoming: boolean;
  details: string;
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
  };
  crew: {
    crew: string;
    role: string;
  }[];
  ships: string[];
  capsules: string[];
  payloads: Payload[];
  launchpad: string;
  cores: [
    {
      core: string;
      flight: number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: boolean | null;
      landing_type: string | null;
      landpad: string | null;
    }
  ];
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string | null;
      launch: string | null;
      media: string | null;
      recovery: string | null;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string | null;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  auto_update: boolean;
}

interface Payload {
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string[];
  norad_ids: number[];
  nationalities: string[];
  manufacturers: string[];
  mass_kg: number;
  mass_lbs: number;
  orbit: string;
  reference_system: string;
  regime: string;
  longitude: number | null;
  semi_major_axis_km: number | null;
  eccentricity: number | null;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number | null;
  lifespan_years: number | null;
  epoch: string | null;
  mean_motion: number | null;
  raan: number | null;
  arg_of_pericenter: number | null;
  mean_anomaly: number | null;
  id: string;
  dragon: {
    capsule: string | null;
    mass_returned_kg: number | null;
    mass_returned_lbs: number | null;
    flight_time_sec: number | null;
    manifest: string | null;
    water_landing: boolean | null;
    land_landing: boolean | null;
  };
}

export interface LaunchRequest {
  query: {
    upcoming?: boolean;
  };
  options: {
    populate: 'payloads'[];
    limit: number;
    sort?: {
      [key: string]: string;
    };
  };
}
