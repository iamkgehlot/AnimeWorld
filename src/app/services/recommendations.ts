export interface RecommendationsArray {
 
    data: Array<arr>;
}





export interface arr {
    mal_id: string;
    url: string;
    title: string;
    images: [];
    score: string;
    type: string;
    status: string;
    duration: string;
    synopsis: string;
    year: string;
}

export interface images {
    jpg: [];
}

export interface jpg {

    image_url: string;
    small_image_url: string;
    large_image_url: string;

}