import * as React from 'react';
import styles from './TicTacToe.module.scss';
import { ITicTacToeProps } from './ITicTacToeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export class Square extends React.Component<any, any>{
  render() {
    return (
      <button>X</button>
    );
  }
}

export class Board extends React.Component<any, any>{
  private renderSquare(i){
    return(
      <Square /> 
    );  
  }
  render() {
    return (
      <div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(3)}
      </div>
      <div  className="board-row">
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
      </div>
      <div  className="board-row">
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        {this.renderSquare(9)}
      </div>
      </div>
    );
  }
}

export class Game extends React.Component<any, any>{
  render() {
    return (
      <div>
        <h2>hello from game</h2>
        <Board />
      </div>
    );
  }

}

export default class TicTacToe extends React.Component<ITicTacToeProps, void> {
  public render(): React.ReactElement<ITicTacToeProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>

          <Game />
          
          {/*
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
          */}
        </div>
      </div>
    );
  }
}
