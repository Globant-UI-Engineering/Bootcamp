import React from "react";

import SummonerRow from "./SummonerRow";
import challenger from "../../public/images/challenger.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import { TablePagination } from "@material-ui/core";
import animate from "@jam3/gsap-promise";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

class RenderTierList extends React.Component {
  state = {
    order: "asc",
    orderBy: "summoner",
    page: 0,
    rowsPerPage: 7
  };

  handleRequestSort = (event, property) => {
    console.log(property);
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  componentDidMount() {
    animate.from(this.table, 0.3, { y: 1000, delay: 0.5 });
    animate.from(this.challengerLogo, 0.4, { x: -1280, delay: 0.4 });
    animate.from(this.header, 0.2, { y: -200, delay: 0.4 });
  }

  render() {
    const { summoners } = this.props;

    const { order, orderBy, rowsPerPage, page } = this.state;

    return (
      <section className="page-wrapper">
        <h2 className="challenger-section-title" ref={h2 => (this.header = h2)}>
          challenger elo
        </h2>
        <img
          src={challenger}
          alt="Challenger icon"
          ref={img => (this.challengerLogo = img)}
        />

        <Paper className="table-container">
          <div ref={div => (this.table = div)} className="table-wrapper">
            <Table
              className="summoners-table"
              aria-labelledby="Challenger summoners"
            >
              <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="25%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="14%" />
              </colgroup>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
              />

              <TableBody>
                {stableSort(summoners, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((value, index) => {
                    return (
                      <SummonerRow
                        summonerId={value.summonerId}
                        key={index}
                        rankNumber={value.rankNumber}
                        name={value.summonerName}
                        leaguePoints={value.leaguePoints}
                        wins={value.wins}
                        losses={value.losses}
                        hotStreak={value.hotStreak}
                        veteran={value.veteran}
                        freshBlood={value.freshBlood}
                      />
                    );
                  })}
              </TableBody>
            </Table>
          </div>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={summoners.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </section>
    );
  }
}

export default RenderTierList;
