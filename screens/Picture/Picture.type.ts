export interface IPredictionResult {
  score: number;
  species: {
    scientificNameWithoutAuthor: string;
    scientificNameAuthorship: string;
    scientificName: string;
    genus: {
      scientificNameWithoutAuthor: string;
      scientificNameAuthorship: string;
      scientificName: string;
    };
    family: {
      scientificNameWithoutAuthor: string;
      scientificNameAuthorship: string;
      scientificName: string;
    };
    commonNames: string[];
  };
  images: {
    organ: string;
    author: string;
    license: string;
    date: {
      timestamp: number;
      string: string;
    };
    citation: string;
    url: {
      o: string;
      m: string;
      s: string;
    };
  }[];
  gbif: {
    id: number;
  };
  powo: {
    id: string;
  };
  iucn: {
    id: string;
    category: string;
  };
}
