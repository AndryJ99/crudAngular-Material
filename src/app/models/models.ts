export class Users {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar?: string;
}


export class Cars {
    id?: number;
    user_id?: Users["id"];
    user_name?: Users["first_name"];
    user_email?: Users["email"];
    car_make?: string;
    car_model?: string;
    car_VIN?: string;
    car_year?: number;
    car_license_plate?: number;
}

export class Insurance {
    id?: number;
    user_id?: Users["id"];
    user_email?: Users["email"];
    car_id?: Cars["id"];
    car_model?: Cars["car_model"];
    car_make?: Cars["car_make"];
    insurance?: boolean;
}

