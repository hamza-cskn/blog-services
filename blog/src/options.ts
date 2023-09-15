interface FindAllOptions {
  showUnverified: boolean;
  plainText: boolean;
  pagination: {
    limit: number;
    offset: number;
  };
}
