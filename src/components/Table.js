import React, { Component } from 'react';
import MaterialTable from 'material-table';

class Table extends Component {
  handleChangeRowsPerPage = event => {
    this.props.setRowsPerPage(parseInt(event.target.value, 10));
  };
  handleChangePage = (newPage) => {
    this.props.setPage(newPage);
  };

  render() {
    let tempArr = this.props.games.map(g => {
      return {
        id: g.id,
        name: g.name,
        num: g.players.length
      };
    });

    return (
      <MaterialTable
        title='Games played'
        showFirstLastPageButtons={ true }
        columns={ [
          {
            title: 'ID',
            field: 'id'
          },
          {
            title: 'Name',
            field: 'name'
          },
          {
            title: 'Nr. of players',
            field: 'num',
            type: 'numeric'
          }
        ] }
        data={ [...tempArr] }
        components={ {
          Toolbar: props => {
            return null;
          }
        } }
        options={ { paginationType: 'normal' } }
        localization={ {
          pagination: {
            labelDisplayedRows: '{from}-{to} of {count}'
          },
          toolbar: {
            nRowsSelected: '{0} row(s) selected'
          }
        } }
      />
    );
  }
}

export default Table;
