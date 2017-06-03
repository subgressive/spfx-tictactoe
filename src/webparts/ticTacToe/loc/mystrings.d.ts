declare interface ITicTacToeStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'ticTacToeStrings' {
  const strings: ITicTacToeStrings;
  export = strings;
}
