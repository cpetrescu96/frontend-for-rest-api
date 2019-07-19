import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const TablePaginationActions = (props) => {
  const useStyles1 = makeStyles(theme => ({
    root: {
      flexShrink: 0,
      color: 'blue',
      marginLeft: '2.5rem'
    }
  }));
  const classes = useStyles1();

  const handleFirstPageButtonClick = event => {
    props.onChangePage(0);
  };

  const handleBackButtonClick = () => {
    props.onChangePage(props.page - 1);
  };

  const handleNextButtonClick = () => {
    props.onChangePage(props.page + 1);
  };

  const handleLastPageButtonClick = event => {
    props.onChangePage(
      Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1)
    );
  };

  const { count, page, rowsPerPage } = props;


  return (
    <div className={ classes.root }>
      <IconButton
        onClick={ handleFirstPageButtonClick }
        disabled={ page === 0 }
        aria-label='First Page'
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={ props.prevPage }
        disabled={ page === 0 }
        aria-label='Previous Page'
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={ props.nextPage }
        disabled={ page >= Math.ceil(count / rowsPerPage) - 1 }
        aria-label='Next Page'
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={ handleLastPageButtonClick }
        disabled={ page >= Math.ceil(count / rowsPerPage) - 1 }
        aria-label='Last Page'
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
}

export default TablePaginationActions;
