import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ticTacToeStrings';
import TicTacToe from './components/TicTacToe';
import { ITicTacToeProps } from './components/ITicTacToeProps';
import { ITicTacToeWebPartProps } from './ITicTacToeWebPartProps';

export default class TicTacToeWebPart extends BaseClientSideWebPart<ITicTacToeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITicTacToeProps > = React.createElement(
      TicTacToe,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
