import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CellStatusesEnum } from '../../enums/cell-statuses.enum';
import { InformationModalComponent } from 'src/app/shared/components/modals/information-modal/information-modal.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePageComponent implements OnInit {
  form: FormGroup;

  rowsNum = 10;

  cellsInRowNum = 10;

  board: { status: CellStatusesEnum }[][] = [];

  randomBoardCell: { status: CellStatusesEnum };

  cells: { rowIdx: number; cellIdx: number }[] = [];

  randomCellIdx: number;

  gameStarted: boolean;

  intervalId: number;

  playerScore = 0;

  computerScore = 0;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.initBoard();

    this.form = this.fb.group({
      reactionTime: [1000, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  initBoard() {
    for (let i = 0; i < this.rowsNum; i++) {
      const row = [];

      for (let j = 0; j < this.cellsInRowNum; j++) {
        row.push({ status: CellStatusesEnum.INACTIVE });
        this.cells.push({ rowIdx: i, cellIdx: j });
      }

      this.board.push(row);
    }
  }

  startGame() {
    if (this.playerScore || this.computerScore) {
      this.board = [];
      this.cells = [];
      this.randomCellIdx = -1;
      this.playerScore = 0;
      this.computerScore = 0;
      this.initBoard();
    }

    this.gameStarted = true;
    this.form.controls['reactionTime'].disable();
    this.runGameLoop();
  }

  runGameLoop() {
    this.highlightRandomCell();

    this.intervalId = setInterval(() => {
      if (this.randomBoardCell.status === CellStatusesEnum.ACTIVE) {
        this.randomBoardCell.status = CellStatusesEnum.COMPUTER_SCORED;
        this.computerScore++;

        if (this.computerScore === 10) {
          clearInterval(this.intervalId);
          const modalText = `Гра завершилася з результатом ${this.playerScore}:${this.computerScore} на користь комп'ютера.`;
          this.openModal(modalText);
        } else {
          this.highlightRandomCell();
        }

        this.cd.markForCheck();
      }
    }, this.form.value.reactionTime);
  }

  highlightRandomCell() {
    if (this.randomCellIdx > -1) {
      this.cells.splice(this.randomCellIdx, 1);
    }

    this.randomCellIdx = Math.round(Math.random() * (this.cells.length - 1));
    this.randomBoardCell = this.board[this.cells[this.randomCellIdx].rowIdx][this.cells[this.randomCellIdx].cellIdx];
    this.randomBoardCell.status = CellStatusesEnum.ACTIVE;
  }

  cellClickHandler(cell: { status: CellStatusesEnum }) {
    if (cell.status === CellStatusesEnum.ACTIVE) {
      clearInterval(this.intervalId);
      cell.status = CellStatusesEnum.PLAYER_SCORED;
      this.playerScore++;

      if (this.playerScore === 10) {
        const modalText = `Гра завершилася з результатом ${this.playerScore}:${this.computerScore} на користь гравця.`;
        this.openModal(modalText);
      } else {
        this.runGameLoop();
      }
    }
  }

  openModal(text: string) {
    this.dialog.open(InformationModalComponent, {
      data: { title: 'Результат гри', text },
      autoFocus: false,
    });

    this.gameStarted = false;
    this.form.controls['reactionTime'].enable();
  }
}
