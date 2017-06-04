import * as React from 'react';
import styles from './TicTacToe.module.scss';
import { ITicTacToeProps } from './ITicTacToeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export class Square extends React.Component<any, any>{
  render() {
    return (
      <div className={`ms-Grid-col ms-u-sm4 ms-u-md4 ${styles.squareCont}`}
        onClick={() => this.props.onSquareClick()}>
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}

export class Board extends React.Component<any, any>{
  constructor() {
    super();

    var p1 = {name: "Player 1", value:"x"};
    var p2 = {name: "Player 2", value:"o"};
    this.state = {
      values: Array(9),
      player1: p1,
      player2: p2,
      currentPlayer: p1
    }
  }

  handleSquareClick(id: number) {
    let vals = this.state.values.slice();

    vals[id] = this.state.currentPlayer.value;
    this.setState({values:vals});

    if (this.state.currentPlayer == this.state.player1) {
      this.setState({currentPlayer:  this.state.player2});
    } else {
      this.setState({currentPlayer:  this.state.player1});
    }
    console.log("hey u clicked square number "+id);
  }
  private renderRow(startIndex: number, colCount: number) {

    var col = [];

    for (var i = 0; i < colCount; i++) {
      let index = startIndex;
      col.push(<Square key={index} 
        onSquareClick={() => this.handleSquareClick(index)} 
        value={this.state.values[startIndex]} />);
      startIndex++;
    }

    return (
      <div className="ms-Grid-row">
        {col}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h3  className={styles.squareContH3}>It is {this.state.currentPlayer.name}'s turn</h3>
        <div className={`ms-Grid ${styles.gridCont}`}>
          {this.renderRow(0, 3)}
          {this.renderRow(3, 3)}
          {this.renderRow(6, 3)}
        </div>
      </div>
    );
  }
}

export class Game extends React.Component<any, any>{
  render() {
    return (
      <div>
        <h2 className={styles.gridContH2}> Tic Tac Toe {this.props.name}</h2>
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

          <Game name="SPFx" />

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
