export interface IData {
    section?: string;
    subsection?: string;
    title?: string;
    abstract?: string;
    url?: string;
    uri?: string;
    byline?: string;
    item_type?: string;
    updated_date?: string;
    created_date?: string;
    published_date?: string;
    material_type_facet?: string;
    kicker?: string;
    des_facet?: string[];
    org_facet?: string[];
    per_facet?: any[];
    geo_facet?: string[];
    multimedia?: IMultimedum[];
    short_url?: string;
};
export interface IMultimedum {
    url?: string;
    format?: string;
    height?: number;
    width?: number;
    type?: string;
    subtype?: string;
    caption?: string;
    copyright?: string;
};

export interface ILatestNews {
    abstract?: string;
    web_url?: string;
    snippet?: string;
    lead_paragraph?: string;
    source?: string;
    multimedia?: any[];
    headline?: IHeadline;
    keywords?: any[];
    pub_date?: string;
    document_type?: string;
    news_desk?: string;
    section_name?: string;
    subsection_name?: string;
    type_of_material?: string;
    _id?: string;
    word_count?: number;
    uri?: string;
  }
  
  export interface IHeadline {
    main?: string;
    kicker?: any;
    content_kicker?: any;
    print_headline?: any;
    name?: any;
    seo?: any;
    sub?: any;
  }
  