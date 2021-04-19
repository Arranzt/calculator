import * as actionTypes from '../utils/actionTypes';

interface initialAppState {
  inputValue: number,
  operator: string,
  resultValue: number,
  addRecordValue: number,
  subtractRecordValue: number,
  multyplyRecordValue: number,
  calculate: boolean,
  showingResult: boolean,
}

const initialAppState = {
  inputValue: 0,
  operator: '',
  resultValue: 0,
  addRecordValue: 0,
  subtractRecordValue: 0,
  multyplyRecordValue: 0,
  calculate: false,
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue + action.number,
        addRecordValue: state.addRecordValue + action.number,
        subtractRecordValue: state.subtractRecordValue - action.number,
        multyplyRecordValue: state.multyplyRecordValue * action.number,
        showingResult: false,
      };

    case actionTypes.PLUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          addRecordValue: state.addRecordValue,
          calculate: false,
          resultValue: state.resultValue + state.addRecordValue,
          showingResult: false,
        };
      } else {
        return {
          ...state,
          inputValue: state.inputValue + "+",
          operator: '+',
          addRecordValue: state.addRecordValue,
          calculate: true,
          resultValue: 0,
          showingResult: true,
        };
      }

    case actionTypes.MINUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          subtractRecordValue: state.subtractRecordValue,
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case actionTypes.MULTIPLY:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          multyplyRecordValue: state.multyplyRecordValue,
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case actionTypes.DIVIDE:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case actionTypes.CLEAR:
      return {
        inputValue: 0,
        operator: '',
        calculate: false,
        addRecordValue: 0,
        resultValue: 0,
        showingResult: false,
      };

    case actionTypes.EQUAL:
      switch (state.operator) {
        case '+':
          return {
            inputValue: state.inputValue,
            operator: '',
            calculate: false,
            addRecordValue: state.addRecordValue,
            resultValue: state.addRecordValue,
            showingResult: true,
          };
        case '-':
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
        case '*':
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
          };
        case '/':
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default calculator;